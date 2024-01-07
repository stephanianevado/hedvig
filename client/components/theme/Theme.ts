import { createGlobalStyle } from 'styled-components'

import { Breakpoint } from 'client/components/theme/breakpoint'
import { Color } from 'client/components/theme/color'
import { Variant } from 'client/components/theme/variant'

export const Theme = {
  colors: {
    [Color.PRIMARY_BLACK]: '#000000',
    [Color.SECONDARY_BLACK]: '#1A2029',
    [Color.TERTIARY_BLACK]: '#020C1B',
    [Color.PRIMARY_BLUE]: '#342CDB',
    [Color.SECONDARY_BLUE]: '#0C8CE9',
    [Color.PRIMARY_GREEN]: '#00FF00',
    [Color.PRIMARY_GREY]: '#454545',
    [Color.SECONDARY_GREY]: '#8B8B8B',
    [Color.TERTIARY_GREY]: '#F5F5F5',
    [Color.PRIMARY_ORANGE]: '#97240D',
    [Color.SECONDARY_ORANGE]: '#F24822',
    [Color.PRIMARY_PINK]: '#F5F5FF',
    [Color.SECONDARY_PINK]: '#F6EEF4',
    [Color.TERTIARY_PINK]: '#FF00A8',
    [Color.PRIMARY_PURPLE]: '#8638E5',
    [Color.SECONDARY_PURPLE]: '#681ABB',
    [Color.PRIMARY_RED]: '#FF0000',
    [Color.PRIMARY_WHITE]: '#FFFFFF',
    [Color.SECONDARY_WHITE]: '#E6F1FF',
    [Color.HOVER_STANDARD]: '#0000001A',
    [Color.HOVER_ALTERNATIVE]: '#020C1BCC',
  },
  breakpoints: {
    [Breakpoint.MOBILE_S]: '@media (min-width: 320px)',
    [Breakpoint.MOBILE_M]: '@media (min-width: 375px)',
    [Breakpoint.MOBILE_L]: '@media (min-width: 425px)',
    [Breakpoint.TABLET]: '@media (min-width: 768px)',
    [Breakpoint.LAPTOP]: '@media (min-width: 1024px)',
    [Breakpoint.LAPTOP_M]: '@media (min-width: 1260px)',
    [Breakpoint.LAPTOP_L]: '@media (min-width: 1440px)',
    [Breakpoint.DESKTOP]: '@media (min-width: 2560px)',
  },
  fontFamily: 'Clash Display',
  fontSize: {
    [Variant.SMALL]: '14px',
    [Variant.NORMAL]: '16px',
    [Variant.MEDIUM]: '18px',
    [Variant.LARGE]: '20px',
    [Variant.XL]: '32px',
    [Variant.HUGE]: '72px',
  },
  fontWeight: {
    bold: 600,
    normal: 400,
  },
  lineHeight: {
    small: 20 / 14,
    normal: 36 / 28,
    large: 48 / 40,
  },
}

export const GlobalStyle = createGlobalStyle`
  html, 
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: ${Theme.colors.primaryPink};
  }

  body {
    display: flex; 
    flex-direction: column; 
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  input {
    margin-top: 0
  }

  body,
  p,
  a,
  footer {
    font-size: ${Theme.fontSize.normal};
    font-weight: ${Theme.fontWeight.normal};
    line-height: ${Theme.lineHeight.normal};
    color: ${Theme.colors.tertiaryBlack};
  }
`
