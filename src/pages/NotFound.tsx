
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import Section from "@/components/Section";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <Section className="py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
};

export default NotFound;
