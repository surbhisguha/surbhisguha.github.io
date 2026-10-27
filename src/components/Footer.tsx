import React from 'react';
import { outsideLine } from '../content/site';

const Footer: React.FC = () => (
  <footer className="border-t border-rule">
    <div className="mx-auto max-w-page px-6 py-10 sm:px-10">
      <p className="mb-6 text-[0.75rem] italic text-muted">{outsideLine}</p>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="eyebrow">GTM · Growth · BizOps · AI</p>
        <p className="eyebrow">© {new Date().getFullYear()} Surbhi Guha</p>
      </div>
    </div>
  </footer>
);

export default Footer;
