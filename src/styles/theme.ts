import { COLOR } from '@/constants';

const theme = {
  colors: {
    primary: {
      800: COLOR.PRIMARY[800],
      500: COLOR.PRIMARY[500],
      400: COLOR.PRIMARY[400],
      300: COLOR.PRIMARY[300],
      200: COLOR.PRIMARY[200],
    },

    secondary: {
      surface: COLOR.SECONDARY.SURFACE,
      alpha: COLOR.SECONDARY.ALPHA,
    },

    black: COLOR.BLACK,
    white: COLOR.WHITE,

    orange: {
      500: COLOR.ORANGE[500],
      400: COLOR.ORANGE[400],
      300: COLOR.ORANGE[300],
    },

    gray: {
      900: COLOR.GRAY[900],
      800: COLOR.GRAY[800],
      700: COLOR.GRAY[700],
      600: COLOR.GRAY[600],
      500: COLOR.GRAY[500],
      400: COLOR.GRAY[400],
      300: COLOR.GRAY[300],
      200: COLOR.GRAY[200],
      100: COLOR.GRAY[100],
    },

    positive: {
      800: COLOR.POSITIVE[800],
      500: COLOR.POSITIVE[500],
    },

    negative: {
      800: COLOR.NEGATIVE[800],
      500: COLOR.NEGATIVE[500],
    },

    background: {
      primary: COLOR.BLACK,
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
