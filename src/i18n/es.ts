export const es = {
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
  },
  page: {
    title: 'Valhalla — UI Base (Muestra Técnica)',
    heading: 'Muestra Técnica UI Base',
    description: 'Comprobación técnica de tokens semánticos y componentes foundation: Button, Card, TextInput, FeedbackState y estados visuales (FASE 5.3).',
  },
  notFound: {
    title: 'Valhalla — Página no encontrada',
    heading: 'Página no encontrada',
    description: 'La página que buscas no existe o ya no está disponible.',
    backHome: 'Volver al inicio',
  },
  language: {
    selectorLabel: 'Selector de idioma',
    esLabel: 'Español',
    enLabel: 'English',
  },
  feedback: {
    loading: {
      title: 'Cargando contenido',
      description: 'Por favor, espera mientras se recupera la información.',
    },
    empty: {
      title: 'No hay elementos disponibles',
      description: 'No se ha encontrado ningún registro para mostrar en este momento.',
    },
    error: {
      title: 'Ha ocurrido un error',
      description: 'No se pudo completar la operación solicitada.',
    },
  },
  sections: {
    surfaces: 'Superficies y Bordes',
    cards: 'Cards & Contenedores',
    inputs: 'Campos de Texto (TextInput)',
    spacing: 'Escala de Spacing',
    controls: 'Controles, Estados y Badges',
    feedbackDemo: 'Estados de Feedback (FeedbackState)',
  },
  surfaces: {
    background: 'Background',
    surface: 'Surface',
    raised: 'Raised Surface',
  },
  cards: {
    surfaceTitle: 'Card Surface',
    surfaceDesc: 'Contenedor visual básico para agrupar contenido principal.',
    raisedTitle: 'Card Raised',
    raisedDesc: 'Nivel adicional de separación visual para bloques destacados.',
  },
  inputs: {
    normalLabel: 'Nombre de usuario',
    normalPlaceholder: 'Introduce tu nombre',
    withHelpLabel: 'Correo electrónico',
    withHelpPlaceholder: 'usuario@ejemplo.com',
    withHelpText: 'Utilizaremos este correo para comunicaciones sobre tu cuenta.',
    withErrorLabel: 'Contraseña',
    withErrorValue: '1234',
    withErrorMessage: 'La contraseña debe tener al menos 8 caracteres.',
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
    selected: 'Elemento con estado Selected',
  },
};

export type Translations = typeof es;