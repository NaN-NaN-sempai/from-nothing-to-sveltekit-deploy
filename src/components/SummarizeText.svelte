<script>
    import Max from "./icons/text/Max.svelte";
    import Min from "./icons/text/Min.svelte";

    import summarize from "$lib/summarize";

    let doAnimaiton = false;
    const playAnimation = () => {
        let selector = document.querySelector('.selector');
        doAnimaiton = true;
        
        const animEnd = () => {
            doAnimaiton = false;    
            selector.removeEventListener("animationend", animEnd);
        }
        selector.addEventListener("animationend", animEnd);
    }

    const setupLocalStorage = () => {
        if(localStorage.getItem("summerize") == null)
            localStorage.setItem("summerize", false);

            summarizing = JSON.parse(localStorage.getItem("summerize"));
    }
    const saveCheck = (element) => {
        playAnimation();

        let {checked} = element.target;
        setSumarizing(checked);
        
        dispatch();  
    }
    const setSumarizing = (bool) => {
        summarizing = bool;
        localStorage.setItem("summerize", bool);
    }

    
    const dispatch = () => {
        //console.log("Esta: ", summarizing);
        
        summarize.set(summarizing);
    }


    export let iconSize = 30;

    
    import { onMount } from "svelte";
    let summarizing;
    onMount(() => {
        setupLocalStorage();
        
        dispatch();  
    });
</script>

<div class="switch">
        <input type="checkbox" class="summerizeInput" id="sumarize" checked={summarizing} on:input={saveCheck}>
        <label class="switch__label" for="sumarize">
            <div class="iconHolder">
                <div class="selector {doAnimaiton? "animate": ""}" />
                <div class="max">
                    <Max size={iconSize} />
                </div>
                <div class="min">
                    <Min size={iconSize} />
                </div>
            </div>
        </label>
</div>

<style lang="scss">
    /*
    Thanks to Murray Nuttall on CodePen
    https://codepen.io/irunatbullets/pen/MWwyVOw
    */

    @use "$style/palette";
    @use "$style/_cursors.scss" as curosrs;

    .switch {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        position: relative;
        filter: drop-shadow(-10px 15px 5px rgba(0, 0, 0, 0.25));
    }

    .summerizeInput {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    .switch__label {
        position: relative;
        display: inline-block;
        --inputSize: 120px;
        width: var(--inputSize);
        height: calc(var(--inputSize) / 2);
        background: palette.$secondary;
        border: 5px solid palette.$highlight;
        border-radius: 9999px;
        cursor: pointer;
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);

        .iconHolder {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;

            .max {
                color: palette.$highlight;
            }
            .min {
                color: palette.$greyed;
            }

            .selector {
                position: absolute;
                border: 5px solid palette.$highlight;
                --size: 75%;
                height: var(--size);
                width: calc(var(--size) / 2);
                top: 50%;
                left: 25%;
                border-radius: 9999px;
                transform: translate(-50%, -50%);
                --transitionTime: .15s;
                transition: var(--transitionTime) ease-out;

                &.animate {
                    animation: blur var(--transitionTime) linear;
                }
    
                @keyframes blur {
                    0% {
                        width: calc(var(--size) / 2);
                        filter: blur(0);
                    }   
                    50% {
                        width: calc(var(--size) / 1.5);
                        filter: blur(2px);
                    }
                    to {
                        width: calc(var(--size) / 2);
                        filter: blur(0);
                    }
                }
            }
        }
    }


    .summerizeInput:checked + .switch__label {
        .max {
            color: palette.$greyed;
        }
        .min {
            color: palette.$highlight;
        }

        .selector {
            left: 75%;
        }
    }

    * {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    *:focus {
        outline: none !important;
    }
</style>