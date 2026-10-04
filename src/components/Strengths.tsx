import React from 'react';
import Section from './Section';

interface Strength {
  name: string;
  summary: string;
  evidence: string[];
}

const strengths: Strength[] = [
  {
    name: 'First principles thinker',
    summary:
      'The work I enjoy most is creating structure where none exists, starting from the problem, not from a template.',
    evidence: [
      'Founded Sortizy after my prediabetes diagnosis and grew it to more than 130,000 users, inventing the operating rhythm as we scaled.',
      'At 2070 Health, India’s first healthcare venture studio, helped define operating playbooks for new companies when there was no existing blueprint to follow.',
    ],
  },
  {
    name: 'Comfort in the fog',
    summary:
      'Most of my career has been in environments where priorities shifted quickly and there wasn’t an obvious answer — only experiments and judgment.',
    evidence: [
      'Built Sortizy from the ground up, bringing together more than 150 healthy consumer brands and over 5,000 products.',
      'Worked closely with founders through the University of Virginia Seed Fund, W Health Ventures and Yemaya Bio, evaluating startups and supporting company building when the path forward was still unclear.',
    ],
  },
  {
    name: 'Execution at all levels',
    summary:
      'I enjoy moving between strategy and execution. Consulting, startups and venture investing taught me to think broadly while staying close to the work.',
    evidence: [
      'As a healthcare strategy consultant, learned how large organizations actually make commercial decisions.',
      'As a founder, owned partnerships, GTM, fundraising, product and operations — often in the same week.',
      'As an investor, sat with founders on the other side of the table; as a patient and caretaker across the Indian and U.S. systems, saw healthcare from the inside.',
    ],
  },
  {
    name: 'Communication',
    summary:
      'Good ideas only create impact when they’re communicated clearly — to investors, partners, teams, and yourself.',
    evidence: [
      'Presented Sortizy on Shark Tank South India.',
      'Led fundraising conversations with the Government of India, the Telangana State Government, institutional venture firms and angel investors.',
      'Earned a Distinction Pass in Leadership Communication during my MBA at UVA Darden.',
    ],
  },
];

const Strengths: React.FC = () => (
  <Section
    id="strengths"
    index="02"
    label="strengths"
    lead="What I bring: structure where none exists, judgment when the answer isn’t obvious, and the range to move between strategy and execution."
  >
    <ol className="mt-10 border-t border-rule">
      {strengths.map((strength, index) => (
        <li key={strength.name} className="group border-b border-rule py-6" data-reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="text-[0.888645rem] text-ink transition-colors duration-300 group-hover:text-accent">
              {strength.name}
            </h3>
            <span className="eyebrow">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <p className="mt-1.5 max-w-measure text-[0.799780rem] text-ink/80">{strength.summary}</p>
          <ul className="mt-4 max-w-measure space-y-2">
            {strength.evidence.map((item) => (
              <li key={item} className="relative pl-4 text-muted">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[0.8em] h-px w-[5px] bg-faint"
                />
                {item}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
);

export default Strengths;
