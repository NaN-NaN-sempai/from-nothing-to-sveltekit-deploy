<script>
    import { onMount } from "svelte";

    export let speed = "150s";
    export let direction = "forwards";

    let scroller;
    let scrollerInner;

    onMount(() => {
        const addAnimation = () => {
            for(let _ in [1,2]){
                [...scrollerInner.children].forEach(elem => {
                    let duplicatedItem = elem.cloneNode(true);
                        duplicatedItem.setAttribute("aria-hidden", true);

                    scrollerInner.appendChild(duplicatedItem);

                    scroller.setAttribute("data-animated", true);
                });
            }
        }

        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            addAnimation();
        }
    });
</script>

<div class="wrapper" style="--speed: {speed}; --direction: {direction}">
    <div class="scroller" bind:this={scroller}>
        <div class="innerScroller" bind:this={scrollerInner}>
            <slot></slot>
        </div>
    </div>
</div>


<style lang="scss">
    @use "$style/_palette" as palette;

    $gap: 10px;
    
    .wrapper {
        user-select: none;
        display: flex;
        justify-content: center;
        width: 100%;

        .scroller .innerScroller {
            padding: 20px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: row;
            gap: $gap;
        }
    }

    /* do scroll */
    :global(.scroller[data-animated=true]) {
        padding-block: 15px;
        max-width: 90vw;

        overflow: hidden;

        $fadeIn: 5%;
        $fadeOut: calc(100% - $fadeIn);

        $gradient: linear-gradient(
            to right, 
            transparent, 
            white $fadeIn, 
            white $fadeOut, 
            transparent
        );

        -webkit-mask: $gradient;
        mask: $gradient;
        
        .innerScroller {
            padding: 0;

            width: fit-content;
            
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: $gap;

            animation: scroll var(--speed) linear infinite var(--direction, forwards);
        }
    }
    
    @keyframes scroll {
        to {
            transform: translate(calc(-50% - ($gap/2)));
        }
    }   
</style>