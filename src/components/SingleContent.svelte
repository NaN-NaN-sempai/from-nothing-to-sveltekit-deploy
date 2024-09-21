<div class="wrapper">
    <div class="container">
        <slot></slot>
    </div>
</div>


<style lang="scss">
    @use "$style/defaults" as defaults;
    @use "$style/_palette" as palette;

    .wrapper {
        width: 100%;
        max-width: 1940px;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: center;

        .container {
            max-width: 1600px;
            margin-right: 20px;

            @media only screen and (max-width: defaults.$mediaMaxWidth) {
                margin-right: 0;
            }
        }
    }
</style>