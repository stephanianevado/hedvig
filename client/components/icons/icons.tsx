import { useEffect, useState } from 'react'

import styled from 'styled-components'

import multiplier from 'client/components/theme/multiplier'
import { Color, Size } from 'client/components/theme/spacing'
import { Theme } from 'client/components/theme/Theme'

export type IconProps = {
  size?: Size
  color?: Color
  hoverColor?: Color
}

export type Icon = (props: IconProps) => JSX.Element

export const Icon = styled.svg`
  width: ${(props: IconProps) => multiplier(props.size) ?? multiplier(6)};
  height: ${(props: IconProps) => multiplier(props.size) ?? multiplier(6)};
  &:hover path,
  &:active path {
    fill: ${(props: IconProps) => props.hoverColor};
    transition: background-color 0.5s;
  }
`

const { primaryBlack } = Theme.colors

export const GitHub = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <path
        d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
        fill={color}
      />
    </Icon>
  )
}

export const Linkedin = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
        fill={color}
      />
    </Icon>
  )
}

export const Instagram = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"
        fill={color}
      />
    </Icon>
  )
}

export const Facebook = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
        fill={color}
      />
    </Icon>
  )
}

export const Email = ({ color = primaryBlack, ...props }: IconProps) => (
  <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
      fill={color}
    />
  </Icon>
)

export const Link = ({ color = primaryBlack, ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g clipPath="url(#clip0)">
        <path
          d="M20.25 15H18.75C18.5511 15 18.3603 15.079 18.2197 15.2197C18.079 15.3603 18 15.5511 18 15.75V21H3V6H9.75C9.94891 6 10.1397 5.92098 10.2803 5.78033C10.421 5.63968 10.5 5.44891 10.5 5.25V3.75C10.5 3.55109 10.421 3.36032 10.2803 3.21967C10.1397 3.07902 9.94891 3 9.75 3H2.25C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25L0 21.75C0 22.3467 0.237053 22.919 0.65901 23.341C1.08097 23.7629 1.65326 24 2.25 24H18.75C19.3467 24 19.919 23.7629 20.341 23.341C20.7629 22.919 21 22.3467 21 21.75V15.75C21 15.5511 20.921 15.3603 20.7803 15.2197C20.6397 15.079 20.4489 15 20.25 15ZM22.875 0H16.875C15.8733 0 15.3727 1.21453 16.0781 1.92188L17.753 3.59672L6.32812 15.0173C6.22325 15.1219 6.14003 15.2461 6.08325 15.3828C6.02647 15.5195 5.99724 15.6662 5.99724 15.8142C5.99724 15.9623 6.02647 16.1089 6.08325 16.2456C6.14003 16.3824 6.22325 16.5066 6.32812 16.6111L7.39078 17.6719C7.4953 17.7768 7.61949 17.86 7.75624 17.9168C7.89298 17.9735 8.03959 18.0028 8.18766 18.0028C8.33572 18.0028 8.48233 17.9735 8.61908 17.9168C8.75582 17.86 8.88001 17.7768 8.98453 17.6719L20.4037 6.24938L22.0781 7.92188C22.7812 8.625 24 8.13281 24 7.125V1.125C24 0.826631 23.8815 0.540483 23.6705 0.329505C23.4595 0.118526 23.1734 0 22.875 0V0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="secondaryWhite" />
        </clipPath>
      </defs>
    </Icon>
  )
}
export const Hamburger = () => {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.800003 2.39999H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 8H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 13.6H15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export const Close = () => {
  return (
    <Icon
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2 0.800003L0.800003 15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.800003 0.800003L15.2 15.2"
        stroke="#100D2B"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

export const Plus = ({ ...props }: IconProps) => {
  return (
    <Icon
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M6.66669 20H33.3334"
        stroke="#141313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 6.66699V33.3337"
        stroke="#141313"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  )
}

type LineProps = {
  color?: Color
}

export const Line = ({ color = '#141313' }: LineProps) => {
  const [width, setWidth] = useState(1280)

  useEffect(() => {
    const handleResize = () => {
      const box = document.getElementById('main')
      if (box) {
        const boxWidth = box.offsetWidth
        setWidth(boxWidth)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <svg
      width={width}
      height="4"
      viewBox={`0 0 ${width} 4`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.1" d={`M0 2H${width}`} stroke={color} strokeWidth="4" />
    </svg>
  )
}

export const Dash = () => {
  return (
    <svg
      width="47"
      height="2"
      viewBox="0 0 47 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H47" stroke="#8B8B8B" strokeWidth="2" />
    </svg>
  )
}
