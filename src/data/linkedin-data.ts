export interface Profile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  website: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Service {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface LinkedInData {
  profile: Profile;
  services: Service[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}

export const linkedInData: LinkedInData = {
  profile: {
    name: "Marvin Esteban",
    headline:
      "Desarrollo de soluciones empresariales con .NET",
    summary:
      "Me especializo en crear soluciones empresariales con C#, .NET, ASP.NET Core y SQL Server. Desarrollo APIs, aplicaciones web e integraciones que ayudan a ordenar procesos, automatizar tareas y aprovechar mejor la información del negocio. También cuento con experiencia complementaria en Laravel, Python, SAP Business One y administración de servidores.",
    location: "",
    email: "########",
    phone: "########",
    website: "www.marvinesteban.com",
  },

  services: [
    {
      title: "Desarrollo web a la medida",
      company: "Aplicaciones empresariales con .NET",
      period: "C#, ASP.NET Core y SQL Server",
      description: [
        "Construcción de aplicaciones web adaptadas a los procesos de tu negocio",
        "APIs REST, autenticación e integraciones con servicios existentes",
        "Código mantenible, seguro y preparado para crecer",
      ],
    },
    {
      title: "Automatización y análisis de datos",
      company: "Decisiones basadas en información confiable",
      period: "SQL Server, Python y dashboards",
      description: [
        "Automatización de tareas y reportes repetitivos",
        "Consultas y optimización de bases de datos SQL Server y MySQL",
        "Dashboards e informes para entender mejor tu operación",
      ],
    },
    {
      title: "Integración y soporte técnico",
      company: "Conecta y estabiliza tus sistemas",
      period: "SAP B1, servidores y aplicaciones",
      description: [
        "Integración con SAP Business One y otros sistemas empresariales",
        "Configuración y administración de servidores Linux y Windows",
        "Diagnóstico y mejora de aplicaciones existentes",
      ],
    },
  ],

  experience: [
    {
      title: "Desarrollador .NET",
      company: "Desarrollo backend y soluciones empresariales",
      location: "Ciudad, País",
      period: "Mes Año - Presente",
      description: [
        "Desarrollo de aplicaciones web y APIs con C# y .NET",
        "Diseño e implementación de bases de datos SQL Server",
        "Administración de servidores Linux y Windows",
        "Integración con sistemas SAP B1",
      ],
    },
    {
      title: "Analista de Datos",
      company: "Nombre de la Empresa",
      location: "Ciudad, País",
      period: "Mes Año - Mes Año",
      description: [
        "Análisis de datos con Python y SQL",
        "Generación de informes y dashboards",
        "Optimización de consultas SQL Server",
        "Automatización de reportes",
      ],
    },
  ],

  education: [
    {
      degree: "Título Universitario",
      institution: "Nombre de la Universidad",
      period: "Año - Año",
      description: "Descripción de estudios relevantes",
    },
  ],

  certifications: [
    {
      name: "Certificación Ejemplo",
      issuer: "Organización",
      date: "Mes Año",
      credential: "",
    },
  ],

  projects: [
    {
      name: "Sistema de Gestión",
      description:
        "Desarrollo de sistema web con ASP.NET Core y SQL Server para gestión empresarial",
      technologies: ["C#", ".NET", "ASP.NET Core", "SQL Server"],
      image: "/img/user.png",
      link: "#",
    },
    {
      name: "Dashboard de Análisis",
      description:
        "Dashboard interactivo con Python para análisis de datos de SAP B1",
      technologies: ["Python", "SQL Server", "SAP B1"],
      image: "/img/user.png",
      link: "#",
    },
    {
      name: "API REST",
      description:
        "Desarrollo de API RESTful con ASP.NET Core para integración de sistemas",
      technologies: ["C#", "ASP.NET Core", "REST API", "JWT"],
      image: "/img/user.png",
      link: "#",
    },
  ],
};
