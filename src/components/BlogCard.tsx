
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ id, title, excerpt, date, readTime }: BlogCardProps) => {
  return (
    <Card className="border-none bg-secondary/50 hover:bg-secondary transition-colors duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col space-y-2 mb-4">
          <div className="text-sm text-muted-foreground">
            {date} · {readTime}
          </div>
          <h3 className="text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition-opacity"
        >
          Read more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
