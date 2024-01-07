import { Box } from 'client/components/common/box/Box'
import { Spacer } from 'client/components/common/spacer/Spacer'
import { Text } from 'client/components/common/text/Text'
import { Line } from 'client/components/icons/icons'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'
import { contactItems, Id } from 'client/utils/contactItems'

export const Footer = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const {
    colors: { primaryBlack, primaryBlue },
    fontSize: { small },
  } = Theme
  const { DESKTOP, LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      as="footer"
      breakpoints={{
        [MOBILE_S]: { margin: '24px 16px' },
        [LAPTOP]: { margin: '24px 80px' },
        [DESKTOP]: { margin: '24px 640px' },
      }}>
      <Line />
      <Spacer size={2} />
      <Text variant={small} color={primaryBlack}>
        Copyright © {currentYear} Stephania Nevado.
      </Text>
      <Text variant={small} color={primaryBlack}>
        All rights reserved.
      </Text>
      <Spacer size={2} />
      <Box direction="row">
        {Object.values(Id).map((id) => {
          const item = contactItems[id]
          const { text, href, icon: Icon } = item

          return (
            <Box
              key={id}
              as="a"
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={text}
              wrap="nowrap"
              paddingRight={6}>
              <Icon size={5} hoverColor={primaryBlue} />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
