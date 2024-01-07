import { fadeInRight } from 'client/components/animations/animation'
import { Text, TextProps } from 'client/components/common/text/Text'
import { Theme } from 'client/components/theme/Theme'

type Props = {
  header?: string
  subHeader: string
  variant?: TextProps['variant']
}

export const Title = ({ header, subHeader }: Props) => {
  const {
    fontSize: { xl, large },
    fontWeight: { normal, bold },
    colors: { secondaryBlack, primaryGrey, tertiaryPink },
  } = Theme

  return (
    <>
      <Text
        as="h1"
        color={secondaryBlack}
        variant={large}
        subStyle={normal}
        textDecoration="underline"
        textDecorationColor={tertiaryPink}
        textUnderlineOffset="8px">
        {header}
      </Text>

      <Text
        as="h2"
        color={primaryGrey}
        variant={xl}
        subStyle={bold}
        animationName={fadeInRight}
        animationDuration="200ms"
        animationTimingFunction="ease-out">
        {subHeader}
      </Text>
    </>
  )
}
