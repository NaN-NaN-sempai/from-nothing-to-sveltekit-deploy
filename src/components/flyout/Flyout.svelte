<script>
    import Panel from "$components/flyout/components/Panel.svelte";
    import Icon from "$components/flyout/components/Icon.svelte";
    import Title from "$components/flyout/components/Title.svelte";
    import CompoundItem from "$components/flyout/components/CompoundItem.svelte";

    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;        
    });
</script>

<Panel>
    <Icon size={"200px"} />

    <div class="name">
        <Title  name={true}>Luís Henrique de Almeida</Title>
    </div>

    <Title>{texts.contacts}:</Title>
    
    <div class="itemList">
        <a class="link item" href="mailto:luis.h.wrk@gmail.com" target="_blank">
            <CompoundItem icon="Email">
                luis.h.wrk@gmail.com
            </CompoundItem>
        </a>
        
        <a class="link item" href="tel:+5574981395580">
            <CompoundItem icon="Phone">
                +55 (71) 98883-4482
            </CompoundItem>
        </a>

        <a class="link item" href="https://wa.me/+5574981395580" target="_blank">
            <CompoundItem icon="Whatsapp">
                +55 (74) 98139-5580
            </CompoundItem>
        </a>
    
        <a class="link item" href="https://luishenrique.site/pt" target="_blank">
            <CompoundItem icon="Website">
                luishenrique.site
            </CompoundItem>
        </a>

        <a class="link item" href="https://github.com/NaN-NaN-sempai" target="_blank">
            <CompoundItem icon="Github">
                NaN-NaN-sempai
            </CompoundItem>
        </a>

        <div class="item">
            <CompoundItem icon="Location">
                <div class="lineHeight">
                    Sr. do Bonfim,
                    <br>
                    BA, Brasil
                </div>
            </CompoundItem>
        </div>
    </div>
</Panel>


<style lang="scss">
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;

    .itemList {
        margin-bottom: 70px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
    }

    .lineHeight {
        line-height: 15px;
        text-align: left;
        
        font-family: moupali;

        user-select: text;
    }

    .link, .link:visited {
        color: palette.$highlight;
    }

    .name {
        display: none;
    }

    
    @media only screen and (max-width: defaults.$mediaMaxWidth) {  
        .name {
            display: block;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
        }      
        .itemList {
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-bottom: 0;

            .item {
                width: 200px;
            }
        }
    }
</style>
