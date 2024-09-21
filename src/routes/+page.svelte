<script>
    import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
    import ChooseLanguageSwitch from '$components/ChoseLanguageSwitch.svelte';
    
    import Content from "$components/content/Content.svelte";


    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;
    });


    let content = [
        {
            title: "HTML BÁSICO",
            content: [
                {
                    title: "O que é?",
                    content: "HTML, ou Hypertext Markup Language, é a linguagem padrão usada para criar e estruturar páginas da web. Ele utiliza tags para definir elementos, como textos, imagens e links, permitindo que os navegadores interpretem e exibam o conteúdo."
                },                
				{
					title: "Entendendo a sintaxe básica",
					content: `<p>A sintaxe básica do HTML utiliza tags para estruturar o conteúdo.</p>
  <p>As tags são abertas com &lt;p&gt; e fechadas com &lt;/p&gt;.</p>
  <p>Você pode inserir texto entre as tags, como em &lt;h1&gt;Seu título&lt;/h1&gt;.</p>
  <p>Além disso, é possível aninhar tags, colocando uma dentro da outra, por exemplo: &lt;div&gt;&lt;span&gt;Texto&lt;/span&gt;&lt;/div&gt;.</p>`,
				},
                {
                    title: "Atributos",
                    content: `Os atributos fornecem informações adicionais sobre um elemento HTML. Eles são sempre incluídos na tag de abertura, no formato &lt;tag atributo="valor"&gt;. Por exemplo, o atributo &lt;img src="url" /&gt; define a URL da imagem a ser exibida.
`
                },
				{
					title: "Algumas tags",
					content: `
                    <style>
                    .numlis {
                        margin-left: 20px;
                    }
                    .numlis li {
                        margin-bottom: 10px;
                    }
                    </style>
                    <ol class="numlis">
                        <li>&lt;h1&gt; a &lt;h6&gt;: Tags de cabeçalho, onde &lt;h1&gt; é o mais importante e &lt;h6&gt; o menos. Usadas para definir a hierarquia de títulos.</li>
                        <li>&lt;p&gt;: Define um parágrafo de texto.</li>
                        <li>&lt;a&gt;: Cria um link para outra página ou recurso, usando o atributo "href".</li>
                        <li>&lt;img&gt;: Insere uma imagem, com o atributo "src" para especificar a URL da imagem.</li>
                        <li>&lt;div&gt;: Uma tag de contêiner que agrupa outros elementos, útil para estilização e layout.</li>
                        <li>&lt;ul&gt; e &lt;li&gt;: Usadas para criar listas não ordenadas, onde &lt;li&gt; representa um item da lista.</li>
                        <br>

                        <li>&lt;style&gt;: Define regras de estilo CSS para a página, permitindo a customização da aparência de elementos HTML.</li>
                        <li>&lt;script&gt;: Utilizada para incluir scripts em JavaScript, adicionar interatividade e funcionalidades dinâmicas à página.</li>


                        <br>
                        <li>&lt;body&gt;: Abriga todo o conteúdo visível da página, como texto, imagens e links.</li>
                        <li>&lt;title&gt;: Define o título da página, que aparece na aba do navegador.</li>
                        <li>&lt;html&gt;: A tag raiz que define o início de um documento HTML.</li>
                        <li>&lt;head&gt;: Contém metadados sobre o documento, como título e links para CSS.</li>
</ol>
`,
				},
            ]

        }
    ];
</script>


<div class="outer">
    <div class="inner">
        <div class="darkmode centralize">
            <DarkModeSwitch />
        </div>


        {#each content as item}
        
                    <Content
                        icon="Diferentials"
                        title={item.title}
                        content={item.content}/>
            
        {/each}

    </div>
</div>

<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults" as defaults;
    @use "$style/_palette.scss" as palette;
    @use "$style/_cursors.scss" as cursors;

    @media only screen and (min-width: defaults.$mediaMinWidth) {
        .outer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .inner > * {
        margin-block: 20px;
    }

    .centralize {
        display: flex;
        flex-direction: column;
        align-items: center;
    } 
    .chooselang {
        margin-top: -10px;
    }
    .summarize {
        margin-top: -5px;
        margin-bottom: -10px;
    }

    .splitter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 30px;

        .hidden {
            display: none;

            @media (max-width: defaults.$mediaMaxWidth) {
                display: block;
            }
        }

        .name {
            font-family: sansation;
            font-weight: bold;
            text-transform: uppercase;
            color: palette.$highlight;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            text-align: center;
            user-select: none;

            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        @media (max-width: defaults.$mediaMaxWidth) {
            flex-direction: column;
        }
    }
</style>