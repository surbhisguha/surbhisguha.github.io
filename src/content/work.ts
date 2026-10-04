export interface WorkItem {
  title: string;
  description: string;
  /** Rendered as small tracked-out labels under the description. */
  tags: string[];
  link?: { label: string; href: string };
  /** Still image served from /public. Items without one run full width. */
  image?: string;
}

/** Featured work, in the order it appears on the home page. */
export const work: WorkItem[] = [
  {
    title: 'Applications of AI in Healthcare',
    description:
      'Co-authored research published by University of Virginia Darden Business Publishing, now part of the Healthcare Marketing curriculum at UVA Darden.',
    tags: ['Research', 'AI', 'Healthcare'],
    link: {
      label: 'Open publication',
      href: 'https://store.darden.virginia.edu/applications-of-ai-in-healthcare',
    },
  },
  {
    title: 'Sortizy',
    description:
      'The consumer health startup I co-founded. Recognized by Google Play, featured by leading media publications, and pitched on Shark Tank South India.',
    tags: ['Founder', 'Consumer health', 'GTM'],
    link: {
      label: 'Media coverage',
      href: 'https://blog.google/intl/en-in/products/platforms/google-plays-best-of-2021-in-india/',
    },
    image: '/shark-tank.jpg',
  },
];
