<div class="wrapper">
    <div class="bar" />
    <div class="split first">
        <slot name="left"></slot>
    </div>

    <div class="split second">
        <slot name="right"></slot>
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
        
        position: relative;

        .split {
            padding-block: 20px;
            padding-bottom: 30px;
            width: 50%;
            max-width: 800px;

            transition: width .2s;

            &:hover {
                width: 70%;
            }

            &.first {
                background: linear-gradient(
                    to right,
                    palette.$secondary 50%,
                    transparent
                );
                border: 6px solid palette.$highlight;
                border-right: none;
                border-bottom: none;
                margin: -6px;
                
                border-radius: 50px 0 0 0;

                $mask: linear-gradient(white 95%, transparent);
                -webkit-mask: $mask;
                mask: $mask;
            }

            &.second {
                padding-right: 20px;
            }
            
        }
    }

    .bar {
        width: 80%;
        height: 6px;
        
        position: absolute;
        right: 45%;
        top: -6px;
        transform: translateX(50%);

        background: palette.$highlight;

        border-radius: 10px;
    }


    
    @media only screen and (max-width: defaults.$mediaMaxWidth) {
        .bar {
            display: none;
        }
        .wrapper {
            flex-direction: column;
            
            .split {          
                padding: 10px;
                padding-left: 0 !important;
                padding-right: 0 !important;
                border-bottom: 6px solid palette.$highlight;
                
                &, &:hover {
                    width: 100%;
                }

                &.first {
                    background: linear-gradient(to bottom, palette.$secondary 90%, transparent);
                    padding-top: 10px;

                    margin: 0;

                    border: none;
                    border-top: 6px solid palette.$highlight;
                    border-radius: 0;
                }
            }
        }
    }
</style>