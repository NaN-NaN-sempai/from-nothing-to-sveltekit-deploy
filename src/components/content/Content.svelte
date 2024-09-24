<script>
    import ItemIcon from "$components/flyout/components/ItemIcon.svelte";
	import { onMount } from "svelte";
    import Dot from "./components/Dot.svelte";

    export let title = "title";
    export let icon = "Declaration";
    export let plus = false;
    export let content = [
        {
            list: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum id metus ac fermentum. Nullam non tellus turpis. Proin a lacus rutrum, molestie quam id, imperdiet nunc. Praesent ullamcorper turpis non finibus convallis."
        }
    ];


    let animTargetLists = [];
    let doAnimaiton;
    let animTarget = [];


    let lsname = "listopen:"+title;
    let lssectionname = "sectionopen:"+title;
    let openList = [];
    let openSection = false;
    onMount(()=>{
        const areEquals = (x, y) => {
            const ok = Object.keys, tx = typeof x, ty = typeof y;
            return x && y && tx === 'object' && tx === ty ? (
                ok(x).length === ok(y).length &&
                ok(x).every(key => areEquals(x[key], y[key]))
            ) : (x === y);
        }

        let loaded = localStorage.getItem(lsname);
    
        openList = content.map(e => {
            e.open = false;
            return e;
        });

        if (!loaded) {
            console.log("setup ls");
            localStorage.setItem(lsname, JSON.stringify(openList));

        } else {
            console.log("ls exists");
            let loadedObj = JSON.parse(loaded).map(e=>{
                return {
                    title: e.title
                }
            });
            let toCheck = content.map(e=>{
                return {
                    title: e.title
                }
            });


            if(!areEquals(loadedObj, toCheck)) {
                console.log("are not equal");
                localStorage.setItem(lsname, JSON.stringify(openList));
            }
            
            openList = JSON.parse(localStorage.getItem(lsname));
            
        }
        


        let sectionLoaded = localStorage.getItem(lssectionname);
    
        if (!sectionLoaded) {
            openSection = false;
            localStorage.setItem(lssectionname, openSection);

        } else openSection = JSON.parse(localStorage.getItem(lssectionname));
    });


    const setOpen = (name) => {
        let find = openList.find(e=>e.title==name);

        find.open = !find.open;

        openList = openList;

        localStorage.setItem(lsname, JSON.stringify(openList));
    }

    const minimize = (event) => {
        const parent = event.currentTarget; 

        const title = parent.querySelector(".contentTitle").innerHTML;
        const content = parent.querySelector(".contentBody");

        setOpen(title);

        console.table(openList);
    }

    const minimizeSection = (event) => {
        const title = event.currentTarget.title;

        openSection = !openSection;
        
        localStorage.setItem(lssectionname, openSection);
    }
</script>


