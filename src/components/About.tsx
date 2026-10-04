import React from 'react';
import Section from './Section';

const About: React.FC = () => (
  <Section
    id="about"
    index="01"
    label="story"
    lead="I was diagnosed with prediabetes in my early twenties, and around the same time became one of the primary caretakers for my mother during her fight against colon cancer. Those experiences shaped how I think about healthcare — not as an industry, but as something deeply personal."
  >
    <p className="mt-8 max-w-measure text-[0.763427rem] text-muted" data-reveal>
      The diagnosis inspired me to start Sortizy, a platform that helps people make healthier food
      choices. Since then I have tried to build, learn and work in ways that move healthcare
      forward — studying biotechnology, consulting for healthcare companies, building a health
      startup, helping launch new healthcare ventures, researching AI in healthcare, and investing
      in early-stage startups.
    </p>

    <blockquote
      className="mt-12 max-w-measure border-l border-ink/30 pl-6 text-[0.767466rem] italic text-ink"
      data-reveal
    >
      I want to be part of a team building technology that makes a meaningful difference in
      people’s lives.
    </blockquote>
  </Section>
);

export default About;
