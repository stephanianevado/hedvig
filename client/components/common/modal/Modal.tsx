import { Box } from 'client/components/common/box/Box'
import { IconButton } from 'client/components/common/iconButton/IconButton'
import { Text } from 'client/components/common/text/Text'
import { Close } from 'client/components/icons/icons'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'

type Props = {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ title, isOpen, onClose, children }: Props) => {
  const {
    colors: { primaryWhite, secondaryBlack },
    fontSize: { large, xl },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP, MOBILE_S } = Breakpoint

  return (
    <>
      {isOpen && (
        <Box
          position="fixed"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          justifyContent="center"
          alignItems="center">
          <Box
            bg={primaryWhite}
            width={200}
            breakpoints={{
              [MOBILE_S]: { padding: '16px', width: '100%', height: '100%' },
              [LAPTOP]: {
                padding: '40px',
                borderRadius: '8px',
                width: '620px',
                height: '420px',
              },
            }}>
            <Box
              direction="row"
              justifyContent="space-between"
              alignItems="center">
              <Text
                as="h2"
                color={secondaryBlack}
                subStyle={bold}
                breakpoints={{
                  [MOBILE_S]: { variant: large },
                  [LAPTOP]: { variant: xl },
                }}>
                {title}
              </Text>
              <IconButton
                size={5}
                name="terminate contract"
                icon={Close}
                onClick={onClose}
              />
            </Box>
            {children}
          </Box>
        </Box>
      )}
    </>
  )
}
