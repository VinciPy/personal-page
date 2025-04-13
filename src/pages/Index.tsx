
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

// Mock data for recent blog posts
const recentPosts = [
  {
    id: "building-a-design-system",
    title: "Building a Design System from Scratch",
    excerpt: "Learn how to create a comprehensive design system for your product or organization.",
    date: "Apr 10, 2025",
    readTime: "5 min read",
  },
  {
    id: "react-performance",
    title: "Advanced React Performance Optimization",
    excerpt: "Explore techniques to make your React applications lightning fast.",
    date: "Mar 25, 2025",
    readTime: "8 min read",
  },
  {
    id: "typescript-tips",
    title: "TypeScript Tips for Better Code Quality",
    excerpt: "Practical TypeScript tips that will improve your code quality immediately.",
    date: "Mar 12, 2025",
    readTime: "6 min read",
  },
];

// Collaborators data
const collaborators = [
  { name: "Alex Johnson", role: "Designer", avatar: "https://i.pravatar.cc/150?img=1" },
  { name: "Maria Garcia", role: "Developer", avatar: "https://i.pravatar.cc/150?img=5" },
  { name: "David Kim", role: "Product Manager", avatar: "https://i.pravatar.cc/150?img=3" },
  { name: "Sarah Chen", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=4" },
];

const Index = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-gradient">
            Hey, I'm John Doe ✨
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            I'm a software developer and designer focused on building beautiful, accessible, and user-centered digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/about">More about me</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-16 bg-secondary/10 backdrop-blur-sm border-y border-white/5">
        <SectionTitle>People I Work With</SectionTitle>
        <div className="flex flex-wrap gap-6 mb-8">
          {collaborators.map((person) => (
            <div key={person.name} className="flex items-center gap-3 bg-secondary/20 p-3 rounded-lg hover:bg-secondary/30 transition-colors">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{person.name}</div>
                <div className="text-sm text-muted-foreground">{person.role}</div>
              </div>
            </div>
          ))}
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="flex items-center text-muted-foreground hover:text-white mb-8">
              <Users className="mr-2 h-4 w-4" /> 
              {isOpen ? "Hide team details" : "Learn more about the team"}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="bg-secondary/10 p-4 rounded-lg animate-accordion-down">
            <p className="mb-4">
              I collaborate with a diverse team of talented individuals to bring creative ideas to life. Our combined expertise spans design, development, project management, and UX research.
            </p>
            <p>
              Together, we've shipped products used by thousands of people worldwide, from startups to enterprise companies.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      {/* Featured Work Section */}
      <Section className="py-16 bg-secondary/20">
        <SectionTitle>Recent Blog Posts</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link to="/blog" className="inline-flex items-center">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
