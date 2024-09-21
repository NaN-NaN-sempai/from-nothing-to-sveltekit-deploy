<div>
    <p>
        <slot></slot>
    </p>
</div>


<style lang="scss">
    @use "$style/_fonts";
    @use "$style/_defaults" as defaults;
    @use "$style/_gradients" as gradients;
    @use "$style/_palette" as palette;

    @mixin borderRadius {
        border-radius: 50px;
    }

    div {
        @include borderRadius;

        background: gradients.$main;
        padding: 5px;
        box-shadow: -7px 8px 5px 1px rgba(0, 0, 0, 0.25);

        p {
            @include borderRadius;
            
            color: palette.$highlight;
            background-color: palette.$secondary;
            
            font-family: sansation;
            font-size: 20px;
            user-select: none;

            --amountH: 15px;
            --amountV: 4px;
            padding: var(--amountV) var(--amountH);
        }
    }

    @media only screen and (max-width: defaults.$mediaMaxWidth) { 
        @mixin borderRadius {
            border-radius: 0;
        }
        div {
            @include borderRadius;
            width: 100%;
            padding-left: 0;
            padding-right: 0;
            box-shadow: 0 8px 5px 1px rgba(0, 0, 0, 0.25);

            p {
                @include borderRadius;
                text-align: center;
                --amountV: 2px;

            }
        }
    }
</style>