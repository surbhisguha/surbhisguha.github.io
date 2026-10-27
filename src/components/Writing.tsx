import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { writing, writingNext, moments } from '../content/site';

const Writing: React.FC = () => (
  <Section id="writing" index="04" label="writing" lead="I write about AI, startups and the Southasian builders in Silicon Valley.">
    <ul className="mt-8 border-t border-rule">
      {writing.map((w) => (
        <li key={w.href} data-reveal>
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 border-b border-rule sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 py-5"
          >
            <span className="text-[0.888645rem] text-ink transition-colors group-hover:text-accent">{w.title}</span>
            <span className="eyebrow flex shrink-0 items-center gap-1">
              {w.outlet} <ArrowUpRight size={11} strokeWidth={1.5} />
            </span>
          </a>
        </li>
      ))}
    </ul>
    <p className="mt-5 text-[0.75rem] italic text-muted" data-reveal>
      {writingNext}
    </p>

    <p className="eyebrow mt-16" data-reveal>In the room</p>
    <ul className="-mx-6 mt-5 flex snap-x gap-4 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0">
      {moments.map((m) => (
        <li key={m.caption} className="w-44 shrink-0 snap-start sm:w-auto" data-reveal>
          <div className="aspect-[3/4] overflow-hidden border border-rule bg-surface">
            <img src={m.image} alt={m.caption} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <p className="mt-2 text-[0.68rem] leading-snug text-muted">{m.caption}</p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Writing;
