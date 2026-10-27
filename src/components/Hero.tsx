import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { hero } from '../content/site';
import { EMAIL, LINKEDIN_URL, RESUME_PATH } from '../content/links';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as React.CSSProperties;

const Hero: React.FC = () => (
  <section id="hero" className="mx-auto max-w-page px-6 sm:px-10">
    <div className="flex min-h-[88vh] flex-col justify-center pb-20 pt-32 sm:pt-40">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem] lg:gap-20">
        <div>
          <div className="flex items-center gap-4" data-reveal>
            <img src="/surbhi.jpg" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover lg:hidden" />
            <p className="eyebrow">surbhi guha</p>
          </div>
          <h1 className="mt-5 max-w-[40rem] font-serif text-display" data-reveal style={delay(80)}>
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-measure text-[0.888645rem] leading-[1.55] text-muted" data-reveal style={delay(160)}>
            {hero.sub}
          </p>

          <dl className="mt-12 grid max-w-[40rem] grid-cols-3 gap-6 border-t border-rule pt-6" data-reveal style={delay(240)}>
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-title text-ink">{s.value}</dd>
                <dd className="mt-2 text-[0.69rem] leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap gap-3" data-reveal style={delay(320)}>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[0.72rem] text-paper transition-opacity duration-300 hover:opacity-85"
            >
              Email me
            </a>
            {[
              { label: 'LinkedIn', href: LINKEDIN_URL },
              { label: 'Résumé', href: RESUME_PATH },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-rule px-5 py-2.5 text-[0.72rem] text-ink transition-colors duration-300 hover:border-ink"
              >
                {l.label}
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <figure className="hidden lg:block lg:pt-10" data-reveal style={delay(200)}>
          <img
            src="/surbhi.jpg"
            alt="Portrait of Surbhi Guha"
            width={224}
            height={224}
            className="aspect-square w-full rounded-full object-cover"
          />
          <figcaption className="mt-5 text-center text-[0.66rem] italic text-muted">
            Boston and San Francisco
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default Hero;
