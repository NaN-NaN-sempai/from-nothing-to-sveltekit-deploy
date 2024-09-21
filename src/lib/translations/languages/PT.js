function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate()))
        age--;

    return age;
}

const age = calculateAge('2001-05-18');

export default {
	name: "PT",
	level: "🗣️",
	content: {
		curriculum: "Currículo",
		contacts: "Contatos",

		intro: {
			declaration: {
				title: "DECLARAÇÃO PROFISSIONAL",
				subjects: [{
					content: `Sou da Bahia, Brasil, tenho ${age} anos e estou em busca de uma oportunidade profissional que me proporcione uma jornada de aprendizado e desenvolvimento. Sou flexível, criativo, eficiente,  e me adapto facilmente a novos desafios e mudanças. Estou entusiasmado para aplicar minhas habilidades e embarcar nessa jornada em direção ao sucesso profissional!`
				}]
			},
			differential: {
				title: "DIFERENCIAIS",
				subjects: [{
					list: true,
					content: [
						"Apaixonado por desafios",
						"Rápida aprendizagem",
						"Versátil e adaptável",
						"Sincero e ético",
						"Dedicado à organização",
						"Comprometido com excelência e qualidade",
						"Fluente em inglês",
						"Francês Básico",
						"Colaborativo e eficiente em trabalho em equipe",
						"Criativo e inovador em soluções tecnológicas",
						"Exímio em JavaScript",
						"Forte expertise em Design",
						"Experiência em scripts JSX para aplicativos Adobe",
						"Experiência em desenvolvimento WEB e mobile",
						"Experiência na criação de sistemas",
						"Experiência em desenvolvimento com Arduino",
					]
				}]
			},
		},
		education: {
			title: "FORMAÇÃO ACADÊMICA",
			subjects: [
				/* CS50 */ {
					title: "CS50's Web Programming with Python and JavaScript",
					type: "TREINAMENTO ESPECIALIZADO",
					time: "2023",
					content: "Participei do curso disponibilizado por Harvard, onde aprofundei meus conhecimentos em programação web. Adquiri conceitos essenciais para desenvolver aplicativos web modernos e dinâmicos.",
				},
				/* LCI IF */ {
					title: "Ciências da Computação",
					type: "ENSINO SUPERIOR - INCOMPLETO",
					time: "2019/2023",
					content: "Consolidei ainda mais meu conhecimento de programação e tecnologia durante o curso de Licenciatura no IF Baiano - Sr. do Bonfim, Bahia, Brasil, onde coloquei em prática a maioria dos meus projetos.",
				},
				/* SENAI */ {
					title: "Suporte Técnico em TI",
					type: "CURSO PROFISSIONALIZANTE",
					time: "2017/2018",
					content: "Iniciei minha carreira acadêmica com um curso de Suporte Técnico em TI no SENAI Cetind em Lauro de Freitas, Bahia, Brasil, obtendo uma base sólida sobre redes, programação, suporte técnico e outros assuntos, fortalecendo minha paixão pela área.",
				},
			]
		},
		educationPlus: {
			title: "CURSOS COMPLEMENTARES",
			subjects: [
				/* LGPD */ {
					title: "LGPD",
					type: "CURSO PROFISSIONALIZANTE",
					time: "4 horas - 2021",
					content: `Fiz um curso online no SENAI São Paulo, Brasil, sobre "Privacidade e Proteção de Dados", aprendendo sobre segurança de informações e regulamentações de privacidade.`,
				},
				/* LOGICA DE PROGRAMAÇAO */ {
					title: "Competências Transversais em Lógica de Programação",
					type: "CURSO PROFISSIONALIZANTE",
					time: "14 horas - 2017",
					content: "Cursei a distância no SENAI Bahia, Brasil, o curso de Lógica de Programação, adquirindo fundamentos em programação e lógica.",
				},
				/* EMPREENDEDORISMO */ {
					title: "Competências Transversais em Empreendedorismo",
					type: "CURSO PROFISSIONALIZANTE",
					time: "14 horas - 2017",
					content: "Fiz um curso a distância no SENAI Bahia, Brasil, sobre Empreendedorismo, adquirindo habilidades essenciais relacionadas ao empreendedorismo e à gestão de negócios.",
				}
			]
		},
		projects: {
			title: "TRABALHOS E PROJETOS",
			subjects: [
				/* PROJETOS */ {
					title: "Projetos Pessoais",
					type: "HOBBY",
					time: "PERIODICAMENTE",
					content: `Além destes projetos citados aqui, tenho uma ampla variedade de projetos disponíveis no meu perfil do GitHub: <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou no meu site pessoal: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Meus projetos demonstram minha paixão por aprender e minha capacidade de criar soluções inovadoras por meio da programação.`,
				},
				/* PDEF */ {
					title: "PDEF",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `Plotador de Funções (PDEF), projeto requisitado durante a matéria de Aplicações Gráficas no IF Baiano. O PDEF é uma plataforma que permite a criação de gráficos usando JavaScript. Esse projeto se tornou uma ferramenta valiosa para visualizar e compreender conceitos gráficos, além de ser uma realização pessoal como programador. Pode ser acessado em: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
				},
				/* LICA APP */ {
					title: "Aplicativo LiCA App",
					type: "PROJETO ACADÊMICO",
					time: "2021",
					content: `O LiCA App foi meu primeiro aplicativo para Android, desenvolvido com meu colega Joel Junior como parte da disciplina de Aplicações Gráficas no IF Baiano. Este aplicativo foi projetado para exibir a ementa do Curso de Licenciatura em Ciências Agrárias e esteve disponível no Google Play Store até 14/03/2024. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`
				},
				/* OFICINA */ {
					title: "Oficina Sobre Computação",
					type: "ESTÁGIO ACADÊMICO",
					time: "2022",
					content: `Na matéria Estágio I no IF Baiano, eu e meu colega Marcos Santos organizamos uma oficina online (devido à pandemia de COVID-19) de "Introdução à Computação", abordando tópicos como história da computação, hardware, software, redes, programação, desenvolvimento web e oportunidades de emprego. Algumas informações em: <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`
				},
				/* ARTIGO */ {
					title: "Artigo Publicado",
					type: "PROJETO ACADÊMICO",
					time: "2022",
					content: `Participei do Programa Institucional de Bolsas de Iniciação à Docência (PIBID) trabalhando com o professor de física Damon Ferreira Farias, e juntamente com colegas, publiquei um artigo no Conedu sobre segurança da informação nas escolas. PDF disponível em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`
				},
				/* WINDOWS APP FOLDER */ {
					title: "Programa para Computador",
					type: "HOBBY / NECESSIDADE PESSOAL",
					time: "2023",
					content: `O Windows App Folder é um aplicativo para Windows feito com Electron.js que cria pastas personalizadas para organizar aplicativos ou arquivos, inspirado nas pastas de aplicativos da Samsung no Android. Acesse: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>`
				},
				/* USEBASE */ {
					title: "UseBase",
					type: "HOBBY / NECESSIDADE PESSOAL",
					time: "2023",
					content: `O UseBase é uma biblioteca JavaScript versátil projetada para simplificar o processo de codificação e decodificação de números usando várias bases numéricas. Seja para representar inteiros em binário, hexadecimal, conjuntos de caracteres personalizados ou até emojis, o UseBase oferece uma solução flexível. Disponível em <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>`
				},
			]
		},
		projectsPlus: {
			title: "PROJETOS EM DESENVOLVIMENTO",
			subjects: [
				/* MPJS */ {
					title: "MPJS",
					type: "Projeto pessoal",
					time: "2023 / EM DESENVOLVIMENTO",
					content: `Math Plotter Javascript (MPJS) é uma evolução do PDEF, agora com uma interface aprimorada que incorpora o Monaco Editor e uma sintaxe de JavaScript mais avançada para criar gráficos complexos. Disponível em: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`
				}
			]
		},
		works: {
			title: "EXPERIÊNCIA PROFISSIONAL",
			subjects: [
				/* INOVAR */ {
					title: "DESIGNER GRÁFICO",
					type: "INFORMAL",
					time: "2021/2024",
					content: `Trabalhei na Inovar Personalizações como designer, criando designs exclusivos para encadernações e cartonados. Durante esse período, apliquei minhas habilidades de desenvolvedor ao introduzir uma nova metodologia para a criação dos designs e criando Scripts JSX para a Adobe, além de aprimorar o sistema de gestão de clientes e pedidos utilizado pela empresa.`
				}
			]
		},
		worksPlus: {
			title: "OUTROS",
			subjects: [
				/* PESQUISADOR */ {
					title: "PESQUISADOR",
					type: "CONTRATO",
					time: "1 mês - 2023",
					content: `Durante um mês, viajei por várias cidades da Bahia realizando pesquisas em nome da empresa UniFel.`
				},
				/* ENTREGADOR */ {
					title: "ENTREGADOR DE PACOTES",
					type: "CONTRATO",
					time: "2 meses - 2023",
					content: `Trabalhei como entregador na J&T Express, aprimorando habilidades organizacionais, eficiência na gestão de rotas e o cumprimento de metas. Responsável pela entrega pontual dos pacotes, mantive um alto padrão de desempenho.`
				},
				/* FREELANCER */ {
					title: "FREELANCER",
					type: "INFORMAL",
					time: "PERIODICAMENTE",
					content: `Atuo como freelancer, oferecendo meus serviços tanto em programação quanto em design. Também dou aulas e tutoriais sobre a área.`
				}
			]
		}
	}
};