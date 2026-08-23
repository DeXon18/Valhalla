export const es = {
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
  },
  page: {
    title: 'Valhalla — Strength & Progression Tracker',
    heading: 'Muestra Técnica UI Base',
    description: 'Comprobación técnica de tokens semánticos y componentes foundation: Button, Card, TextInput, FeedbackState y estados visuales (FASE 5.3).',
  },
  landing: {
    hero: {
      eyebrow: 'Strength & Progression Tracker',
      title: 'Forja tu fuerza. Haz visible tu progreso.',
      description: 'Valhalla es un tracker de entrenamiento de fuerza self-hosted, diseñado para convertir cada sesión en una historia clara de progreso.',
      cta: 'Descubrir Valhalla',
    },
    whatIs: {
      heading: 'Tu entrenamiento. Tu progreso. Tus datos.',
      description: 'Valhalla está diseñado alrededor de una idea sencilla: entrenar con claridad, entender tu evolución y mantener el control de tu información.',
      pillar1Title: 'Entrenamiento de fuerza',
      pillar1Desc: 'El entrenamiento de fuerza es el núcleo sobre el que se construye Valhalla.',
      pillar2Title: 'Progreso como eje',
      pillar2Desc: 'Cada parte del producto se plantea para hacer que la evolución sea comprensible y útil.',
      pillar3Title: 'Self-hosted',
      pillar3Desc: 'Valhalla está diseñado para ejecutarse en tu propia infraestructura.',
      pillar4Title: 'Tus datos bajo tu control',
      pillar4Desc: 'El modelo self-hosted mantiene el control de la información en manos de quien despliega Valhalla.',
    },
    building: {
      heading: 'Qué estamos construyendo',
      badge: 'En desarrollo activo',
      description: 'Valhalla está creciendo por etapas. Estas capacidades forman parte de la dirección del producto y todavía no representan funcionalidades disponibles en su totalidad.',
      block1Title: 'Rutinas y ejercicios',
      block1Desc: 'Organización de rutinas y del catálogo de ejercicios.',
      block2Title: 'Sesiones e historial',
      block2Desc: 'Registro de entrenamientos y consulta de su evolución en el tiempo.',
      block3Title: 'Progresión y métricas',
      block3Desc: 'Herramientas para comprender la evolución del entrenamiento y sus métricas.',
    },
    closing: {
      message: 'Construido con foco en la fuerza, el progreso y el control.',
      tagline: 'Valhalla — Fuerza, progreso y control de tus datos.',
    },
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