import React from 'react';
import Section from './Section';
import { outside } from '../content/outside';

const Outside: React.FC = () => (
  <Section id="outside" index="05" label="outside" lead="Pursuits that live alongside the work.">
    <ol className="mt-10 space-y-10 sm:space-y-14">
      {outside.map((item, index) => (
        <li
          key={item.name}
          className={`group grid items-center gap-6 md:gap-10 ${
            index % 2 === 1 ? 'md:grid-cols-[2fr_3fr]' : 'md:grid-cols-[3fr_2fr]'
          }`}
          data-reveal
        >
          <div
            className={`overflow-hidden border border-rule bg-surface ${
              index % 2 === 1 ? 'md:order-2' : ''
            }`}
          >
            <div className="aspect-[4/3]">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                style={{ objectPosition: item.focus }}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-editorial hover:scale-[1.03]"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-2">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="text-[0.969431rem] leading-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-[1.090608rem]">
              {item.name}
            </h3>
            <p className="mt-2 max-w-measure text-muted">{item.description}</p>

            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              <li className="eyebrow text-muted">{item.category}</li>
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Outside;
