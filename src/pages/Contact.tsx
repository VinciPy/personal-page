import React from 'react';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const SocialLink = ({ href, icon: Icon, label, description }: { 
  href: string; 
  icon: React.ElementType; 
  label: string;
  description: string;
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
  >
    <div className="mr-4 bg-secondary p-3 rounded-full">
      <Icon size={20} />
    </div>
    <div>
      <h3 className="font-medium">{label}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </a>
);

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { t } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast.success(t('contact.form.success'));
    }, 1500);
  };

  return (
    <Layout>
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <SectionTitle>{t('contact.title')}</SectionTitle>
          <p className="text-muted-foreground text-lg">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none bg-secondary/20">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t('contact.form.name')}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('contact.form.email')}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('contact.form.message')}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">{t('contact.connect.title')}</h3>
            <SocialLink 
              href="mailto:hello@johndoe.com"
              icon={Mail}
              label={t('contact.connect.email')}
              description="vinicius.santana.anjos@gmail.com"
            />
            <SocialLink 
              href="https://github.com/vincipy"
              icon={Github}
              label={t('contact.connect.github')}
              description="github.com/vincipy"
            />
            <SocialLink 
              href="https://twitter.com/johndoe"
              icon={Twitter}
              label={t('contact.connect.twitter')}
              description="twitter.com/vincipy"
            />
            <SocialLink 
              href="https://www.linkedin.com/in/vinicius-santana-anjos/"
              icon={Linkedin}
              label={t('contact.connect.linkedin')}
              description="linkedin.com/in/vinicius-santana-anjos/"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
