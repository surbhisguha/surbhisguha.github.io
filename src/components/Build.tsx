import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { featuredBuild, projects, SUNDAI_URL } from '../content/site';

const Build: React.FC = () => (
  <Section id="build" index="01" label="build" lead="I learn AI by shipping it. Most of these were built in a single day, with a team or solo.">
    <a
      href={featuredBuild.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-10 grid items-center gap-6 border border-rule bg-surface p-4 sm:p-6 md:grid-cols-2 md:gap-10"
      data-reveal
    >
      <div className="overflow-hidden">
        <img
          src={featuredBuild.image}
          alt="Team on stage receiving the main award at the Stanford hackathon"
          loading="lazy"
          className="aspect-video w-full object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
        />
      </div>
      <div>
        <p className="eyebrow text-accent">{featuredBuild.award}</p>
        <h3 className="mt-3 font-serif text-title text-ink">{featuredBuild.name}</h3>
        <p className="mt-3 text-ink">{featuredBuild.line}</p>
        <p className="mt-2 text-muted">{featuredBuild.detail}</p>
        <span className="link-accent mt-4 inline-flex items-center gap-1.5 text-[0.646287rem]">
          See the demo post <ArrowUpRight size={13} strokeWidth={1.5} />
        </span>
      </div>
    </a>

    <ul className="mt-10 grid border-t border-rule sm:grid-cols-2">
      {projects.map((p) => (
        <li key={p.name} className="border-b border-rule sm:odd:border-r sm:odd:pr-6 sm:even:pl-6" data-reveal>
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block py-5">
            <h3 className="flex items-center gap-1.5 text-[0.888645rem] text-ink transition-colors duration-300 group-hover:text-accent">
              {p.name}
              <ArrowUpRight size={12} strokeWidth={1.5} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </h3>
            <p className="mt-1.5 text-[0.799780rem] text-muted">{p.line}</p>
          </a>
        </li>
      ))}
    </ul>
    <p className="mt-6 text-[0.75rem] text-muted" data-reveal>
      Built with{' '}
      <a href={SUNDAI_URL} target="_blank" rel="noopener noreferrer" className="link-quiet">
        Sundai Club
      </a>{' '}
      (Harvard x MIT), the weekly AI build community.
    </p>
  </Section>
);

export default Build;
