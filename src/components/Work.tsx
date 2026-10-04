import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { work } from '../content/work';

const Work: React.FC = () => (
  <Section
    id="work"
    index="04"
    label="work"
    lead="Selected work, from the classroom to the company I built."
  >
    <ol className="mt-10 space-y-10 sm:space-y-14">
      {work.map((item, index) => (
        <li
          key={item.title}
          className={`group grid items-center gap-6 md:gap-10 ${item.image ? 'md:grid-cols-2' : ''}`}
          data-reveal
        >
          {/* An item with no image simply runs full width. */}
          {item.image && (
            <div
              className={`overflow-hidden border border-rule bg-surface ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <div className="aspect-video">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-editorial hover:scale-[1.03]"
                />
              </div>
            </div>
          )}

          <div>
            <p className="eyebrow mb-2">{String(index + 1).padStart(2, '0')}</p>
            <h3 className="text-[0.969431rem] leading-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-[1.090608rem]">
              {item.title}
            </h3>
            <p className="mt-2 max-w-measure text-muted">{item.description}</p>

            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {item.tags.map((tag) => (
                <li key={tag} className="eyebrow text-muted">
                  {tag}
                </li>
              ))}
            </ul>

            {item.link && (
              <div className="mt-4">
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent inline-flex items-center gap-1.5 text-[0.646287rem]"
                >
                  {item.link.label}
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Work;
