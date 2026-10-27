import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { sortizy, recognition, press } from '../content/site';

const Grow: React.FC = () => (
  <Section id="grow" index="02" label="grow" lead={sortizy.lead}>
    <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-rule pt-6 sm:grid-cols-4" data-reveal>
      {sortizy.stats.map((s) => (
        <div key={s.label}>
          <dt className="sr-only">{s.label}</dt>
          <dd className="font-serif text-title text-ink">{s.value}</dd>
          <dd className="mt-2 text-[0.69rem] leading-snug text-muted">{s.label}</dd>
        </div>
      ))}
    </dl>

    <figure className="mt-14 border-l-2 border-accent pl-6" data-reveal>
      <blockquote className="font-serif text-title text-ink">“{sortizy.quote.text}”</blockquote>
      <figcaption className="mt-3 text-[0.75rem] text-muted">
        <span className="text-ink">{sortizy.quote.who}</span>, {sortizy.quote.role}
      </figcaption>
    </figure>

    <p className="eyebrow mt-16" data-reveal>Recognition</p>
    <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
      {recognition.map((r) => {
        const body = (
          <>
            <div className="aspect-[4/3] overflow-hidden border border-rule bg-surface">
              <img
                src={r.image}
                alt={r.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <p className="eyebrow mt-3">{r.source}</p>
            <p className="mt-1 text-[0.75rem] leading-snug text-ink">{r.title}</p>
          </>
        );
        return (
          <li key={r.title} data-reveal>
            {r.href ? (
              <a href={r.href} target="_blank" rel="noopener noreferrer" className="group block">
                {body}
              </a>
            ) : (
              <div className="group">{body}</div>
            )}
          </li>
        );
      })}
    </ul>

    <p className="eyebrow mt-14" data-reveal>Press</p>
    <ul className="mt-4 border-t border-rule">
      {press.map((p) => (
        <li key={p.href} data-reveal>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1.5 border-b border-rule sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 py-4"
          >
            <span className="text-[0.799780rem] text-ink transition-colors group-hover:text-accent">{p.title}</span>
            <span className="eyebrow flex shrink-0 items-center gap-1">
              {p.outlet} <ArrowUpRight size={11} strokeWidth={1.5} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Grow;
