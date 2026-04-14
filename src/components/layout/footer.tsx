import { content } from '@/app/lib/content';
import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="text-primary-foreground/80 text-sm">
          &copy; {new Date().getFullYear()} {content.name}. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <a
            href={`mailto:${content.contact.email}`}
            className="text-primary-foreground/80 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={content.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
