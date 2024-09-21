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
                    content: `Sou da Bahia, Brasil, tenho ${age} anos e busco oportunidades para crescimento profissional. Sou flexível, criativo e eficiente, adaptando-me bem a novos desafios. Estou animado para aplicar minhas habilidades e alcançar o sucesso!`
                }]
            },
            differential: {
                title: "DIFERENCIAIS",
                subjects: [{
                    list: true,
                    content: [
                        "Apaixonado por desafios",
                        "Aprendizagem rápida",
                        "Adaptável",
                        "Sincero e Ético",
                        "Organizado e Comprometido",
						"Colaborativo em equipe",
                        "Inglês fluente",
                        "Francês básico",
                        "Criativo e inovador",
                        "Designer",
                        "Experiência em Adobe JSX",
                        "Desenvolvimento WEB, Mobile e Arduino",
                    ]
                }]
            }
        },
        education: {
            title: "FORMAÇÃO ACADÊMICA",
            subjects: [
                {
                    title: "CS50's Web Programming with Python and JavaScript",
                    type: "TREINAMENTO ESPECIALIZADO",
                    time: "2023",
                    content: "Curso da Harvard em programação web moderna e desenvolvimento de aplicativos dinâmicos.",
                },
                {
                    title: "Ciências da Computação",
                    type: "ENSINO SUPERIOR - INCOMPLETO",
                    time: "2019/2023",
                    content: "Curso no IF Baiano focado em programação e tecnologia, com prática em projetos.",
                },
                {
                    title: "Suporte Técnico em TI",
                    type: "CURSO PROFISSIONALIZANTE",
                    time: "2017/2018",
                    content: "Curso no SENAI Cetind em redes e programação, fundamentando minha paixão pela área.",
                }
            ]
        },
        educationPlus: {
            title: "CURSOS COMPLEMENTARES",
            subjects: [
                {
                    title: "LGPD",
                    type: "CURSO PROFISSIONALIZANTE",
                    time: "4 horas - 2021",
                    content: "Curso online no SENAI sobre privacidade e proteção de dados.",
                },
                {
                    title: "Lógica de Programação",
                    type: "CURSO PROFISSIONALIZANTE",
                    time: "14 horas - 2017",
                    content: "Curso de fundamentos em programação e lógica no SENAI.",
                },
                {
                    title: "Empreendedorismo",
                    type: "CURSO PROFISSIONALIZANTE",
                    time: "14 horas - 2017",
                    content: "Curso sobre empreendedorismo e gestão de negócios no SENAI.",
                }
            ]
        },
        projects: {
            title: "TRABALHOS E PROJETOS",
            subjects: [
                {
                    title: "Projetos Pessoais",
                    type: "HOBBY",
                    time: "PERIODICAMENTE",
                    content: `Mais projetos no meu <a target="_blank" href="https://github.com/NaN-NaN-sempai">Github</a> e no site: <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>.`,
                },
                {
                    title: "PDEF",
                    type: "PROJETO ACADÊMICO",
                    time: "2021",
                    content: `Plataforma de gráficos em JavaScript. Acesse: <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
                },
                {
                    title: "LiCA App",
                    type: "PROJETO ACADÊMICO",
                    time: "2021",
                    content: `Primeiro aplicativo Android para ementa do curso de Ciências Agrárias. Disponível em: <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`
                },
                {
                    title: "Oficina Sobre Computação",
                    type: "ESTÁGIO ACADÊMICO",
                    time: "2022",
                    content: `Oficina online sobre computação organizada durante a pandemia. Mais em: <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`
                },
                {
                    title: "Artigo Publicado",
                    type: "PROJETO ACADÊMICO",
                    time: "2022",
                    content: `Artigo sobre segurança da informação nas escolas. PDF em: <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`
                },
                {
                    title: "Programa para Computador",
                    type: "HOBBY",
                    time: "2023",
                    content: `Aplicativo para Windows que organiza pastas, criado com Electron.js. Acesse: <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>`
                },
                {
                    title: "UseBase",
                    type: "HOBBY",
                    time: "2023",
                    content: `Biblioteca JavaScript para codificação e decodificação de números em várias bases. Disponível no <a target="_black" href="https://www.npmjs.com/package/usebase">NPM</a>`
                }
            ]
        },
        projectsPlus: {
            title: "PROJETOS EM DESENVOLVIMENTO",
            subjects: [
                {
                    title: "MPJS",
                    type: "Projeto pessoal",
                    time: "2023 / EM DESENVOLVIMENTO",
                    content: `Evolução do PDEF com interface aprimorada e novos recursos. Disponível em: <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`
                }
            ]
        },
        works: {
            title: "EXPERIÊNCIA PROFISSIONAL",
            subjects: [
                {
                    title: "Designer Gráfico",
                    type: "INFORMAL",
                    time: "2021/2024",
                    content: `Trabalhei na Inovar Personalizações, criando designs e implementando melhorias nos processos e sistemas da empresa.`
                }
            ]
        },
        worksPlus: {
            title: "OUTROS",
            subjects: [
                {
                    title: "Pesquisador",
                    type: "CONTRATO",
                    time: "1 mês - 2023",
                    content: `Realizei pesquisas em várias cidades da Bahia para a UniFel.`
                },
                {
                    title: "Entregador de Pacotes",
                    type: "CONTRATO",
                    time: "2 meses - 2023",
                    content: `Entregador na J&T Express, gerenciando rotas e mantendo um alto padrão de desempenho.`
                },
                {
                    title: "Freelancer",
                    type: "INFORMAL",
                    time: "PERIODICAMENTE",
                    content: `Atuo como freelancer em programação, design e tutoria.`
                }
            ]
        }
    }
};