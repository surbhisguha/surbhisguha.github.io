import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { EMAIL, LINKEDIN_URL, RESUME_PATH } from '../content/links';

interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const contactLinks: ContactLink[] = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'LinkedIn', value: 'in/surbhi-guha', href: LINKEDIN_URL, external: true },
  { label: 'Résumé', value: 'PDF', href: RESUME_PATH, external: true },
];

const Contact: React.FC = () => (
  <Section
    id="contact"
    index="06"
    label="contact"
    lead="I built this site to share a little more than what fits on a résumé. If anything here resonated, I’d love to spend twenty minutes learning about what you’re building and how I might contribute."
  >
    <ul className="mt-12 border-t border-rule">
      {contactLinks.map((link) => (
        <li key={link.label} data-reveal>
          <a
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-5"
          >
            <span className="eyebrow">{link.label}</span>
            <span className="flex items-center gap-2 text-[0.767466rem] text-ink transition-colors duration-300 group-hover:text-accent">
              {link.value}
              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Contact;
