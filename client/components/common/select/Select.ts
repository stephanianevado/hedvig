import styled from 'styled-components'

import { Theme } from 'client/components/theme/Theme'

const {
  colors: { tertiaryBlack },
  fontFamily,
  fontSize: { medium },
  fontWeight: { normal },
} = Theme

export const Select = styled.select`
  color: ${tertiaryBlack};
  font-family: ${fontFamily};
  font-size: ${medium};
  font-weight: ${normal};
  padding: 16px 24px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #333 50%),
    linear-gradient(135deg, #333 50%, transparent 50%);
  background-position:
    calc(100% - 20px) center,
    calc(100% - 15px) center;
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;
  cursor: pointer;
`
