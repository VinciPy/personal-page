
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from '@/contexts/ThemeContext';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isMobile?: boolean;
}

const NavItem = ({ to, children, isMobile = false }: NavItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-3 py-2 text-sm font-medium hover:text-white transition-colors",
        "text-muted-foreground link-hover",
        isMobile && "text-base py-3"
      )}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 w-full">
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-white transition-colors hover:text-white/90 flex items-center">
            John Doe <span className="ml-2">👨‍💻</span>
          </Link>

          {!isMobile ? (
            <div className="flex items-center space-x-1">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/blog">Blog</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <Toggle 
                aria-label="Toggle theme"
                className="ml-2" 
                pressed={theme === 'light'} 
                onPressedChange={toggleTheme}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </Toggle>
            </div>
          ) : (
            <div className="flex items-center">
              <Toggle 
                aria-label="Toggle theme"
                className="mr-2" 
                pressed={theme === 'light'} 
                onPressedChange={toggleTheme}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </Toggle>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          )}
        </nav>

        {isMobile && mobileMenuOpen && (
          <div className="mt-4 pb-4 border-b border-white/10 animate-fade-in">
            <div className="flex flex-col">
              <NavItem to="/" isMobile>Home</NavItem>
              <NavItem to="/blog" isMobile>Blog</NavItem>
              <NavItem to="/about" isMobile>About</NavItem>
              <NavItem to="/contact" isMobile>Contact</NavItem>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
