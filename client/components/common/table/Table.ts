import styled from 'styled-components'

import { Size } from 'client/components/theme/spacing'
import { Theme } from 'client/components/theme/Theme'

const {
  fontSize: { medium },
  fontWeight: { bold },
  colors: { tertiaryBlack, primaryWhite },
} = Theme

export type TableProps = {
  width?: Size
  textAlign?: 'center' | 'left' | 'right'
}

export const Table = styled.table`
  border-collapse: collapse;
  background: ${primaryWhite};
  border-radius: 8px;
  padding: 16px;
  color: ${tertiaryBlack};
`

export const Th = styled.th<TableProps>`
  padding: 16px;
  border: 1px solid #dddddd;
  font-size: ${medium};
  font-weight: ${bold};
  width: ${(props: TableProps) => props.width ?? props.width};
  text-align: ${(props: TableProps) => props.textAlign ?? 'left'};
`

export const Td = styled.td<TableProps>`
  padding: 8px 16px;
  border: 1px solid #dddddd;
  width: ${(props: TableProps) => props.width};
  text-align: ${(props: TableProps) => props.textAlign ?? 'left'};
`
