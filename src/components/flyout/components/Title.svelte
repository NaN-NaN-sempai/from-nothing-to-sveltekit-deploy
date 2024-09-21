<script>
    export let name = false;
    
    import translations from "$trad"; 
    let doAnimaiton;
    translations.subscribe(value => {
        doAnimaiton = true;    
    });

    import { onMount } from "svelte";
    let animTarget = [];
    onMount(() => {
        doAnimaiton = false;
        animTarget.forEach(el => el.addEventListener("animationend", () => doAnimaiton = false));
    });
</script>

<span class={(name? "name": "") + (doAnimaiton&&!name? " textAnimation": "")} bind:this={animTarget[animTarget.length]}><slot></slot></span>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_palette.scss" as palette;
    @use "$style/_defaults";

    .textAnimation {
        animation: translationPulseContacts .2s ease;
    }

    span {
        font-size: 40px;
        color: palette.$highlight;
        text-transform: uppercase;
        font-family: moupali;

        &.name {
            font-family: sansation;
            text-align: center;
            font-weight: bold;
        }
    }
</style>