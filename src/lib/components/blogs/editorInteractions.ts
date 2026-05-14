import type { CollageImage } from '$lib/data/blogs';

export function createEditorInteractions(
	getImages: () => CollageImage[],
	setImages: (images: CollageImage[]) => void,
	getActiveId: () => string | 'ALL' | null,
	setActiveId: (id: string | 'ALL' | null) => void,
	getIsMobile: () => boolean,
	getContainer: () => HTMLElement | undefined
) {
	let dragMode: 'move' | 'resize' | 'rotate' | 'move_all' | null = null;
	let startMouse = { x: 0, y: 0 };

	// For Move
	let startImage = { x: 0, y: 0 };
	let startAllImages: { id: string; x: number; y: number }[] = [];
	// For Resize
	let resizeState: any = null;
	// For Rotate
	let initialRotate: number = 0;
	let centerPt = { x: 0, y: 0 };
	let startAngle: number = 0;

	function pointerDown(e: PointerEvent, img: CollageImage) {
		const activeId = getActiveId();
		const isMobile = getIsMobile();
		
		if (activeId === 'ALL') {
			dragMode = 'move_all';
			startMouse = { x: e.clientX, y: e.clientY };
			startAllImages = getImages().map((i) => ({
				id: i.id,
				x: isMobile && i.mx !== undefined ? i.mx : i.x,
				y: isMobile && i.my !== undefined ? i.my : i.y
			}));
			if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
			return;
		}

		setActiveId(img.id);
		dragMode = 'move';
		startMouse = { x: e.clientX, y: e.clientY };
		startImage = {
			x: isMobile && img.mx !== undefined ? img.mx : img.x,
			y: isMobile && img.my !== undefined ? img.my : img.y
		};
		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function startResize(e: PointerEvent, img: CollageImage, corner: string) {
		setActiveId(img.id);
		dragMode = 'resize';
		const isMobile = getIsMobile();

		const wrapper = document.getElementById('wrapper-' + img.id);
		let cx, cy, w_px, h_px;
		if (wrapper) {
			const rect = wrapper.getBoundingClientRect();
			cx = rect.left + rect.width / 2;
			cy = rect.top + rect.height / 2;
			w_px = wrapper.offsetWidth;
			h_px = wrapper.offsetHeight;
		} else {
			cx = e.clientX;
			cy = e.clientY;
			w_px = 100;
			h_px = 100;
		}

		let anchorLocalX = 0;
		let anchorLocalY = 0;
		// Anchor is the opposite corner
		if (corner === 'nw') {
			anchorLocalX = w_px / 2;
			anchorLocalY = h_px / 2;
		}
		if (corner === 'ne') {
			anchorLocalX = -w_px / 2;
			anchorLocalY = h_px / 2;
		}
		if (corner === 'sw') {
			anchorLocalX = w_px / 2;
			anchorLocalY = -h_px / 2;
		}
		if (corner === 'se') {
			anchorLocalX = -w_px / 2;
			anchorLocalY = -h_px / 2;
		}

		const theta = (img.rotate * Math.PI) / 180;
		const anchorScreenOffsetX = anchorLocalX * Math.cos(theta) - anchorLocalY * Math.sin(theta);
		const anchorScreenOffsetY = anchorLocalX * Math.sin(theta) + anchorLocalY * Math.cos(theta);

		resizeState = {
			initialX: isMobile && img.mx !== undefined ? img.mx : img.x,
			initialY: isMobile && img.my !== undefined ? img.my : img.y,
			initialScale: isMobile && img.mScale !== undefined ? img.mScale : img.scale,
			cx,
			cy,
			anchorScreenOffsetX,
			anchorScreenOffsetY,
			w_px,
			h_px,
			initialDist: Math.hypot(e.clientX - cx, e.clientY - cy)
		};

		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function startRotate(e: PointerEvent, img: CollageImage) {
		setActiveId(img.id);
		dragMode = 'rotate';
		initialRotate = img.rotate;

		const wrapper = document.getElementById('wrapper-' + img.id);
		if (wrapper) {
			const rect = wrapper.getBoundingClientRect();
			centerPt = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
		} else {
			centerPt = { x: e.clientX, y: e.clientY + 50 }; // fallback
		}

		startAngle = Math.atan2(e.clientY - centerPt.y, e.clientX - centerPt.x);
		if (e.target) (e.target as Element).setPointerCapture(e.pointerId);
	}

	function pointerMove(e: PointerEvent) {
		const activeId = getActiveId();
		const container = getContainer();
		const isMobile = getIsMobile();
		const images = getImages();
		
		if (!dragMode || !activeId || !container) return;

		if (dragMode === 'move_all') {
			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const dx = ((e.clientX - startMouse.x) / vmin) * 100;
			const dy = ((startMouse.y - e.clientY) / vmin) * 100; // Inverted for bottom anchor

			setImages(images.map((img) => {
				const startImg = startAllImages.find((i) => i.id === img.id);
				if (!startImg) return img;

				if (isMobile) {
					return { ...img, mx: startImg.x + dx, my: startImg.y + dy };
				} else {
					return { ...img, x: startImg.x + dx, y: startImg.y + dy };
				}
			}));
		} else if (dragMode === 'move') {
			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const dx = ((e.clientX - startMouse.x) / vmin) * 100;
			const dy = ((startMouse.y - e.clientY) / vmin) * 100;

			setImages(images.map((img) => {
				if (img.id === activeId) {
					if (isMobile) {
						return { ...img, mx: startImage.x + dx, my: startImage.y + dy };
					} else {
						return { ...img, x: startImage.x + dx, y: startImage.y + dy };
					}
				}
				return img;
			}));
		} else if (dragMode === 'resize') {
			const currentDist = Math.hypot(e.clientX - resizeState.cx, e.clientY - resizeState.cy);
			let scaleFactor = currentDist / Math.max(resizeState.initialDist, 1);
			const minScaleFactor = 0.02 / resizeState.initialScale;
			scaleFactor = Math.max(minScaleFactor, scaleFactor);

			const delta_Cx = resizeState.anchorScreenOffsetX * (1 - scaleFactor);
			const delta_Cy = resizeState.anchorScreenOffsetY * (1 - scaleFactor);

			const vmin = Math.min(window.innerWidth, window.innerHeight);
			const delta_x_pct = (delta_Cx / vmin) * 100;
			const delta_y_pct = (-delta_Cy / vmin) * 100;

			setImages(images.map((img) => {
				if (img.id === activeId) {
					if (isMobile) {
						return {
							...img,
							mScale: resizeState.initialScale * scaleFactor,
							mx: resizeState.initialX + delta_x_pct,
							my: resizeState.initialY + delta_y_pct
						};
					} else {
						return {
							...img,
							scale: resizeState.initialScale * scaleFactor,
							x: resizeState.initialX + delta_x_pct,
							y: resizeState.initialY + delta_y_pct
						};
					}
				}
				return img;
			}));
		} else if (dragMode === 'rotate') {
			const currentAngle = Math.atan2(e.clientY - centerPt.y, e.clientX - centerPt.x);
			const angleDelta = (currentAngle - startAngle) * (180 / Math.PI);

			setImages(images.map((img) => {
				if (img.id === activeId) {
					return { ...img, rotate: initialRotate + angleDelta };
				}
				return img;
			}));
		}
	}

	function pointerUp() {
		dragMode = null;
	}

	function pointerDownContainer(e: PointerEvent, editorMode: boolean) {
		const container = getContainer();
		const activeId = getActiveId();
		const isMobile = getIsMobile();
		const images = getImages();

		if (editorMode && e.target === container) {
			if (activeId === 'ALL') {
				dragMode = 'move_all';
				startMouse = { x: e.clientX, y: e.clientY };
				startAllImages = images.map((i) => ({
					id: i.id,
					x: isMobile && i.mx !== undefined ? i.mx : i.x,
					y: isMobile && i.my !== undefined ? i.my : i.y
				}));
				if (container) container.setPointerCapture(e.pointerId);
			} else {
				setActiveId(null);
			}
		}
	}

	return {
		pointerDown,
		startResize,
		startRotate,
		pointerMove,
		pointerUp,
		pointerDownContainer
	};
}
