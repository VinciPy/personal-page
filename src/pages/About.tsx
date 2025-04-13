
import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for projects
const projects = [
  {
    title: "Personal Dashboard",
    description: "A customizable dashboard for tracking personal metrics and goals.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/johndoe/dashboard",
  },
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    link: "https://github.com/johndoe/ecommerce",
  },
  {
    title: "Weather App",
    description: "A beautiful weather application with 7-day forecasts and location detection.",
    tags: ["React", "OpenWeather API", "Geolocation"],
    link: "https://github.com/johndoe/weather-app",
  },
  {
    title: "Design System",
    description: "A comprehensive design system with components for web applications.",
    tags: ["Figma", "React", "Storybook"],
    link: "https://github.com/johndoe/design-system",
  },
];

// Mock data for experience
const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Lead the development of the company's flagship product, improving performance by 40% and implementing new features that increased user engagement.",
  },
  {
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client websites, focusing on responsive design, accessibility, and performance optimization.",
  },
  {
    company: "StartUp Labs",
    position: "UI/UX Developer",
    period: "2019 - 2021",
    description: "Collaborated with designers to implement pixel-perfect interfaces and improved user experience through iterative design and development.",
  },
];

// Skills categories
const skills = {
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"],
  backend: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"],
  design: ["Figma", "UI/UX", "Design Systems", "Wireframing", "Prototyping"],
  tools: ["Git", "GitHub", "VS Code", "Webpack", "Jest", "CI/CD"],
};

const About = () => {
  return (
    <Layout>
      {/* About Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <SectionTitle>About Me</SectionTitle>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Hi there! I'm John Doe, a passionate software developer with over 5 years of experience in building web applications. I specialize in frontend development with React and TypeScript, but I'm also comfortable working with backend technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              My journey in tech started when I built my first website at the age of 16. Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and best practices.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new coffee brewing methods.
            </p>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-secondary/20">
        <SectionTitle>Skills</SectionTitle>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.frontend.map((skill) => (
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
          <TabsContent value="design" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.design.map((skill) => (
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
        <SectionTitle>Experience</SectionTitle>
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
        <SectionTitle>Projects</SectionTitle>
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
