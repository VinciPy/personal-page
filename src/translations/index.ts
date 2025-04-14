export const translations = {
  en: {
    hero: {
      greeting: "Hey, I'm Vinicius Santana ✨",
      description: "I'm a backend developer specialized in creating robust, secure, and scalable solutions, following development best practices.",
      aboutButton: "More about me",
      contactButton: "Get in touch"
    },
    team: {
      title: "People I Work With",
      showMore: "Learn more about the team",
      hideDetails: "Hide team details",
      description: {
        part1: "I collaborate with a diverse team of talented individuals to bring creative ideas to life. Our combined expertise spans design, development, project management, and UX research.",
        part2: "Together, we've shipped products used by thousands of people worldwide, from startups to enterprise companies."
      }
    },
    blog: {
      title: "Recent Blog Posts",
      viewAll: "View all posts",
      description: "Thoughts, ideas, and insights on design, development, and technology."
    }
  },
  fr: {
    hero: {
      greeting: "Salut, je suis Vinicius Santana ✨",
      description: "Je suis développeur backend spécialisé dans la création de solutions robustes, sécurisées et évolutives, en suivant les meilleures pratiques de développement.",
      aboutButton: "En savoir plus sur moi",
      contactButton: "Me contacter"
    },
    team: {
      title: "Les Gens Avec Qui Je Travaille",
      showMore: "En savoir plus sur l'équipe",
      hideDetails: "Masquer les détails de l'équipe",
      description: {
        part1: "Je collabore avec une équipe diversifiée de personnes talentueuses pour donner vie à des idées créatives. Notre expertise combinée couvre le design, le développement, la gestion de projet et la recherche UX.",
        part2: "Ensemble, nous avons livré des produits utilisés par des milliers de personnes dans le monde entier, des startups aux entreprises."
      }
    },
    blog: {
      title: "Articles Récents",
      viewAll: "Voir tous les articles",
      description: "Pensées, idées et aperçus sur le design, le développement et la technologie."
    }
  },
  "pt-BR": {
    hero: {
      greeting: "Olá, eu sou Vinicius Santana ✨",
      description: "Sou desenvolvedor backend especializado em criar soluções robustas, seguras e escaláveis, seguindo as melhores práticas de desenvolvimento.",
      aboutButton: "Mais sobre mim",
      contactButton: "Entre em contato"
    },
    team: {
      title: "Pessoas Com Quem Trabalho",
      showMore: "Saiba mais sobre a equipe",
      hideDetails: "Ocultar detalhes da equipe",
      description: {
        part1: "Eu colaboro com uma equipe diversificada de pessoas talentosas para dar vida a ideias criativas. Nossa experiência combinada abrange design, desenvolvimento, gerenciamento de projetos e pesquisa UX.",
        part2: "Juntos, entregamos produtos usados por milhares de pessoas em todo o mundo, desde startups até empresas."
      }
    },
    blog: {
      title: "Posts Recentes",
      viewAll: "Ver todos os posts",
      description: "Pensamentos, ideias e insights sobre design, desenvolvimento e tecnologia."
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.en; 