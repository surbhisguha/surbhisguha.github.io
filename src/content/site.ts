/* All copy for the home page lives here. Edit text, links and images in this
   file; the components only handle layout. */

export const hero = {
  headline: 'Business, tech and growth. In one person.',
  sub: 'I grew a consumer app to 130K users, raised $200K for it, and now ship AI products in an afternoon. I work on GTM, growth and bizops at AI companies.',
  stats: [
    { value: '130K', label: 'users grown at Sortizy' },
    { value: '$200K', label: 'raised from government, VCs and angels' },
    { value: '1st', label: 'place, Stanford voice AI hackathon' },
  ],
};

export interface Project {
  name: string;
  line: string;
  href?: string;
}

export const featuredBuild = {
  award: 'Main award · Best hack in best location · Stanford, Oct 2026',
  name: '1-800-MAKE-APP',
  line: 'Call a number, brainstorm your idea with a voice agent, and get a live web app link before you hang up.',
  detail: 'Built solo, by voice, in 3 hours. Vapi voice agent, Claude and Openbase.',
  image: '/img/stanford-hack.jpg',
  href: 'https://www.linkedin.com/feed/update/urn:li:activity:7515285628075380737/',
};

export const SUNDAI_URL = 'https://www.sundai.club/hacker/43edc61b-9231-41c1-900b-6f53b10ff009';

export const projects: Project[] = [
  { name: 'Hippo AI', line: 'Open source memory for AI agents that improves itself over time.', href: 'https://github.com/im062185/sundai_memory' },
  { name: 'Secret Agent', line: 'Private AI coworker that learns your company’s workflows to do real work.', href: SUNDAI_URL },
  { name: 'ClearHouse', line: 'A surety bond for agentic commerce: vets the merchant before an agent pays.', href: SUNDAI_URL },
  { name: 'Handsfree HCI', line: 'Control your laptop hands free, using its front camera as the interface.', href: SUNDAI_URL },
  { name: 'FindLocal', line: 'Curated local event data that any product or agent can plug into over MCP.', href: SUNDAI_URL },
  { name: 'Group Travel AI', line: 'Plans group trips by balancing everyone’s constraints and preferences.', href: SUNDAI_URL },
];

export const sortizy = {
  lead: 'I co-founded Sortizy, India’s first food social commerce app, and ran growth and partnerships from zero.',
  stats: [
    { value: '130K', label: 'users acquired' },
    { value: '$200K', label: 'raised at a $1.6M valuation' },
    { value: '150+', label: 'food brands on the marketplace' },
    { value: '500', label: 'creators in the community' },
  ],
  quote: {
    text: 'Exciting idea, and solid pitch.',
    who: 'Sriharsha Majety',
    role: 'CEO and Co-founder, Swiggy, after my Sortizy pitch',
  },
};

export interface Recognition {
  title: string;
  source: string;
  image: string;
  href?: string;
}

export const recognition: Recognition[] = [
  {
    title: 'Google Play Best of 2021, Everyday Essentials',
    source: 'YourStory',
    image: '/img/yourstory.jpg',
    href: 'https://yourstory.com/2021/12/app-friday-recipe-meal-planner-sortizy-google-play-best-of-2021',
  },
  { title: 'Featured in Google Play’s Diwali 2022 campaign', source: 'Google Play', image: '/img/google-play-diwali.jpg' },
  { title: 'Pitched on aha’s Shark Tank style show', source: 'aha', image: '/img/aha-show.jpg' },
  { title: 'Award on aha, covered on air', source: '10TV', image: '/img/sortizy-10tv-award.jpg' },
  { title: 'With my parents at my pitch', source: 'Sortizy', image: '/img/pitch-parents.jpg' },
];

