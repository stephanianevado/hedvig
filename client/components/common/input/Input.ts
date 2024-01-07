import styled from 'styled-components'

import { Theme } from 'client/components/theme/Theme'

const {
  fontFamily,
  fontSize: { medium },
  fontWeight: { normal },
} = Theme

export const Input = styled.input`
  font-family: ${fontFamily};
  font-size: ${medium};
  font-weight: ${normal};
  padding: 16px 24px;
  cursor: pointer;
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`
