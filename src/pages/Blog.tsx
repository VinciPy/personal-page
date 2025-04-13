import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Mock data for blog posts
const blogPosts = [
  {
    id: "building-a-design-system",
    title: "Building a Design System from Scratch",
    excerpt: "Learn how to create a comprehensive design system for your product or organization.",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    tags: ["Design", "UI/UX", "Development"],
  },
  {
    id: "react-performance",
    title: "Advanced React Performance Optimization",
    excerpt: "Explore techniques to make your React applications lightning fast.",
    date: "Mar 25, 2025",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: "typescript-tips",
    title: "TypeScript Tips for Better Code Quality",
    excerpt: "Practical TypeScript tips that will improve your code quality immediately.",
    date: "Mar 12, 2025",
    readTime: "6 min read",
    tags: ["TypeScript", "JavaScript", "Development"],
  },
  {
    id: "css-grid-layout",
    title: "Mastering CSS Grid Layout",
    excerpt: "A comprehensive guide to using CSS Grid for modern web layouts.",
    date: "Feb 28, 2025",
    readTime: "7 min read",
    tags: ["CSS", "Layout", "Web Design"],
  },
  {
    id: "serverless-architecture",
    title: "Introduction to Serverless Architecture",
    excerpt: "Learn the basics of serverless architecture and how it can benefit your projects.",
    date: "Feb 15, 2025",
    readTime: "9 min read",
    tags: ["Serverless", "AWS", "Backend"],
  },
  {
    id: "accessible-web",
    title: "Building Accessible Web Applications",
    excerpt: "Best practices for creating web applications that are accessible to everyone.",
    date: "Jan 30, 2025",
    readTime: "6 min read",
    tags: ["Accessibility", "Web", "UI/UX"],
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { t } = useLanguage();
  
  const filteredPosts = blogPosts.filter(post => {
    const searchContent = `${post.title} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
    return searchContent.includes(searchQuery.toLowerCase());
  });

  return (
    <Layout>
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionTitle>Blog</SectionTitle>
          <p className="text-muted-foreground text-lg mb-8">
            {t('blog.description')}
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your search criteria.</p>
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Blog;
