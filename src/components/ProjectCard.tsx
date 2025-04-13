
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <Card className="border-none bg-secondary/50 hover:bg-secondary transition-colors duration-300 h-full flex flex-col">
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-sm font-medium text-white hover:opacity-80 transition-opacity"
        >
          View project <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
