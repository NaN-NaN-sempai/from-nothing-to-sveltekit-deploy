<script>
    import Content from "./content/Content.svelte";
    import SplitScreen from "./SplitScreen.svelte";

    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;        
    });
</script>

<SplitScreen>
    <div slot="left">
        <Content
            title={texts.works.title}
            icon="Works"
            content={texts.works.subjects}/>
    </div>
    <div slot="right">
        <Content
            title={texts.worksPlus.title}
            icon="Works"
            content={texts.worksPlus.subjects}
            plus/>
    </div>
</SplitScreen>