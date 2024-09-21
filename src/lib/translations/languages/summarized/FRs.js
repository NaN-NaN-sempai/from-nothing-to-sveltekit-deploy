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
    name: "FR",
    level: "👶🏻",
    content: {
        curriculum: "CURRICULUM VITAE",
        contacts: "Contacts",
        intro: {
            declaration: {
                title: "DÉCLARATION PROFESSIONNELLE",
                subjects: [{
                    content: `Je suis de Bahia, Brésil, j'ai ${age} ans, et je cherche une opportunité professionnelle pour grandir. Je suis rapide à apprendre, créatif, adaptable, et enthousiaste à l'idée de relever de nouveaux défis.`
                }]
            },
            differential: {
                title: "DIFFÉRENCIATEURS",
                subjects: [{
                    list: true,
                    content: [
                        "Passionné par les défis",
                        "Apprenant rapide",
                        "Polyvalent",
                        "Sincère",
                        "Organisé",
                        "Fluent en anglais",
                        "Notions de français",
                        "Travail en équipe",
                        "Créatif",
                        "Designer",
                        "Programmeur",
                        "Développement Adobe JSX",
                        "Développement WEB, Mobile et Arduino",
                    ]
                }]
            }
        },
        education: {
            title: "PARCOURS ACADÉMIQUE",
            subjects: [
                {
                    title: "CS50's Web Programming",
                    type: "FORMATION SPÉCIALISÉE",
                    time: "2023",
                    content: "Formation Harvard sur la programmation web moderne.",
                },
                {
                    title: "Informatique",
                    type: "LICENCE - INCOMPLETE",
                    time: "2019/2023",
                    content: "Formation en programmation à l'IF Baiano.",
                },
                {
                    title: "Support Technique en Informatique",
                    type: "COURS PROFESSIONNEL",
                    time: "2017/2018",
                    content: "Cours sur le support technique au SENAI Cetind.",
                }
            ]
        },
        educationPlus: {
            title: "COURS COMPLÉMENTAIRES",
            subjects: [
                {
                    title: "LGPD",
                    type: "COURS PROFESSIONNEL",
                    time: "2021",
                    content: "Formation sur la confidentialité des données.",
                },
                {
                    title: "Logique de Programmation",
                    type: "COURS PROFESSIONNEL",
                    time: "2017",
                    content: "Cours sur les bases de la programmation.",
                },
                {
                    title: "Entrepreneuriat",
                    type: "COURS PROFESSIONNEL",
                    time: "2017",
                    content: "Cours sur l'entrepreneuriat.",
                }
            ]
        },
        projects: {
            title: "TRAVAUX ET PROJETS",
            subjects: [
                {
                    title: "Projets Personnels",
                    type: "LOISIR",
                    time: "PÉRIODIQUEMENT",
                    content: "Voir mes projets sur <a target='_black' href='https://github.com/NaN-NaN-sempai'>GitHub</a> ou mon site : <a href='https://luishenrique.site/pt/'>luishenrique.site</a>.",
                },
                {
                    title: "PDEF",
                    type: "PROJET ACADÉMIQUE",
                    time: "2021",
                    content: "Plateforme de création de graphiques. Voir : <a target='_black' href='https://luishenrique.site/PdeF/'>PDEF</a>",
                },
                {
                    title: "LiCA App",
                    type: "PROJET ACADÉMIQUE",
                    time: "2021",
                    content: "Application Android pour le programme de Sciences Agronomiques. Voir : <a target='_black' href='http://applica.luishenrique.site'>LiCA</a>",
                },
                {
                    title: "Atelier sur l'Informatique",
                    type: "STAGE ACADÉMIQUE",
                    time: "2022",
                    content: "Atelier en ligne sur l'informatique. Voir : <a target='_black' href='https://oficina-introducao-computacao.vercel.app/'>Atelier</a> (pt-BR)",
                },
                {
                    title: "Article Publié",
                    type: "PROJET ACADÉMIQUE",
                    time: "2022",
                    content: "Article sur la sécurité de l'information. Voir : <a target='_black' href='https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf'>Article</a> (pt-BR)",
                },
                {
                    title: "Programme pour Windows",
                    type: "LOISIR / BESOIN PERSONNEL",
                    time: "2023",
                    content: "Application pour organiser des fichiers. Voir : <a target='_black' href='https://github.com/NaN-NaN-sempai/Windows-App-Folder'>App</a>",
                },
                {
                    title: "UseBase",
                    type: "LOISIR / BESOIN PERSONNEL",
                    time: "2023",
                    content: "Bibliothèque JavaScript pour l'encodage de nombres. Voir : <a target='_black' href='https://www.npmjs.com/package/usebase'>UseBase</a>",
                }
            ]
        },
        projectsPlus: {
            title: "PROJETS EN DÉVELOPPEMENT",
            subjects: [
                {
                    title: "MPJS",
                    type: "Projet personnel",
                    time: "2023 / EN DÉVELOPPEMENT",
                    content: "Math Plotter avec interface avancée. Voir : <a target='_black' href='https://luishenrique.site/MPJS/'>MPJS</a>",
                }
            ]
        },
        works: {
            title: "EXPÉRIENCE PROFESSIONNELLE",
            subjects: [
                {
                    title: "GRAPHISTE",
                    type: "INFORMEL",
                    time: "2021/2024",
                    content: "Design chez Inovar Personalizações, amélioration des méthodologies de design.",
                }
            ]
        },
        worksPlus: {
            title: "AUTRES",
            subjects: [
                {
                    title: "RECHERCHEUR",
                    type: "CONTRAT",
                    time: "2023",
                    content: "Recherche pour UniFel en Bahia.",
                },
                {
                    title: "LIVREUR",
                    type: "CONTRAT",
                    time: "2023",
                    content: "Livreur chez J&T Express.",
                },
                {
                    title: "FREELANCE",
                    type: "INFORMEL",
                    time: "PÉRIODIQUEMENT",
                    content: "Services en programmation, design, cours et tutoriels.",
                }
            ]
        }
    }
};
