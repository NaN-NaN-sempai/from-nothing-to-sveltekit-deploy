<script>
    import DarkModeSwitch from '$components/DarkModeSwitch.svelte';
    import ChooseLanguageSwitch from '$components/ChoseLanguageSwitch.svelte';
    
    import Content from "$components/content/Content.svelte";
    import Title from '$components/flyout/components/Title.svelte';

    import translations from "$trad"; 
    let texts; 
    translations.subscribe(value => {
        texts = value;
    });


    let content = [
        {
            title: "Sumário",
            icon: "Projects",
            content: [
                {
                    title: "Declarativo",
                    content: `<p>Olá! Sou Luís, da Bahia, Brasil, e tenho 23 anos. Sou apaixonado por programação e aprender coisas novas.</p>
                    <br>
                    <p>No "Do Nada ao Deploy SvelteKit", nosso objetivo é ir do zero em conhecimento na área até o domínio da programação WEB fullstack!</p>
                    <br>
<p>Esse curso é uma excelente oportunidade para todos, desde iniciantes que desejam entender os fundamentos da programação até aqueles que já têm alguma experiência e querem expandir suas habilidades.
    <br>
    <br>
    Você aprenderá a criar aplicações modernas e dinâmicas, desenvolvendo uma base sólida que pode abrir portas para projetos futuros e oportunidades na área.
    <br>
    <br>
    Estou super empolgado para compartilhar essa jornada incrível com você!</p>
`
                },
                {
                    title: "Introdução à conceitos WEB",
                    content: "Iniciaremos do zero, aprendendo os fundamentos WEB de HTML, CSS e JavaScript criando nossos primiros projetos no bloco de notas."
                },
                {
                    title: "Introdução ao Node JS",
                    content: "Vamos nos aprofundar nas possibilidades do Javascript criando um pequeno projeto de servidor com o express no Virtual Studio Code, onde iremos aprender um pouco do Node Packet Manager (NPM) e de estrutura e organização de projetos."
                },
                {
                    title: "Avançando com Svelte",
                    content: "Vamos explorar o Svelte, aprendendo a construir com a lógica de componentes e a utilizar suas funcionalidades."
                },
                {
                    title: "Estilização com SASS",
                    content: "Iremos aprender o SASS para estilizar nossa aplicação de forma eficiente."
                },
                {
                    title: "Integração com MongoDB",
                    content: "Aprenderemos a lógica e funcionamento dos Bancos de Dados (DB) e vamos criar e conectar nossa aplicação a um banco de dados MongoDB para armazenamento de dados."
                },
                {
                    title: "Deploy no Vercel",
                    content: "Finalizaremos com o processo de deploy no Vercel, tornando nossa aplicação acessível online."
                }
            ]
        },
        {
            title: "HTML BÁSICO",
            icon: "Diferentials",
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
                        margin-left: 30px;
                    }
                    .numlis li {
                        margin-bottom: 10px;
                    }
                    .numlis ul {
                        margin-left: 30px;                        
                    }
                    </style>
                    <ol class="numlis">
                        <li>&lt;p&gt;: Define um parágrafo de texto.</li>
                        <li>&lt;h1&gt; a &lt;h6&gt;: Tags de cabeçalho, onde &lt;h1&gt; é o mais importante e &lt;h6&gt; o menos. Usadas para definir a hierarquia de títulos.</li>
                        <li>&lt;a&gt;: Cria um link para outra página ou recurso, usando o atributo "href".</li>
                        <li>&lt;img&gt;: Insere uma imagem, com o atributo "src" para especificar a URL da imagem.</li>
                        <li>&lt;ul&gt; e &lt;li&gt;: Usadas para criar listas não ordenadas, onde &lt;li&gt; representa um item da lista.</li>
                        <li>&lt;div&gt;: Uma tag de contêiner que agrupa outros elementos, útil para estilização e layout.</li>
                        <br>

                        <li>&lt;button&gt;: Usada para criar um botão que o usuário pode clicar para executar uma ação.</li>
                        <li>&lt;input&gt;: Usada para criar campos de entrada, permitindo que o usuário insira dados. Atributo "type" define o tipo de entrada do input. Alguns tipos comuns incluem:</li>
                        
                        <ul>
                            <li><strong>text</strong>: Um campo para entrada de texto simples.</li>
                            <li><strong>password</strong>: Um campo que oculta a entrada do usuário.</li>
                            <li><strong>email</strong>: Um campo para entrada de endereços de e-mail.</li>
                            <li><strong>number</strong>: Permite a entrada de números, com opções de incremento.</li>
                            <li><strong>checkbox</strong>: Um botão que pode ser marcado ou desmarcado.</li>
                            <li><strong>radio</strong>: Permite que o usuário escolha uma opção entre várias.</li>
                            <li><strong>submit</strong>: Um botão que envia o formulário.</li>
                        </ul>

                        <br>

                        <li>&lt;style&gt;: Define regras de estilo CSS para a página, permitindo a customização da aparência de elementos HTML.</li>
                        <li>&lt;script&gt;: Utilizada para incluir scripts em JavaScript, adicionar interatividade e funcionalidades dinâmicas à página.</li>

                        <br>
                        <li>&lt;html&gt;: A tag raiz que define o início de um documento HTML.</li>
                        <li>&lt;head&gt;: Contém metadados sobre o documento, como título e links para CSS.</li>
                        <li>&lt;title&gt;: Define o título da página, que aparece na aba do navegador.</li>
                        <li>&lt;body&gt;: Abriga todo o conteúdo visível da página, como texto, imagens e links.</li>
</ol>
`,
				},
                {
                    title: "Alguns atributos",
                    content: `
                    
                    <style>
                    .numlis {
                        margin-left: 30px;
                    }
                    .numlis li {
                        margin-bottom: 10px;
                    }
                    </style>
                    <ul class="numlis">
                        <li><strong>href</strong>: Especifica a URL de um link em uma tag &lt;a&gt;.</li>
                        <li><strong>src</strong>: Define a fonte de uma imagem em uma tag &lt;img&gt;.</li>
                        <li><strong>alt</strong>: Fornece uma descrição alternativa para uma imagem em uma tag &lt;img&gt;.</li>
                        <li><strong>class</strong>: Define uma ou mais classes para estilização em qualquer tag.</li>
                        <li><strong>id</strong>: Atribui um identificador único a um elemento.</li>
                        <li><strong>style</strong>: Aplica estilos CSS diretamente a um elemento.</li>
                        <li><strong>title</strong>: Fornece informações adicionais sobre um elemento, exibidas como um tooltip.</li>
                    </ul>
`
                },
                {
                    title: "Primeiro Hello World",
                    exam: true,
                    content: `<p>Para criar seu primeiro "Hello World" em HTML, você precisa de uma estrutura básica de documento. Comece com a tag &lt;html&gt; para definir o início do seu arquivo. Dentro dela, inclua a tag &lt;head&gt; para metadados, onde você pode usar a tag &lt;title&gt; para dar um nome à sua página.</p>
<p>No corpo do documento, use a tag &lt;body&gt; para adicionar conteúdo visível. Para exibir a mensagem "Hello World", você pode usar a tag &lt;h1&gt; ou &lt;p&gt;, assim:</p>
<pre>
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Meu Primeiro Hello World&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>
<p>Salve o arquivo com a extensão .html e abra-o em um navegador para ver sua mensagem.</p>

`
                },
                {
                    title: "Links e Imagens",
                    exam: true,
                    content: `<p>Vamos adicionar links e imagens à sua página HTML. Comece criando um link que redirecione para um site de sua escolha usando a tag &lt;a&gt;. O atributo <strong>href</strong> é essencial, pois define a URL do link. Por exemplo:</p>
<pre>
&lt;a href="https://www.exemplo.com"&gt;Visite meu site favorito!&lt;/a&gt;
</pre>
<br>
<p>Em seguida, insira uma imagem na sua página usando a tag &lt;img&gt;. O atributo <strong>src</strong> deve apontar para o caminho da imagem que você deseja exibir. Não se esqueça de incluir o atributo <strong>alt</strong> para fornecer uma descrição alternativa da imagem. Exemplo:</p>
<pre>
&lt;img src="caminho/para/imagem.jpg" alt="Descrição da imagem"&gt;
</pre>
<br>
<p>Salve seu arquivo e visualize no navegador para ver como o link e a imagem aparecem na página!</p>
<br>
<p>Agora tente adicionar na sua página uma imagem que funciona como link.

`
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

        <div class="centralize">
            <Title>Do nada ao deploy sveltekit</Title>
        </div>


        <div class="middle">
            
                {#each content as item}
                
                            <Content
                                icon={item.icon}
                                title={item.title}
                                content={item.content}/>
                    
                {/each}
        </div>
            

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
        .middle {
            max-width: 1300px;
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