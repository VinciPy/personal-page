
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Mock blog post data
const blogPostsData = {
  "building-a-design-system": {
    title: "Building a Design System from Scratch",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    tags: ["Design", "UI/UX", "Development"],
    content: `
      <p>A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. Design systems help teams build better products faster by making design reusable—reusability makes scale possible.</p>
      
      <h2>Why Build a Design System?</h2>
      <p>Design systems are essential for maintaining consistency across products and reducing design debt. They help teams to:</p>
      <ul>
        <li>Maintain visual consistency across products</li>
        <li>Speed up the design and development process</li>
        <li>Facilitate collaboration between designers and developers</li>
        <li>Reduce technical debt and design inconsistencies</li>
      </ul>
      
      <h2>Key Components of a Design System</h2>
      <p>A comprehensive design system typically includes:</p>
      
      <h3>1. Design Tokens</h3>
      <p>Design tokens are the visual design atoms of the design system—specifically, they are named entities that store visual design attributes. These tokens are used in place of hard-coded values to ensure flexibility and consistency across platforms.</p>
      
      <h3>2. Component Library</h3>
      <p>A collection of reusable UI components that can be composed to create user interfaces. Each component should be well-documented with usage guidelines and code examples.</p>
      
      <h3>3. Style Guide</h3>
      <p>Documentation that outlines how products should look and feel, covering aspects like typography, colors, spacing, and more.</p>
      
      <h3>4. Design Principles</h3>
      <p>The guiding values that inform design decisions and ensure consistency in the user experience.</p>
      
      <h2>Steps to Build a Design System</h2>
      <ol>
        <li>Conduct an audit of existing design patterns</li>
        <li>Define design principles and brand values</li>
        <li>Create design tokens for colors, typography, spacing, etc.</li>
        <li>Design and develop core components</li>
        <li>Document usage guidelines for each component</li>
        <li>Establish governance and maintenance processes</li>
      </ol>
      
      <h2>Tools for Building Design Systems</h2>
      <p>There are several tools that can help in creating and maintaining design systems:</p>
      <ul>
        <li>Figma: For design files and component libraries</li>
        <li>Storybook: For documenting and testing components</li>
        <li>Zeroheight: For comprehensive documentation</li>
        <li>GitHub: For version control and collaboration</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Building a design system is a significant investment but pays dividends in the long run through increased consistency, improved collaboration, and faster development cycles. By following a structured approach and involving both designers and developers in the process, you can create a robust design system that scales with your organization's needs.</p>
    `,
  },
  "react-performance": {
    title: "Advanced React Performance Optimization",
    date: "Mar 25, 2025",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript"],
    content: `
      <p>Performance optimization is a critical aspect of building React applications that provide a smooth user experience. This article explores advanced techniques to optimize React applications for better performance.</p>
      
      <h2>Understanding React's Rendering Process</h2>
      <p>Before diving into optimization techniques, it's essential to understand how React renders components:</p>
      <ol>
        <li>State or props change triggers a re-render</li>
        <li>React creates a virtual DOM representation</li>
        <li>React compares the new virtual DOM with the previous one (diffing)</li>
        <li>Only the necessary changes are applied to the real DOM</li>
      </ol>
      
      <h2>Key Performance Optimization Techniques</h2>
      
      <h3>1. Memoization with React.memo</h3>
      <p>React.memo is a higher-order component that memoizes the rendered output of the wrapped component and skips unnecessary re-renders:</p>
      
      <pre><code>
      const MyComponent = React.memo(function MyComponent(props) {
        /* render using props */
      });
      </code></pre>
      
      <h3>2. Optimizing State Updates with useCallback and useMemo</h3>
      <p>useCallback memoizes callback functions, while useMemo memoizes computed values:</p>
      
      <pre><code>
      // Memoized callback
      const memoizedCallback = useCallback(() => {
        doSomething(a, b);
      }, [a, b]);
      
      // Memoized value
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
      </code></pre>
      
      <h3>3. Code Splitting with React.lazy and Suspense</h3>
      <p>Load components only when they are needed:</p>
      
      <pre><code>
      const LazyComponent = React.lazy(() => import('./LazyComponent'));
      
      function MyComponent() {
        return (
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </React.Suspense>
        );
      }
      </code></pre>
      
      <h3>4. Virtualization for Long Lists</h3>
      <p>Render only the visible items in long lists using libraries like react-window or react-virtualized.</p>
      
      <h3>5. Optimizing Context API Usage</h3>
      <p>Split contexts to avoid unnecessary re-renders and use memoization with context consumers.</p>
      
      <h2>Measuring Performance</h2>
      <p>Use these tools to identify performance issues:</p>
      <ul>
        <li>React DevTools Profiler</li>
        <li>Chrome DevTools Performance tab</li>
        <li>Lighthouse</li>
        <li>web-vitals library</li>
      </ul>
      
      <h2>Real-world Optimization Examples</h2>
      
      <h3>Example 1: Optimizing a Form Component</h3>
      <p>Instead of re-rendering the entire form on every input change, optimize by:</p>
      <ul>
        <li>Using controlled components efficiently</li>
        <li>Implementing debounce for real-time validation</li>
        <li>Memoizing form fields</li>
      </ul>
      
      <h3>Example 2: Optimizing Data Fetching</h3>
      <p>Improve data fetching performance by:</p>
      <ul>
        <li>Implementing caching strategies</li>
        <li>Using SWR or React Query for data fetching</li>
        <li>Adding pagination or infinite scrolling</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Optimizing React applications is an ongoing process that requires a good understanding of how React works and where bottlenecks might occur. By applying these advanced techniques strategically, you can significantly improve your application's performance without overcomplicating your code.</p>
    `,
  },
  // Add more blog posts as needed
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPostsData[id as keyof typeof blogPostsData] : null;

  if (!post) {
    return (
      <Layout>
        <Section>
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-white hover:underline flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section>
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="text-muted-foreground hover:text-white transition-colors flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-muted-foreground mb-4">
            <div className="flex items-center mr-4">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div 
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPost;
