import type { MouseEventHandler, PropsWithChildren } from 'react'

import styled, { keyframes } from 'styled-components'

import { BreakpointStyles } from 'client/components/theme/breakpoint'
import { createResponsiveStyle } from 'client/components/theme/createResponsiveStyle'
import multiplier from 'client/components/theme/multiplier'
import {
  MarginProps,
  PaddingProps,
  styledMargins,
  styledPadding,
  type AlignContent,
  type AlignItems,
  type AlignSelf,
  type Color,
  type Direction,
  type Display,
  type JustifyContent,
  type Position,
  type Size,
  type Target,
} from 'client/components/theme/spacing'

export type BoxProps = PaddingProps &
  MarginProps &
  PropsWithChildren<{
    id?: string
    as?: string
    boxSizing?: 'border-box' | 'content-box'
    children?: React.ReactNode | React.ReactNode[]
    bg?: Color
    border?: Color
    borderRadius?: Size
    height?: Size
    maxHeight?: Size
    minHeight?: Size
    width?: Size
    maxWidth?: Size
    position?: Position
    top?: Size
    right?: Size
    bottom?: Size
    left?: Size
    overflow?: 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto'
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
    ref?: string
    rel?: string
    className?: string
    target?: Target
    hover?: Record<string, string>
    onClick?: MouseEventHandler<HTMLInputElement> | ((a: unknown) => void)
    onMouseEnter?: React.MouseEventHandler<HTMLInputElement>
    onMouseLeave?: React.MouseEventHandler<HTMLInputElement>
    onSubmit?: (event: React.SyntheticEvent) => void
    href?: string
    cursor?: 'pointer'
    textDecoration?: 'none' | 'underline'
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
    zIndex?: string | number
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledBox = styled.div<BoxProps>`
  ${styledPadding};
  ${styledMargins};
  id: ${(props: BoxProps) => (props.id ? props.id : '')};
  as: ${(props: BoxProps) => props.as ?? props.as};
  box-sizing: ${(props: BoxProps) => props.boxSizing ?? 'border-box'};
  background-color: ${(props: BoxProps) => props.bg ?? 'transparent'};
  border: ${(props: BoxProps) => props.border ?? 'transparent'};
  border-radius: ${(props: BoxProps) => multiplier(props.borderRadius) ?? 0};
  height: ${(props: BoxProps) => multiplier(props.height)};
  max-height: ${(props: BoxProps) => multiplier(props.maxHeight)};
  min-height: ${(props: BoxProps) => multiplier(props.minHeight)};
  width: ${(props: BoxProps) => props.width ?? multiplier(props.width)};
  max-width: ${(props: BoxProps) => multiplier(props.maxWidth) ?? '100%'};
  position: ${(props: BoxProps) => props.position ?? 'unset'};
  top: ${(props: BoxProps) => multiplier(props.top)};
  right: ${(props: BoxProps) => multiplier(props.right)};
  bottom: ${(props: BoxProps) => multiplier(props.bottom)};
  left: ${(props: BoxProps) => multiplier(props.left)};
  overflow: ${(props: BoxProps) => props.overflow ?? 'auto'};
  overflow-y: ${(props: BoxProps) => props.overflow ?? 'auto'};
  overflow-x: ${(props: BoxProps) => props.overflow ?? 'auto'};
  display: ${(props: BoxProps) => props.display ?? 'flex'};
  flex-grow: ${(props: BoxProps) => props.grow ?? 0};
  flex-shrink: ${(props: BoxProps) => props.shrink ?? 0};
  flex-basis: ${(props: BoxProps) => props.basis ?? 'auto'};
  flex: ${(props: BoxProps) => props.flex};
  flex-direction: ${(props: BoxProps) => props.direction ?? 'column'};
  flex-wrap: ${(props: BoxProps) => props.wrap ?? 'nowrap'};
  justify-content: ${(props: BoxProps) => props.justifyContent ?? 'flex-start'};
  align-content: ${(props: BoxProps) =>
    props.alignContent ?? props.alignContent};
  align-items: ${(props: BoxProps) => props.alignItems ?? 'stretch'};
  align-self: ${(props: BoxProps) => props.alignSelf ?? props.alignSelf};
  ref: ${(props: BoxProps) => props.ref};
  class-name: ${(props: BoxProps) => props.className};
  target: ${(props: BoxProps) => props.target ?? '_blank'};
  href: ${(props: BoxProps) => props.href};
  cursor: ${(props: BoxProps) => props.cursor};
  text-decoration: ${(props: BoxProps) => props.textDecoration ?? 'none'};
  animation-name: ${(props: BoxProps) => props.animationName};
  animation-duration: ${(props: BoxProps) => props.animationDuration};
  animation-timing-function: ${(props: BoxProps) =>
    props.animationTimingFunction};
  z-index: ${(props: BoxProps) => props.zIndex};
  &:hover {
    ${(props: BoxProps) => props.hover};
  }
  ${(props: BoxProps) => createResponsiveStyle(props.breakpoints)};
`

export const Box = ({
  onMouseEnter,
  onMouseLeave,
  onClick,
  onSubmit,
  children,
  ...props
}: BoxProps) => {
  return (
    <StyledBox
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}>
      {children}
    </StyledBox>
  )
}