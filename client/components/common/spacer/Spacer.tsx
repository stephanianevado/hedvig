import styled from 'styled-components'

import multiplier from 'client/components/theme/multiplier'
import type { Size } from 'client/components/theme/spacing'

export type SpacerProps = {
  size: Size
}

export const Spacer = styled.div<SpacerProps>`
  width: ${(props: SpacerProps) => multiplier(props.size)};
  height: ${(props: SpacerProps) => multiplier(props.size)};
`
