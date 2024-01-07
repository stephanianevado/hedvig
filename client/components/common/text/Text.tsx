import type { PropsWithChildren } from 'react'

import styled, { keyframes } from 'styled-components'

import { BreakpointStyles } from 'client/components/theme/breakpoint'
import { createResponsiveStyle } from 'client/components/theme/createResponsiveStyle'
import type {
  AlignContent,
  AlignItems,
  AlignSelf,
  Color,
  Direction,
  Display,
  JustifyContent,
  Size,
} from 'client/components/theme/spacing'
import { Theme } from 'client/components/theme/Theme'

const {
  colors: { primaryBlue },
  fontWeight: { normal },
} = Theme

export type TextProps = PropsWithChildren<{
  display?: Display
  grow?: number
  shrink?: number
  basis?: Size
  flex?: number
  direction?: Direction
  wrap?: 'nowrap' | 'wrap' | ' wrap-reverse'
  justifyContent?: JustifyContent
  alignContent?: AlignContent
  alignItems?: AlignItems
  alignSelf?: AlignSelf
  as?: string
  children?: React.ReactNode | React.ReactNode[]
  variant?: string
  subStyle?: number
  rel?: string
  color?: Color
  align?: 'center' | 'left' | 'right'
  textDecoration?: 'none' | 'underline'
  textDecorationColor?: Color
  textUnderlineOffset?: string
  textWrap?: 'wrap' | 'nowrap' | 'balance'
  whiteSpace?:
    | 'normal'
    | 'nowrap'
    | 'pre'
    | 'pre-wrap'
    | 'pre-line'
    | 'break-spaces'
  animationName?: string | typeof keyframes
  animationDuration?: string
  animationTimingFunction?:
    | 'ease'
    | 'linear'
    | 'ease-in'
    | 'ease-out'
    | 'ease-in-out'
    | 'step-start'
    | 'step-end'
    | 'steps'
    | 'cubic-bezier'
  hover?: Record<string, string>
  disabled?: boolean
  breakpoints?: Record<string, BreakpointStyles>
}>

export const StyledText = styled.div<TextProps>`
  margin: 0;
  padding: 4px 0px;
  as: ${(props: TextProps) => props.as};
  display: ${(props: TextProps) => props.display ?? 'list'};
  flex-grow: ${(props: TextProps) => props.grow ?? 0};
  flex-shrink: ${(props: TextProps) => props.shrink ?? 0};
  flex-basis: ${(props: TextProps) => props.basis ?? 'auto'};
  flex: ${(props: TextProps) => props.flex ?? 'flex'};
  flex-direction: ${(props: TextProps) => props.direction ?? 'row'};
  flex-wrap: ${(props: TextProps) => props.wrap ?? 'nowrap'};
  justify-content: ${(props: TextProps) =>
    props.justifyContent ?? 'flex-start'};
  align-content: ${(props: TextProps) => props.alignContent ?? 'start'};
  align-items: ${(props: TextProps) => props.alignItems ?? 'stretch'};
  align-self: ${(props: TextProps) => props.alignSelf};
  rel: ${(props: TextProps) => props.rel};
  color: ${(props: TextProps) => props.color ?? 'transparent'};
  text-align: ${(props: TextProps) => props.align ?? 'left'};
  text-decoration: ${(props: TextProps) => props.textDecoration ?? 'none'};
  text-decoration-color: ${(props: TextProps) =>
    props.textDecorationColor ?? 'none'};
  text-underline-offset: ${(props: TextProps) =>
    props.textUnderlineOffset ?? 'none'};
  text-wrap:  ${(props: TextProps) => props.textWrap ?? 'wrap'}; 
  list-style-position: inside;
  &:hover {
    ${(props: TextProps) => props.hover};
  };
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${primaryBlue}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  animation-name: ${(props: TextProps) => props.animationName};
  animation-duration: ${(props: TextProps) => props.animationDuration};
  animation-timing-function: ${(props: TextProps) =>
    props.animationTimingFunction};
  font-size: ${(props: TextProps) => props.variant};
  font-weight: ${(props: TextProps) => props.subStyle ?? normal};
  ${(props: TextProps) => createResponsiveStyle(props.breakpoints)};
`

export const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>
}