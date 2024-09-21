<script>
    import SingleContent from "./SingleContent.svelte";
    import Content from "./content/Content.svelte";
    
    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;        
    });
</script>


<SingleContent>
    <Content
        title={texts.projects.title}
        icon="Projects"
        content={texts.projects.subjects}/>
    <Content
        title={texts.projectsPlus.title}
        plus
        icon="Projects"
        content={texts.projectsPlus.subjects}/>
</SingleContent>