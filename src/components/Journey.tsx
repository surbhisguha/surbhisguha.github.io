import React from 'react';
import Section from './Section';
import { journey } from '../content/journey';

const Journey: React.FC = () => (
  <Section
    id="journey"
    index="03"
    label="journey"
    lead="A path that kept pointing back to healthcare."
  >
    <ol className="mt-8 border-t border-rule">
      {journey.map((milestone) => (
        <li
          key={milestone.title}
          className="group grid gap-x-8 gap-y-1 border-b border-rule py-5 sm:grid-cols-[7.5rem_minmax(0,1fr)]"
          data-reveal
        >
          <span className="eyebrow pt-[0.35em] font-mono">{milestone.years}</span>
          <div>
            <h3 className="text-[0.888645rem] text-ink transition-colors duration-300 group-hover:text-accent">
              {milestone.title}
            </h3>
            <p className="mt-1.5 max-w-measure text-[0.799780rem] text-muted">
              {milestone.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Journey;
