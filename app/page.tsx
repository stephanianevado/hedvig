'use client'

import { Fragment } from 'react'

import Icosahedron from 'client/components/animations/Icosahedron'
import AppWrapper from 'client/components/AppWrapper'
import { Box } from 'client/components/common/box/Box'
import { Button, Mode } from 'client/components/common/button/Button'
import { Spacer } from 'client/components/common/spacer/Spacer'
import { Text } from 'client/components/common/text/Text'
import { Dash } from 'client/components/icons/icons'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'
import { contactItems, ContactMedium } from 'client/utils/contactItems'

export default function Home() {
  const {
    fontSize: { huge, medium },
    fontWeight: { bold },
    colors: { secondaryBlack, secondaryGrey, primaryWhite },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <AppWrapper>
      <Box
        breakpoints={{
          [MOBILE_S]: { direction: 'column' },
          [LAPTOP]: { direction: 'row', alignItems: 'center' },
        }}>
        <Box
          breakpoints={{
            [LAPTOP]: { flex: 1 },
          }}>
          <Box direction="row" alignItems="center">
            <Dash />
            <Spacer size={1} />
            <Text
              as="span"
              color={secondaryGrey}
              variant={medium}
              subStyle={bold}>
              Stephania Nevado
            </Text>
          </Box>
          <Spacer size={10} />
          <Text as="h1" variant={huge} subStyle={bold} color={secondaryBlack}>
            Hedvig Full Stack case ✨
          </Text>
          <Spacer size={10} />
          <Box
            breakpoints={{
              [MOBILE_S]: { direction: 'column', alignItems: 'center' },
              [LAPTOP]: { direction: 'row' },
            }}>
            {Object.values(ContactMedium)
              .filter((id) => {
                return [
                  ContactMedium.GitHub,
                  ContactMedium.Linkedin,
                  ContactMedium.Email,
                ].includes(id)
              })
              .map((id) => {
                const item = contactItems[id]
                const { alternativeText, href, icon: Icon } = item
                return (
                  <Fragment key={id}>
                    <Button
                      as="a"
                      href={href}
                      target="_blank"
                      icon={Icon}
                      iconPosition="left"
                      color={primaryWhite}
                      bg={secondaryBlack}
                      mode={Mode.Alternative}>
                      {alternativeText}
                    </Button>
                    <Spacer size={4} />
                  </Fragment>
                )
              })}
          </Box>
        </Box>
        <Icosahedron />
      </Box>
    </AppWrapper>
  )
}
