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
					content: `Je suis a chercher d'un emploi 😊<br> J'apprends vite et je suis créatif.<br><br>(GPT)<br>Je viens de Bahia, au Brésil, j'ai ${age} ans, et je cherche une opportunité professionnelle qui offre un parcours d'apprentissage et de développement. Je suis flexible, créatif, efficace et m'adapte facilement aux nouveaux défis et aux changements. Je suis enthousiaste à l'idée d'appliquer mes compétences et de commencer ce parcours vers le succès professionnel !`
				}]
			},
			differential: {
				title: "DIFFÉRENCIATEURS",
				subjects: [{
					list: true,
					content: [
						"Passionné par les défis",
						"Apprenant rapide",
						"Polyvalent et adaptable",
						"Sincère et éthique",
						"Dévoué à l'organisation",
						"Engagé dans l'excellence et la qualité",
						"Fluent en anglais",
						"Notions de français",
						"Collaboratif et efficace en travail d'équipe",
						"Créatif et innovant dans les solutions technologiques",
						"Compétent en JavaScript",
						"Grande expertise en design",
						"Expérience avec les scripts JSX pour les applications Adobe",
						"Expérience en développement WEB et Mobile",
						"Expérience en création de systèmes",
						"Expérience en développement Arduino",
					]
				}]
			},
		},
		education: {
			title: "PARCOURS ACADÉMIQUE",
			subjects: [
        /* CS50 */ {
					title: "CS50's Web Programming with Python and JavaScript",
					type: "FORMATION SPÉCIALISÉE",
					time: "2023",
					content: "J'ai participé au cours proposé par Harvard, où j'ai approfondi mes connaissances en programmation web. J'ai acquis des concepts essentiels pour développer des applications web modernes et dynamiques.",
				},
        /* LCI IF */ {
					title: "Informatique",
					type: "LICENCE - INCOMPLETE",
					time: "2019/2023",
					content: "J'ai consolidé mes connaissances en programmation et en technologie durant la licence à l'IF Baiano - Sr. do Bonfim, Bahia, Brésil, où j'ai appliqué la plupart de mes projets.",
				},
        /* SENAI */ {
					title: "Support Technique en Informatique",
					type: "COURS PROFESSIONNEL",
					time: "2017/2018",
					content: "J'ai commencé mon parcours académique avec un cours de Support Technique en Informatique au SENAI Cetind à Lauro de Freitas, Bahia, Brésil, acquérant une base solide en réseautage, programmation, support technique et autres sujets, renforçant ainsi ma passion pour le domaine.",
				},
			]
		},
		educationPlus: {
			title: "COURS COMPLÉMENTAIRES",
			subjects: [
        /* LGPD */ {
					title: "LGPD",
					type: "COURS PROFESSIONNEL",
					time: "4 heures - 2021",
					content: `J'ai suivi un cours en ligne au SENAI São Paulo, Brésil, sur la "Confidentialité et Protection des Données", apprenant les réglementations de sécurité de l'information et de confidentialité.`,
				},
        /* LOGICA DE PROGRAMAÇAO */ {
					title: "Compétences Transversales en Logique de Programmation",
					type: "COURS PROFESSIONNEL",
					time: "14 heures - 2017",
					content: "J'ai suivi un cours en ligne sur la Logique de Programmation au SENAI Bahia, Brésil, acquérant les fondamentaux en programmation et logique.",
				},
        /* EMPREENDEDORISMO */ {
					title: "Compétences Transversales en Entrepreneuriat",
					type: "COURS PROFESSIONNEL",
					time: "14 heures - 2017",
					content: "J'ai suivi un cours en ligne sur l'Entrepreneuriat au SENAI Bahia, Brésil, acquérant des compétences essentielles liées à l'entrepreneuriat et à la gestion des affaires.",
				}
			]
		},
		projects: {
			title: "TRAVAUX ET PROJETS",
			subjects: [
        /* PROJETOS */ {
					title: "Projets Personnels",
					type: "LOISIR",
					time: "PÉRIODIQUEMENT",
					content: `En plus des projets listés ici, j'ai une large gamme de projets disponibles sur mon profil GitHub : <a target="_blank" href="https://github.com/NaN-NaN-sempai">github.com/NaN-NaN-sempai</a> ou sur mon site personnel : <a target="_blank" href="https://luishenrique.site/pt/">luishenrique.site</a>. Mes projets démontrent ma passion pour l'apprentissage et ma capacité à créer des solutions innovantes grâce à la programmation.`,
				},
        /* PDEF */ {
					title: "PDEF",
					type: "PROJET ACADÉMIQUE",
					time: "2021",
					content: `Function Plotter (PDEF), un projet requis durant le cours d'Applications Graphiques à l'IF Baiano. PDEF est une plateforme qui permet la création de graphiques en utilisant JavaScript. Ce projet est devenu un outil précieux pour visualiser et comprendre les concepts graphiques, ainsi qu'une réalisation personnelle en tant que programmeur. Il peut être consulté à : <a target="_blank" href="https://luishenrique.site/PdeF/">luishenrique.site/PdeF</a>`,
				},
        /* LICA APP */ {
					title: "LiCA App",
					type: "PROJET ACADÉMIQUE",
					time: "2021",
					content: `L'App LiCA était ma première application Android, développée avec mon collègue Joel Junior dans le cadre du cours d'Applications Graphiques à l'IF Baiano. Cette application était conçue pour afficher le programme de la Licence en Sciences Agronomiques et était disponible sur le Google Play Store jusqu'au 14/03/2024. Disponible à : <a target="_blank" href="http://applica.luishenrique.site">applica.luishenrique.site</a>`
				},
        /* OFICINA */ {
					title: "Atelier sur l'Informatique",
					type: "STAGE ACADÉMIQUE",
					time: "2022",
					content: `Dans le cadre du Stage I à l'IF Baiano, mon collègue Marcos Santos et moi avons organisé un atelier en ligne (en raison de la pandémie COVID-19) sur "Introduction à l'Informatique", couvrant des sujets tels que l'histoire de l'informatique, le matériel, les logiciels, les réseaux, la programmation, le développement web et les opportunités professionnelles. Quelques informations (en pt-BR) à : <a target="_blank" href="https://oficina-introducao-computacao.vercel.app/">oficina-introducao-computacao.vercel.app</a>`
				},
        /* ARTIGO */ {
					title: "Article Publié",
					type: "PROJET ACADÉMIQUE",
					time: "2022",
					content: `J'ai participé au Programme Institutionnel de Bourses de Début d'Enseignement (PIBID) en travaillant avec le professeur de physique Damon Ferreira Farias, et avec des collègues, avons publié un article à Conedu sur la sécurité de l'information dans les écoles. PDF disponible (en pt-BR) à : <a target="_black" href="https://editorarealize.com.br/editora/anais/conedu/2021/TRABALHO_EV150_MD1_SA119_ID1208_22092021174849.pdf">editorarealize.com</a>`
				},
        /* WINDOWS APP FOLDER */ {
					title: "Programme pour Windows",
					type: "LOISIR / BESOIN PERSONNEL",
					time: "2023",
					content: `Le Windows App Folder est une application Windows réalisée avec Electron.js qui crée des dossiers personnalisés pour organiser des applications ou des fichiers, inspirée par les dossiers d'applications de Samsung sur Android. Accès : <a target="_blank" href="https://github.com/NaN-NaN-sempai/Windows-App-Folder">github.com/NaN-NaN-sempai/Windows-App-Folder</a>`
				},
        /* USEBASE */ {
					title: "UseBase",
					type: "LOISIR / BESOIN PERSONNEL",
					time: "2023",
					content: `UseBase est une bibliothèque JavaScript polyvalente conçue pour simplifier le processus d'encodage et de décodage des nombres en utilisant différentes bases numériques. Que ce soit pour représenter des entiers en binaire, hexadécimal, ensembles de caractères personnalisés ou même emojis, UseBase offre une solution flexible. Disponible à <a target="_black" href="https://www.npmjs.com/package/usebase">npmjs.com/package/usebase</a>`
				},
			]
		},
		projectsPlus: {
			title: "PROJETS EN DÉVELOPPEMENT",
			subjects: [
        /* MPJS */ {
					title: "MPJS",
					type: "Projet personnel",
					time: "2023 / EN DÉVELOPPEMENT",
					content: `Math Plotter Javascript (MPJS) est une évolution de PDEF, maintenant avec une interface améliorée incorporant l'éditeur Monaco et une syntaxe JavaScript plus avancée pour créer des graphiques complexes. Disponible à : <a target="_blank" href="https://luishenrique.site/MPJS/">luishenrique.site/MPJS</a>`
				}
			]
		},
		works: {
			title: "EXPÉRIENCE PROFESSIONNELLE",
			subjects: [
        /* INOVAR */ {
					title: "GRAPHISTE",
					type: "INFORMEL",
					time: "2021/2024",
					content: `J'ai travaillé chez Inovar Personalizações en tant que designer, créant des designs uniques pour des classeurs et des cartons. Pendant cette période, j'ai appliqué mes compétences de développeur en introduisant une nouvelle méthodologie pour la création de designs et en créant des scripts JSX pour Adobe, ainsi qu'en améliorant le système de gestion des clients et des commandes utilisé par l'entreprise.`
				}
			]
		},
		worksPlus: {
			title: "AUTRES",
			subjects: [
        /* RESEARCHER */ {
					title: "RECHERCHER",
					type: "CONTRAT",
					time: "1 mois - 2023",
					content: `Pendant un mois, j'ai voyagé dans plusieurs villes de Bahia pour mener des recherches pour UniFel.`
				},
        /* DELIVERY PERSON */ {
					title: "LIVREUR",
					type: "CONTRAT",
					time: "2 mois - 2023",
					content: `J'ai travaillé en tant que livreur chez J&T Express, améliorant mes compétences organisationnelles, l'efficacité de la gestion des itinéraires et le respect des objectifs. Responsable de la livraison ponctuelle des colis, j'ai maintenu un haut niveau de performance.`
				},
        /* FREELANCER */ {
					title: "FREELANCE",
					type: "INFORMEL",
					time: "PÉRIODIQUEMENT",
					content: `Je travaille en tant que freelance, offrant mes services en programmation et en design. Je donne également des cours et des tutoriels dans le domaine.`
				}
			]
		}
	}
};