<div class="main {openSection? "": "hide"}">
    <div class="sliderWrapper">
        <div class="slider" />
    </div>

    <button class="split head" on:click={minimizeSection} >
        <div class="icon">
            <ItemIcon icon={icon} plus={plus} />
        </div>

        <div class="content {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
            <h4 class="title">{title}</h4>
        </div>
    </button>

    {#each content as item}
        <div class="split body">
            <div class="icon">
                <Dot />
            </div>

            <button class="content{item.list? " list":""}" on:click={minimize}>
                {#if item.title || item.type || item.time }
                    <div class="contentHeader {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
                        <div class="titleContainer">
                            {#if item.exam} <ItemIcon icon="Projects" /> {/if}
                            {#if item.title} <span class="contentTitle"> {item.title} </span> {/if}
                        </div>

                        {#if item.type}  <span class="contentType">  {item.type}  </span> {/if}
                        {#if item.time}  <span class="contentTime">  {item.time}  </span> {/if}
                    </div>
                {/if}

                <div class="contentBody {openList.find(e=>e.title==item.title)?.open? "": "hide"}">
                    {#if item.list}
                        {#each item.content as listItem, index}
                            <span class="listItem" data-listanim="false" bind:this={animTargetLists[index]} style="--animDelay: {index+1};">
                                {listItem}
                            </span>
                        {/each}
        
                    {:else}
                        <div class="contentText {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
                            {@html item.content}
                        </div>
                    {/if}

                </div>
            </button>
        </div>
    {/each}

</div>


<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults";
    @use "$style/_gradients" as gradients;
    @use "$style/_palette.scss" as palette;

    :root {
        --sliderWidth: 70px;
    }
    :global([data-listanim="true"]) {
        --animDelay: 1;
        animation: translationPulse calc(.2s * var(--animDelay)/5) calc(var(--animDelay)/30) ease;
    }
    .textAnimation {
        animation: translationPulse .2s ease;
    } 

    .content, .title {
        font-family: sansation;
        color: palette.$highlight;
        text-align: left;
        
    }

    :global(.contentText a) {
        color: palette.$highlight;
    }

    .title {
        font-size: 26px;
        text-transform: uppercase;
    }

    

    .split {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;

        &.head {        
            flex-wrap: nowrap;
            align-items: flex-start;
            background: none;
            border: none;
            cursor: pointer;

            .icon {
                margin-top: 2px;
            }
        }

        &.body {
            margin-top: 10px;
            margin-bottom: 20px;

            .content {
                cursor: pointer;
                font-weight: normal;
                font-size: 18px;
                text-align: justify;
                width: 100%;
                background: none;
                border: none;

                .titleContainer {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: nowrap;
                    gap: 10px;
                }

                .contentBody {

                    background: palette.$secondary;
                    user-select: none;
                    
                    padding: 7px;
                    padding-right: 10px;
                    border-radius: 7px;
                    margin-right: 20px;
                    box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.4);

                    &.hide * {
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        color: palette.$primary;
                        line-clamp: 1;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                    }
                }

                .contentHeader {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    @mixin font {
                        font-family: sansation;
                        font-size: 20px;
                    }

                    .contentTitle {
                        @include font;
                        font-weight: bold;
                    }

                    .contentType {
                        @include font;
                        font-size: 17px;
                        text-transform: uppercase;
                        font-family: sansationLight;
                    }

                    .contentTime {
                        @include font;
                    }
                }

                &.list {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;

                    .listItem {
                        background: palette.$secondary;
                        margin: 5px;
                        font-size: 20px;
                        user-select: none;
                        
                        padding: 2px 5px;
                        border-radius: 7px;
                        box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.4);

                        z-index: 1;

                        --time: .2s;
                        transition:
                            box-shadow var(--time),
                            background var(--time);

                        cursor: url("$lib/assets/cursor/star.png") 23 23, wait;

                        &:hover {
                            color: palette.$primary;
                            background: gradients.$main;
                            box-shadow: 0px 0px 5px 2px palette.$highlight;
                        }
                    }
                }
            }
        }

        .icon {
            min-width: var(--sliderWidth);
            
            display: flex;
            flex-direction: column;
            align-items: center;

            position: relative;
        }

        .content {
            align-items: flex-start;
        }
    }

    .main {
        position: relative;
        margin-bottom: 20px;

            &.hide {
                height: 31px;
                overflow: hidden;
            }
    }
    .sliderWrapper {
        width: var(--sliderWidth);
        
        display: flex;
        flex-direction: column;
        align-items: center;

        position: absolute;
        height: 100%;

        .slider {
            width: 8px;
            height: calc(100% - 30px);
            margin-top: 15px;

            background: palette.$highlight;

            position: sticky;
            top: -18%;

            border-radius: 20px;
        }
    }

    
    @media only screen and (max-width: defaults.$mediaMaxWidth) {
        :root {
            --sliderWidth: 54px;
        }

        .split.body {
            margin-right: 20px;
            .content {
                text-align: left;

                &.list .listItem {
                    text-align: center;
                }
            }
        }
    }
    @media only screen and (max-width: defaults.$fontResize) {
        .title {
            font-size: 8vw;
        }

        .content {
            font-size: 7vw;
        }

        .contentHeader {
            .contentTitle {
                font-size: 6vw;
            }

            .contentType {
                font-size: 5vw;
            }

            .contentTime {
                font-size: 5vw;
            }
        }
    }
</style>