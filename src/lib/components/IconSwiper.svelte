<script lang="ts">
    import { onMount } from "svelte";
    
    export let images: string[] = [];
</script>

<div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            {#each images as image}
                <div class="swiper-slide">
                    <img src={image} alt={image} />
                </div>
            {/each}
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</div>

<style>
    .swiper-container {
        @apply mx-auto;
        width: 128px;
        height: 128px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
</style>