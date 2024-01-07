import type { MouseEventHandler, PropsWithChildren } from 'react'

import styled from 'styled-components'

import type { Icon } from 'client/components/icons/icons'
import { BreakpointStyles } from 'client/components/theme/breakpoint'
import { createResponsiveStyle } from 'client/components/theme/createResponsiveStyle'
import multiplier from 'client/components/theme/multiplier'
import {
  Color,
  PaddingProps,
  Size,
  Target,
} from 'client/components/theme/spacing'
import { Theme } from 'client/components/theme/Theme'

const { secondaryWhite, secondaryGrey } = Theme.colors

export type IconButtonProps = PaddingProps &
  PropsWithChildren<{
    id?: string
    name: string
    as?: string
    color?: Color
    bg?: Color
    hover?: Record<string, unknown>
    disabled?: boolean
    icon: Icon
    onClick?: MouseEventHandler<HTMLInputElement>
    size?: Size
    href?: string
    target?: Target
    breakpoints?: Record<string, BreakpointStyles>
  }>

export const StyledIcon = styled.button<IconButtonProps>`
  padding: ${(props: IconButtonProps) => multiplier(props.padding) ?? '0px'};
  color: ${(props: IconButtonProps) => props.color ?? 'transparent'};
  background-color: ${(props: IconButtonProps) => props.bg ?? 'transparent'};
  border: 0;
  &:disabled {
    color: ${secondaryGrey};
    cursor: not-allowed;
  };
  width: ${(props: IconButtonProps) =>
    multiplier(props.size) ?? multiplier(10)};
  height: ${(props: IconButtonProps) =>
    multiplier(props.size) ?? multiplier(10)};
  max-width: 100%;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  appearance: none;
  user-select: none;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${secondaryWhite}, 0px 0px 0 3px;
    &:not(:focus-visible) {
      box-shadow: none;
    },
  };
  cursor: pointer;
  ${(props: IconButtonProps) => createResponsiveStyle(props.breakpoints)};
`

export const IconButton = ({
  onClick,
  icon: Icon,
  ...props
}: IconButtonProps) => {
  return (
    <StyledIcon onClick={onClick} {...props}>
      {<Icon />}
    </StyledIcon>
  )
}
