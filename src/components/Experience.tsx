import React from 'react';
import Section from './Section';
import { experience, education } from '../content/site';

const Experience: React.FC = () => (
  <Section
    id="experience"
    index="03"
    label="experience"
    lead="Founder, investor, consultant. Each role taught me a different side of how companies grow."
  >
    <ol className="mt-8 border-t border-rule">
      {experience.map((r) => (
        <li
          key={r.org}
          className="group grid gap-x-8 gap-y-1 border-b border-rule py-5 sm:grid-cols-[7.5rem_minmax(0,1fr)]"
          data-reveal
        >
          <span className="eyebrow pt-[0.35em] font-mono">{r.when}</span>
          <div>
            <h3 className="text-[0.888645rem] text-ink transition-colors duration-300 group-hover:text-accent">
              {r.org}
              <span className="text-muted"> · {r.title}</span>
            </h3>
            <p className="mt-1.5 max-w-measure text-[0.799780rem] text-muted">{r.result}</p>
          </div>
        </li>
      ))}
    </ol>

    <p className="eyebrow mt-12" data-reveal>Education</p>
    <ul className="mt-4 border-t border-rule">
      {education.map((e) => (
        <li
          key={e.org}
          className="grid gap-x-8 gap-y-1 border-b border-rule py-4 sm:grid-cols-[7.5rem_minmax(0,1fr)]"
          data-reveal
        >
          <span className="eyebrow pt-[0.35em] font-mono">{e.when}</span>
          <p className="text-[0.799780rem] text-muted">
            <span className="text-ink">{e.org}.</span> {e.title}
          </p>
        </li>
      ))}
    </ul>
  </Section>
);

export default Experience;
