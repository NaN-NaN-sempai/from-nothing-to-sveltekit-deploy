<script>
    import ItemIcon from "./ItemIcon.svelte";
    
    export let icon = "email";

    export let plus = false;
    
    let copied = false;
    let copiedOutput = "";

    let span;
    const copyText = () => {
        const setupCopy = (output) => {
            copied = true;
            copiedOutput = output;

            setTimeout(() => {
                copied = false;
                copiedOutput = "";
            }, 1000);
        }

        const copyToClipboard = (text) => {
            if (!navigator.clipboard){
                var dummy = document.createElement("textarea");
                document.body.appendChild(dummy);
                dummy.value = text;
                dummy.select();
                document.execCommand("copy");
                document.body.removeChild(dummy);
                
            } else{
                navigator.clipboard.writeText(text)
                .then(() => {
                    setupCopy("Copiado!");
                })
                .catch((err) => {
                    setupCopy("Erro...");
                    console.log(err);
                });
            } 
        }

        copyToClipboard(span.textContent);
    }
</script>

<div class="wrapper" title={icon} on:click={copyText} aria-hidden>
    <ItemIcon {icon} {plus} />
    <span bind:this={span}>
        {#if copied}
            <div class="output">
                {copiedOutput}
            </div>
            <div class="hidden">
                <slot></slot>
            </div>
        {:else}
            <slot></slot>
        {/if}
    </span>
</div>


<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_palette.scss" as palette;

    .wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        margin-bottom: 5px;

        cursor: pointer;

        &:active {
            cursor: progress;
        }
        
        @mixin font {
            font-family: moupali;
            font-size: 17px;
            text-transform: uppercase;
        }

        span {
            @include font;
            color: palette.$highlight;
            margin-left: 10px;
            user-select: text;

            div {
                @include font;
            }

            .output {
                position: absolute;
            }
            .hidden {
                opacity: 0;
            }

        }
    }
</style>