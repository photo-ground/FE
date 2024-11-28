const BASE_SCREEN_WIDTH = 390;
const BASE_SCREEN_HEIGHT = 844;

function convertToViewportWidth(px: number) {
  return `${(px / BASE_SCREEN_WIDTH) * 100}dvw`;
}

function convertToViewportHeight(px: number) {
  return `${(px / BASE_SCREEN_HEIGHT) * 100}dvh`;
}

const theme = {
  colors: {
    primary: {
      100: '#FF4000',
      80: '#FF612B',
      70: '#FF855C',
      60: '#FFA67D',
    },

    secondary: {
      surface: '#007C29',
      alpha: '#007C2947',
    },

    black: '#0E0E0E',
    white: '#F5F5F5',

    gray: {
      900: '#212121',
      800: '#262626',
      700: '#333333',
      600: '#404040',
      500: '#595959',
      400: '#737373',
      300: '#8C8C8C',
      200: '#A6A6A6',
      100: '#BFBFBF',
    },

    system: {
      warning: '#ED4245',
    },

    background: {
      // [todo] 디자인 시스템에 없는데 사용되고 있어서 문의해봐야함
      primary: '#000000',
    },
  },

  typography: {
    header1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '2rem',
    },
    header2: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: '2rem',
    },
    header3: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '2rem',
    },
    title1: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '1.75rem',
    },
    title2: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: '1.5rem',
    },
    title3: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.375rem',
    },
    body1_md: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: '1.375rem',
    },
    body1_rg: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
    },
    body2_md: {
      fontSize: '0.938rem',
      fontWeight: 500,
      lineHeight: '1.375rem',
    },
    body2_rg: {
      fontSize: '0.938rem',
      fontWeight: 400,
      lineHeight: '1.375rem',
    },
    body3: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    caption1_md: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
    },
    caption1_rg: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    caption2: {
      fontSize: '0.813rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
    },
    caption3: {
      fontSize: '0.625rem',
      fontWeight: 400,
      lineHeight: '0.75rem',
    },
  },

  spacing: {
    padding: { horizontal: convertToViewportWidth(24) },
    fixedButtonBottom: convertToViewportHeight(80),
  },
};

export default theme;
