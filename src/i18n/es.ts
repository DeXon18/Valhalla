export const es = {
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
  },
  page: {
    title: 'Valhalla — UI Base (Muestra Técnica)',
    heading: 'Muestra Técnica UI Base',
    description: 'Comprobación técnica de tokens semánticos: superficies, bordes, tipografía, espaciado y estados visuales (FASE 4.2 / 4.3).',
  },
  notFound: {
    title: 'Valhalla — Página no encontrada',
    heading: 'Página no encontrada',
    description: 'La página que buscas no existe o ya no está disponible.',
    backHome: 'Volver al inicio',
  },
  language: {
    selectorLabel: 'Selector de idioma',
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
    spacing: 'Escala de Spacing',
    controls: 'Controles, Estados y Badges',
  },
  surfaces: {
    background: 'Background',
    surface: 'Surface',
    raised: 'Raised Surface',
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