import type { Translations } from './es';

export const en: Translations = {
  nav: {
    label: 'Main navigation',
    home: 'Home',
  },
  page: {
    title: 'Valhalla — Strength & Progression Tracker',
    heading: 'UI Base Technical Sample',
    description: 'Technical verification of semantic tokens and foundation components: Button, Card, TextInput, FeedbackState, and visual states (PHASE 5.3).',
  },
  landing: {
    hero: {
      eyebrow: 'Strength & Progression Tracker',
      title: 'Forge your strength. Make your progress visible.',
      description: 'Valhalla is a self-hosted strength training tracker designed to turn every session into a clear story of progression.',
      cta: 'Discover Valhalla',
    },
    whatIs: {
      heading: 'Your training. Your progress. Your data.',
      description: 'Valhalla is built around a simple idea: train with clarity, understand your progression, and keep control of your information.',
      pillar1Title: 'Strength training',
      pillar1Desc: 'Strength training is the foundation Valhalla is being built around.',
      pillar2Title: 'Progression at the core',
      pillar2Desc: 'Every part of the product is designed to make progression understandable and useful.',
      pillar3Title: 'Self-hosted',
      pillar3Desc: 'Valhalla is designed to run on your own infrastructure.',
      pillar4Title: 'Your data under your control',
      pillar4Desc: 'The self-hosted model keeps control of the information in the hands of whoever runs Valhalla.',
    },
    building: {
      heading: "What we're building",
      badge: 'In active development',
      description: 'Valhalla is growing in stages. These capabilities are part of the product direction and do not yet represent fully available functionality.',
      block1Title: 'Routines and exercises',
      block1Desc: 'Organization of routines and the exercise catalog.',
      block2Title: 'Sessions and history',
      block2Desc: 'Workout logging and review of training evolution over time.',
      block3Title: 'Progression and metrics',
      block3Desc: 'Tools for understanding training progression and its metrics.',
    },
    closing: {
      message: 'Built with a focus on strength, progression, and control.',
      tagline: 'Valhalla — Strength, progression, and control of your data.',
    },
  },
  notFound: {
    title: 'Valhalla — Page not found',
    heading: 'Page not found',
    description: 'The page you are looking for does not exist or is no longer available.',
    backHome: 'Back to home',
  },
  language: {
    selectorLabel: 'Language selector',
    esLabel: 'Español',
    enLabel: 'English',
  },
  feedback: {
    loading: {
      title: 'Loading content',
      description: 'Please wait while information is being retrieved.',
    },
    empty: {
      title: 'No items available',
      description: 'No records found to display at this moment.',
    },
    error: {
      title: 'An error occurred',
      description: 'The requested operation could not be completed.',
    },
  },
  sections: {
    surfaces: 'Surfaces & Borders',
    cards: 'Cards & Containers',
    inputs: 'Text Fields (TextInput)',
    spacing: 'Spacing Scale',
    controls: 'Controls, States & Badges',
    feedbackDemo: 'Feedback States (FeedbackState)',
  },
  surfaces: {
    background: 'Background',
    surface: 'Surface',
    raised: 'Raised Surface',
  },
  cards: {
    surfaceTitle: 'Surface Card',
    surfaceDesc: 'Basic visual container for grouping main content.',
    raisedTitle: 'Raised Card',
    raisedDesc: 'Additional visual separation level for featured blocks.',
  },
  inputs: {
    normalLabel: 'Username',
    normalPlaceholder: 'Enter your name',
    withHelpLabel: 'Email address',
    withHelpPlaceholder: 'user@example.com',
    withHelpText: 'We will use this email for account communications.',
    withErrorLabel: 'Password',
    withErrorValue: '1234',
    withErrorMessage: 'Password must be at least 8 characters.',
  },
  actions: {
    primary: 'Primary',
    secondary: 'Secondary',
    disabled: 'Disabled',
  },
  states: {
    success: 'Success',
    warning: 'Warning',
    danger: 'Danger',
    selected: 'Element with Selected state',
  },
};