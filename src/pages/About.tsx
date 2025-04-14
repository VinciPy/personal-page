import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';

const projects = [
  {
    title: "Dev Hunter Jobs Project",
    description: "Desenvolvimento de um projeto de busca de empregos para desenvolvedores, com foco em criar uma experiência de usuário intuitiva e eficiente.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/VinciPy/dev.hunter.job.project",
  },
  {
    title: "Customer Profile Project",
    description: "Api para gerenciamento de perfil de clientes, com foco em criar uma experiência de usuário intuitiva e eficiente.",
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "Kakfa"],
    link: "https://github.com/VinciPy/CustumerProfile",
  },
  {
    title: "Api GoLang",
    description: "Api em GoLang com Buffalo Framework, para gerenciamento de clientes, com foco em criar uma experiência de usuário intuitiva e eficiente.",
    tags: ["Go", "Buffalo"],
    link: "https://github.com/VinciPy/clean_api_go",
  },
];

// Mock data for experience
const experiences = [
  {
    company: "Suprema Gaming",
    position: "Desenvolvedor Backend Pleno",
    period: "2025 - Presente",
    description: "Desenvolvimento de APIs para o sistema de gerenciamento interno de afiliados clubes, projeto SUPREMA BET",
  },
  {
    company: "Header Interactive Digital",
    position: "Software Engineer",
    period: "2022 - 2025",
    description: "Engenheiro de software com foco em boas práticas, CI/CD, Clean Code, TDD, e arquitetura escalável. Experiência com Node.js, Python, Kubernetes, Lambda, mensageria (RabbitMQ, Kafka, BullMQ) e padrões como Event-Driven e CQRS.",
  },
  {
    company: "Winsite Sistemas",
    position: "Desenvolvedor Full Stack",
    period: "2021 - 2022",
    description: "Desenvolvedor de software com foco em soluções sob medida, integrações complexas e automação de processos. Reconhecido pela habilidade em identificar soluções eficazes, liderar a adoção do Gitflow e facilitar a integração com sistemas externos seguindo boas práticas. Atuei na migração de monolitos para microsserviços, implantando pipelines de entrega contínua com Kubernetes.",
  },
  {
    company: "Centrion Web",
    position: "Desenvolvedor Full Stack",
    period: "2020 - 2021",
    description: "Responsavel sistema integrado para controladoria de academias, liderando o time de integrações e pagamentos. Responsável por garantir soluções escaláveis, seguras e alinhadas ao negócio, com foco em performance, integrações externas e melhoria contínua do time.",
  }
];

// Skills categories
const skills = {
  architecture: ["AWS", "Docker", "Kubernetes", "CI/CD", "Ansible", "Google Cloud Platform", "Azure", "Terraform", "Jenkins", "GitLab CI/CD", "GitLab Kubernetes Agent", "GitLab Container Registry", "GitLab Artifacts", "GitLab Pages", "GitLab Runner", "GitLab CI/CD", "GitLab Kubernetes Agent", "GitLab Container Registry", "GitLab Artifacts", "GitLab Pages", "GitLab Runner"],
  backend: ["Node.js", "NestJS", "TypeScript", "Python", "PHP", "Laravel", "GoLang", "Buffalo Web Framework", "Django"],
  sec: ["Red Team", "CTF", "Cybersecurity", "Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Security Auditing", "Incident Response", "Security Operations Center (SOC)"],
  tools: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "CI/CD", "Cursor", "Postman", "Jet Brains", "IntelliJ"],
};

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* About Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionTitle>{t('about.title')}</SectionTitle>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              {t('about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              {t('about.description2')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about.description3')}
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-secondary/20">
        <SectionTitle>{t('about.skills.title')}</SectionTitle>
        <Tabs defaultValue="backend" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="architecture">{t('about.skills.architecture')}</TabsTrigger>
            <TabsTrigger value="backend">{t('about.skills.backend')}</TabsTrigger>
            <TabsTrigger value="sec">{t('about.skills.sec')}</TabsTrigger>
            <TabsTrigger value="tools">{t('about.skills.tools')}</TabsTrigger>
          </TabsList>
          <TabsContent value="architecture" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.architecture.map((skill) => (
                <div key={skill} className="p-4 bg-secondary rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="backend" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.backend.map((skill) => (
                <div key={skill} className="p-4 bg-secondary rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sec" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.sec.map((skill) => (
                <div key={skill} className="p-4 bg-secondary rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tools" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.tools.map((skill) => (
                <div key={skill} className="p-4 bg-secondary rounded-md">
                  {skill}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Experience Section */}
      <Section>
        <SectionTitle>{t('about.experience.title')}</SectionTitle>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-secondary pl-6 relative">
              <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-1.5"></div>
              <h3 className="text-xl font-semibold mb-1">{exp.position}</h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-muted-foreground">{exp.company}</p>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-secondary/20">
        <SectionTitle>{t('about.projects.title')}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default About;
