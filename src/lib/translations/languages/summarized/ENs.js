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
    name: "EN",
    level: "🗣️",
    content: {
        curriculum: "CURRICULUM",
        contacts: "Contacts",

        intro: {
            declaration: {
                title: "PROFESSIONAL STATEMENT",
                subjects: [{ content: `From Bahia, Brazil, ${age} years old. Seeking opportunities for growth. Flexible, creative, and adaptable.` }]
            },
            differential: {
                title: "DIFFERENTIATORS",
                subjects: [{
                    list: true, content: [
                        "Passionate about challenges",
                        "Quick learner",
                        "Versatile",
                        "Sincere",
                        "Organized",
                        "Fluent in English",
                        "Basic French",
                        "Team player",
                        "Creative",
                        "Designer",
                        "Programmer",
						"Experience with Adobe JSX scripts",
                        "Experienced in WEB, Mobile and Arduino development",
                    ]
                }]
            },
        },
        education: {
            title: "ACADEMIC BACKGROUND",
            subjects: [
                {
                    title: "CS50's Web Programming",
                    type: "SPECIALIZED TRAINING",
                    time: "2023",
                    content: "Harvard course on modern web programming.",
                },
                {
                    title: "Computer Science",
                    type: "UNDERGRADUATE - INCOMPLETE",
                    time: "2019/2023",
                    content: "Programming and tech skills at IF Baiano.",
                },
                {
                    title: "Technical Support in IT",
                    type: "PROFESSIONAL COURSE",
                    time: "2017/2018",
                    content: "Foundational tech course at SENAI Cetind.",
                },
            ]
        },
        educationPlus: {
            title: "ADDITIONAL COURSES",
            subjects: [
                {
                    title: "LGPD",
                    type: "PROFESSIONAL COURSE",
                    time: "2021",
                    content: "Privacy and Data Protection course.",
                },
                {
                    title: "Programming Logic",
                    type: "PROFESSIONAL COURSE",
                    time: "2017",
                    content: "Fundamentals of programming.",
                },
                {
                    title: "Entrepreneurship",
                    type: "PROFESSIONAL COURSE",
                    time: "2017",
                    content: "Skills in business management.",
                }
            ]
        },
        projects: {
            title: "WORKS AND PROJECTS",
            subjects: [
                {
                    title: "Personal Projects",
                    type: "HOBBY",
                    time: "PERIODICALLY",
                    content: 'Check my <a target="_blank" href="https://github.com/NaN-NaN-sempai">Github</a> and <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a> for more projects.',
                },
                {
                    title: "PDEF",
                    type: "ACADEMIC PROJECT",
                    time: "2021",
                    content: "JavaScript platform for graph creation. Visit: <a href='https://luishenrique.site/PdeF/'>PDEF</a>",
                },
                {
                    title: "LiCA App",
                    type: "ACADEMIC PROJECT",
                    time: "2021",
                    content: "Android app for Agricultural Sciences syllabus. Visit: <a href='http://applica.luishenrique.site'>LiCA</a>",
                },
                {
                    title: "Workshop on Computing",
                    type: "ACADEMIC INTERNSHIP",
                    time: "2022",
                    content: "Online workshop on computing basics. Details at: <a href='https://oficina-introducao-computacao.vercel.app/'>Workshop</a> (pt-BR)",
                },
                {
                    title: "Published Article",
                    type: "ACADEMIC PROJECT",
                    time: "2022",
                    content: "Article on info security in schools. PDF at: <a href='https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf'>Article</a> (pt-BR)",
                },
                {
                    title: "Computer Program",
                    type: "HOBBY / PERSONAL NEED",
                    time: "2023",
                    content: "Windows app for organizing files. Visit the <a href='https://github.com/NaN-NaN-sempai/Windows-App-Folder'>Github Repo</a>",
                },
                {
                    title: "UseBase",
                    type: "HOBBY / PERSONAL NEED",
                    time: "2023",
                    content: "JavaScript library for encoding numbers. Available at <a href='https://www.npmjs.com/package/usebase'>NPM</a>",
                },
            ]
        },
        projectsPlus: {
            title: "PROJECTS IN DEVELOPMENT",
            subjects: [
                {
                    title: "MPJS",
                    type: "Personal project",
                    time: "2023 / IN DEVELOPMENT",
                    content: "Math Plotter with advanced features. Visit: <a href='https://luishenrique.site/MPJS/'>MPJS</a>",
                }
            ]
        },
        works: {
            title: "PROFESSIONAL EXPERIENCE",
            subjects: [
                {
                    title: "GRAPHIC DESIGNER",
                    type: "INFORMAL",
                    time: "2021/2024",
                    content: "Designer at Inovar Personalizações, enhanced design methodologies and systems.",
                }
            ]
        },
        worksPlus: {
            title: "OTHERS",
            subjects: [
                {
                    title: "RESEARCHER",
                    type: "CONTRACT",
                    time: "2023",
                    content: "Research for UniFel in Bahia.",
                },
                {
                    title: "PACKAGE DELIVERY",
                    type: "CONTRACT",
                    time: "2023",
                    content: "Delivery person at J&T Express.",
                },
                {
                    title: "FREELANCER",
                    type: "INFORMAL",
                    time: "PERIODICALLY",
                    content: "Freelance programming, design, teaching, and tutorials.",
                }
            ]
        }
    }
};
