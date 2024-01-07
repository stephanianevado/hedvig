import { css } from 'styled-components'

import { Breakpoint } from 'client/components/theme/breakpoint'
import multiplier from 'client/components/theme/multiplier'
import { Variant } from 'client/components/theme/variant'

export type Color = string

export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'

export type AlignContent = 'start' | 'center' | 'space-between' | 'space-around'

export type AlignItems =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'baseline'

export type AlignSelf = 'flex-start' | 'flex-end' | 'center' | 'stretch'

export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type JustifyItems = 'start' | 'end' | 'center' | 'stretch'

export type JustifySelf = 'start' | 'end' | 'center' | 'stretch'

export type Display =
  | 'none'
  | 'flex'
  | 'inline-flex'
  | 'block'
  | 'inline-block'
  | 'grid'
  | 'inline-grid'
  | 'inline'
  | 'flow-root'

export type Position = 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'

export type Size = number | string

export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename'

export type ThemeProps = {
  colors: Color
  breakpoints: Breakpoint
  fontFamily: string
  fontWeight?: number
  fontSize: Array<Variant>
  lineHeight: number
}

export type MarginProps = {
  margin?: Size
  marginHorizontal?: Size
  marginVertical?: Size
  marginTop?: Size
  marginRight?: Size
  marginBottom?: Size
  marginLeft?: Size
}

export const styledMargins = css<MarginProps>`
  margin: ${(props: MarginProps) => multiplier(props.margin)};
  margin-top: ${(props: MarginProps) => multiplier(props.marginVertical)};
  margin-right: ${(props: MarginProps) => multiplier(props.marginHorizontal)};
  margin-bottom: ${(props: MarginProps) => multiplier(props.marginVertical)};
  margin-left: ${(props: MarginProps) => multiplier(props.marginHorizontal)};
  margin-top: ${(props: MarginProps) => multiplier(props.marginTop)};
  margin-right: ${(props: MarginProps) => multiplier(props.marginRight)};
  margin-bottom: ${(props: MarginProps) => multiplier(props.marginBottom)};
  margin-left: ${(props: MarginProps) => multiplier(props.marginLeft)};
`
export type PaddingProps = {
  padding?: Size
  paddingVertical?: Size
  paddingHorizontal?: Size
  paddingTop?: Size
  paddingRight?: Size
  paddingBottom?: Size
  paddingLeft?: Size
}

export const styledPadding = css<PaddingProps>`
  padding: ${(props: PaddingProps) => multiplier(props.padding)};
  padding-top: ${(props: PaddingProps) => multiplier(props.paddingVertical)};
  padding-right: ${(props: PaddingProps) =>
    multiplier(props.paddingHorizontal)};
  padding-bottom: ${(props: PaddingProps) => multiplier(props.paddingVertical)};
  padding-left: ${(props: PaddingProps) => multiplier(props.paddingHorizontal)};
  padding-top: ${(props: PaddingProps) => multiplier(props.paddingTop)};
  padding-right: ${(props: PaddingProps) => multiplier(props.paddingRight)};
  padding-bottom: ${(props: PaddingProps) => multiplier(props.paddingBottom)};
  padding-left: ${(props: PaddingProps) => multiplier(props.paddingLeft)};
`
