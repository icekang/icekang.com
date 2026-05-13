---
name: NANO BANANA
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#414751'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#727783'
  outline-variant: '#c1c6d3'
  surface-tint: '#0c5fae'
  primary: '#004481'
  on-primary: '#ffffff'
  primary-container: '#005baa'
  on-primary-container: '#bbd4ff'
  inverse-primary: '#a6c8ff'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#424440'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a5b58'
  on-tertiary-container: '#d3d3ce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a6c8ff'
  on-primary-fixed: '#001c3b'
  on-primary-fixed-variant: '#004787'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#454744'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  nav-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.15em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  rule-weight: 1px
---

## Brand & Style

This design system is built on a foundational tension between rigid Bauhaus structuralism and the whimsical kinetic energy of 1930s "Rubber Hose" animation. The brand serves an audience that values high-level intellectual discourse but rejects the cold sterility of traditional corporate identity.

The visual style is **High-Contrast Minimalist**. It utilizes heavy horizontal and vertical rules to create an editorial framework that feels authoritative and permanent. Into this disciplined environment, we inject "Rubber Hose" accents—illustrative elements like gloved hands pointing at data or bouncy, liminal characters—to provide a necessary human warmth and a sense of "intellectual play." The emotional response should be one of serious reliability undercut by a wink of surrealist humor.

## Colors

The palette is restricted and high-impact, echoing Riso-print aesthetics.

- **Riso Blue (#005BAA):** The primary driver of action. Use it for links, primary buttons, and structural accents. It represents the "vibrancy" of the brand.
- **Sharp Black (#000000):** Used for all structural rules, typography, and "Rubber Hose" illustrations. It provides the Bauhaus "ink" that binds the system.
- **Clean Off-White (#F5F5F0):** The base canvas. This slight warmth prevents the high-contrast blue and black from feeling digitally sterile, mimicking high-quality archival paper.

## Typography

The typographic strategy balances academic authority with modern precision.

- **The Serif (Newsreader):** Used for all long-form reading and major headlines. It communicates the "Editorial" and "Intellectual" pillars of the brand. It should feel like a prestigious journal.
- **The Sans (Hanken Grotesk):** Used exclusively for navigation, labels, and metadata. By setting this in a wide-set (high letter-spacing) and uppercase format, we create a clear functional distinction from the narrative content. This font handles the "structural" work of the UI.

## Layout & Spacing

This design system employs a **Strict Bauhaus Grid**. Layouts are defined by visible 1px black rules that separate sections, headers, and sidebars.

- **The Grid:** A 12-column grid on desktop, transitioning to a 4-column grid on mobile.
- **The Rules:** Content is boxed. Every major container should be bounded by a black `#000000` rule. Gutters are not empty space; they are defined by these lines.
- **Rhythm:** Use a 4px baseline shift for vertical rhythm. Elements should "sit" on the rules, never float aimlessly.
- **Responsive Behavior:** On mobile, horizontal rules become the primary separator, while vertical rules are reserved for specific functional "drawers" or menus.

## Elevation & Depth

This system is strictly flat. To convey hierarchy, we use **Structural Stacking and Bold Borders** rather than shadows or blurs.

- **No Shadows:** Shadows are prohibited. Depth is achieved through the thickness of the 1px black rules and the use of Riso Blue color fills.
- **Tonal Layers:** High-priority areas use an "Inset" look, created by thicker rules (2px) or a Riso Blue background with white text.
- **Rubber Hose Kineticism:** While the UI is flat, the cartoon accents can "break" the grid. A white-gloved hand may overlap a rule or peek out from behind a container, providing the only sense of Z-index depth in the system.

## Shapes

The architectural elements of this design system are strictly **Sharp (0px)**. All buttons, input fields, and containers must have 90-degree corners to maintain the Bauhaus aesthetic.

**Exceptions:**

- The "Rubber Hose" illustrations and icons are the only elements allowed to use curves. These should be extremely round and "squishy" to contrast against the razor-sharp UI.
- Selection indicators (like radio buttons) may be perfect circles to align with geometric Bauhaus shapes.

## Components

- **Buttons:** Rectangular, 0px radius. Primary buttons are solid Riso Blue with White text. Secondary buttons are Off-White with a 1px Black border. On hover, buttons should "pop" with a 2px offset black border to simulate a tactile click without using shadows.
- **Inputs:** Simple black bottom-rule or full box rule. Use the Label-MD typography (Hanken Grotesk) for placeholders.
- **Cards:** Defined by 1px black rules. No elevation. The header of the card is separated from the body by a horizontal rule.
- **Rubber Hose Accents:** Used sparingly. A "walking" boot icon for "Next" buttons, or a gloved hand for "Point of Interest" tooltips.
- **Rules & Dividers:** 1px Black is the default. 2px Black is used for primary section breaks.
- **Navigation:** Wide-set uppercase sans-serif. Active states are indicated by a solid Riso Blue block behind the text or a thick underline.
