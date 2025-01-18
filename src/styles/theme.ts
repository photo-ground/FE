export const COLORS = {
  PRIMARY: {
    '800': '#3E180B',
    '500': '#FF4000',
    '400': '#FF612B',
    '300': '#FF855C',
    '200': '#FFA67D',
  },
  SECONDARY: {
    SURFACE: '#007C29',
    ALPHA: '#007C2947',
  },
  ORANGE: {
    '500': '#FF4F15',
    '400': '#FF7B3D',
    '300': '#FFA87D',
  },
  GRAY: {
    '900': '#212121',
    '800': '#262626',
    '700': '#333333',
    '600': '#404040',
    '500': '#595959',
    '400': '#737373',
    '300': '#8C8C8C',
    '200': '#A6A6A6',
    '100': '#BFBFBF',
  },
  BLACK: '#0E0E0E',
  WHITE: '#F5F5F5',
  POSITIVE: {
    '800': '#102D1C',
    '500': '#18A852',
  },
  NEGATIVE: {
    '800': '#3A1516',
    '500': '#E93134',
  },
};

const theme = {
  colors: {
    primary: {
      100: COLORS.PRIMARY[500],
      80: COLORS.PRIMARY[400],
      70: COLORS.PRIMARY[300],
      60: COLORS.PRIMARY[200],
    },

    secondary: {
      surface: COLORS.SECONDARY.SURFACE,
      alpha: COLORS.SECONDARY.ALPHA,
    },

    black: COLORS.BLACK,
    white: COLORS.WHITE,

    orange: {
      500: COLORS.ORANGE[500],
      400: COLORS.ORANGE[400],
      300: COLORS.ORANGE[300],
    },

    gray: {
      900: COLORS.GRAY[900],
      800: COLORS.GRAY[800],
      700: COLORS.GRAY[700],
      600: COLORS.GRAY[600],
      500: COLORS.GRAY[500],
      400: COLORS.GRAY[400],
      300: COLORS.GRAY[300],
      200: COLORS.GRAY[200],
      100: COLORS.GRAY[100],
    },

    positive: {
      800: COLORS.POSITIVE[800],
      500: COLORS.POSITIVE[500],
    },

    negative: {
      800: COLORS.NEGATIVE[800],
      500: COLORS.NEGATIVE[500],
    },

    background: {
      // [todo] 디자인 시스템에 없는데 사용되고 있어서 문의해봐야함
      primary: '#0e0e0e',
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
    title1_sb: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '1.75rem',
    },
    title1_rg: {
      fontSize: '1.25rem',
      fontWeight: 400,
      lineHeight: '1.75rem',
    },
    title2_md: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: '1.5rem',
    },
    title2_sb: {
      fontSize: '1.125rem',
      fontWeight: 500,
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
};

export default theme;
