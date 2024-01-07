import { usePathname } from 'next/navigation'

import { Box } from 'client/components/common/box/Box'
import { Text } from 'client/components/common/text/Text'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'

const items = [
  {
    title: 'Admin tool',
    href: '/contracts',
  },
]

export const Items = () => {
  const pathname = usePathname()
  const {
    colors: { secondaryGrey, tertiaryPink },
    fontSize: { medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <Box
      breakpoints={{
        [MOBILE_S]: { marginTop: '50px', justifyContent: 'center' },
        [LAPTOP]: {
          marginTop: '0px',
          direction: 'row',
          alignItems: 'center',
        },
      }}>
      {items.map(({ title, href }) => {
        const isActivePage = pathname === href

        return (
          <Box
            key={href}
            as="a"
            href={href}
            direction="row"
            breakpoints={{
              [MOBILE_S]: { margin: '12px 16px' },
              [LAPTOP]: { margin: '0px 24px' },
            }}>
            <Text
              color={isActivePage ? tertiaryPink : secondaryGrey}
              textDecoration={isActivePage ? 'underline' : 'none'}
              textUnderlineOffset="4px"
              variant={medium}
              subStyle={bold}
              hover={{
                color: tertiaryPink,
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
              }}>
              {title}
            </Text>
          </Box>
        )
      })}
    </Box>
  )
}
