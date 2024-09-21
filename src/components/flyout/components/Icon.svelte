<script>
    export let size = "300px";
    export let flip = false;
</script>

<div class="outer" style="--size: {size}">
    <div class="inner">
        <img class="shadow {flip? "rotate": ""}"
            src="assets/imgs/icon.png"
            alt="Sombra da imagem anterior">

        <img class="img {flip? "rotate": ""}"
            src="assets/imgs/icon.png"
            alt="Icone com imagem do Dev">
    </div>
</div>

<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;
    @use "$style/_gradients.scss" as gradients;

    .outer {
        background: gradients.$main;
        padding: 10px;
        margin: auto;

        &, .inner {
            width: var(--size);
            height: var(--size);
            border-radius: 50%;
            overflow: hidden;
        }

        .inner {
            background: radial-gradient(circle at 44% 57% , transparent 53%, palette.$iconbg 53.3%);
            background-size: 100% 100%;
            
            display: flex;
            align-items: flex-end;
            position: relative;

            .img, .shadow {
                width: 88%;
                position: absolute;
                left: -23px;
            }

            .shadow {
                left: -43px;
                bottom: -4px;
                filter: brightness(0);
                opacity: .2;
            }

            .img.rotate, .shadow.rotate {
                transform: rotateY(180deg);
            }
            .img.rotate {
                left: 50px;
            }
            .shadow.rotate {
                left: 33px;
                bottom: -8px;
            }
        }
    }
</style>