export const press = [
  { title: 'Sortizy is among Google Play’s Best of 2021 apps', outlet: 'YourStory', href: 'https://yourstory.com/2021/12/app-friday-recipe-meal-planner-sortizy-google-play-best-of-2021' },
  { title: 'Hyderabad based Sortizy is one stop place for all things food', outlet: 'Telangana Today', href: 'https://telanganatoday.com/hyderabad-based-sortizy-is-one-stop-place-for-all-things-food' },
  { title: 'SucSEED invests in Sortizy, India’s first food video commerce platform', outlet: 'IndianWeb2', href: 'https://www.indianweb2.com/2022/01/sucseed-invests-in-sortizy-indias-1st.html' },
  { title: 'Sortizy raises $100,000 led by Campus Fund', outlet: 'The Startup Lab', href: 'https://thestartuplab.in/sortizy-raises-100000-in-funding-led-by-campus-fund/' },
];

export interface Role {
  when: string;
  org: string;
  title: string;
  result: string;
}

export const experience: Role[] = [
  {
    when: '2025',
    org: 'Yemaya Bio (Atlas Venture portfolio)',
    title: 'Founder’s Office',
    result: 'Owned launch operations for the company’s move out of stealth: agency and vendor selection, website, digital assets.',
  },
  {
    when: '2025',
    org: 'UVA Licensing and Ventures Group',
    title: 'Investments and Strategy, Seed Fund',
    result: 'Ran diligence on 8 startups and got 2 investments of $250K+ approved. Rebuilt GTM for a portfolio company, cutting time to market by 24 months.',
  },
  {
    when: '2024',
    org: 'W Health Ventures / 2070 Health',
    title: 'GTM Analyst',
    result: 'Sized a $20B North American market and shaped the product roadmap for a new company that launched in 2025.',
  },
  {
    when: '2020 to 2023',
    org: 'Sortizy',
    title: 'Co-founder, Growth and Partnerships',
    result: 'Took the app from zero to 130K users, signed 150+ brands, built a 500 creator community and raised $200K.',
  },
  {
    when: '2018 to 2020',
    org: 'Orbees',
    title: 'Associate Consultant',
    result: 'Built ROI cases and a sales pipeline that drove 50% growth ($200M+) in Japan for a top 3 medtech client.',
  },
];

export const education = [
  { when: '2026', org: 'UVA Darden School of Business', title: 'MBA, full tuition Batten Scholar. AI, Data Analytics and Decision Sciences; Marketing.' },
  { when: '2018', org: 'NIT Warangal', title: 'B.Tech, Biotechnology Engineering' },
];

export interface Writing {
  title: string;
  outlet: string;
  href: string;
}

export const writing: Writing[] = [
  {
    title: 'From “The City of Firsts”: A Southasian hope at San Francisco Tech Week',
    outlet: 'Global Southasia',
    href: 'https://sapannews.com/2026/10/14/from-the-city-of-firsts-a-southasian-hope-at-san-francisco-tech-week/',
  },
  {
    title: 'From “The City of Firsts”: A Southasian hope at San Francisco Tech Week (republished)',
    outlet: 'India Currents',
    href: 'https://indiacurrents.com/from-the-city-of-firsts-a-southasian-hope-at-san-francisco-tech-week/',
  },
  {
    title: 'Applications of AI in Healthcare, co-authored, now taught in Darden’s MBA curriculum',
    outlet: 'Darden Business Publishing',
    href: 'https://store.darden.virginia.edu/applications-of-ai-in-healthcare',
  },
];

export const writingNext = 'Writing next: women in frontier AI, interviewing ML researchers and GTM leaders across AI companies.';

export interface Moment {
  caption: string;
  image: string;
}

export const moments: Moment[] = [
  { caption: 'With Stephen Wolfram, Harvard', image: '/img/wolfram-harvard.jpg' },
  { caption: 'Google, SF Tech Week', image: '/img/google-sf-tech-week.jpg' },
  { caption: 'Cloudflare Connect', image: '/img/cloudflare-connect.jpg' },
  { caption: 'Indian Consulate, San Francisco', image: '/img/indian-consulate.jpg' },
  { caption: 'Vercel Ship', image: '/img/vercel-ship-ora.jpg' },
];

export const outsideLine = 'Outside work: 25 Indian states, 16 U.S. states and Brazil so far. And I still cook a lot.';
