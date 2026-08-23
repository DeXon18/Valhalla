import type { Translations } from './es';

export const en: Translations = {
  nav: {
    label: 'Main navigation',
    home: 'Home',
  },
  page: {
    title: 'Valhalla — UI Base (Technical Sample)',
    heading: 'UI Base Technical Sample',
    description: 'Technical verification of semantic tokens and foundation components: Button, Card, TextInput, FeedbackState, and visual states (PHASE 5.3).',
  },
  notFound: {
    title: 'Valhalla — Page not found',
    heading: 'Page not found',
    description: 'The page you are looking for does not exist or is no longer available.',
    backHome: 'Back to home',
  },
  language: {
    selectorLabel: 'Language selector',
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