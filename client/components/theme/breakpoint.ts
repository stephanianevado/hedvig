export enum Breakpoint {
  MOBILE_S = 'mobileS',
  MOBILE_M = 'mobileM',
  MOBILE_L = 'mobileL',
  TABLET = 'tablet',
  LAPTOP = 'laptop',
  LAPTOP_M = 'laptopM',
  LAPTOP_L = 'laptopL',
  DESKTOP = 'desktop',
}

export type BreakpointStyles = Record<string, string | number>
