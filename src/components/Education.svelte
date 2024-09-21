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
            title={texts.education.title}
            icon="Education"
            content={texts.education.subjects}/>
    </div>
    <div slot="right">
        <Content
            title={texts.educationPlus.title}
            icon="Education"
            content={texts.educationPlus.subjects}
            plus/>
    </div>
</SplitScreen>