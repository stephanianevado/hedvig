import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from 'client/components/icons/icons'

export enum ContactMedium {
  GitHub = 'github',
  Linkedin = 'linkedin',
  Instagram = 'instagram',
  Facebook = 'facebook',
  Email = 'email',
}

export const contactItems = {
  [ContactMedium.GitHub]: {
    text: 'Go to my GitHub',
    alternativeText: 'My GitHub',
    href: 'https://github.com/stephanianevado',
    icon: GitHub,
  },
  [ContactMedium.Linkedin]: {
    text: 'Go to my LinkedIn',
    alternativeText: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stephanianevado/',
    icon: Linkedin,
  },
  [ContactMedium.Instagram]: {
    text: 'Go to my Instagram',
    alternativeText: 'Instagram',
    href: 'https://www.instagram.com/stephanianevado/',
    icon: Instagram,
  },
  [ContactMedium.Facebook]: {
    text: 'Go to my Facebook',
    alternativeText: 'Facebook',
    href: 'https://www.facebook.com/nevadostephania',
    icon: Facebook,
  },
  [ContactMedium.Email]: {
    text: 'Send me a message',
    alternativeText: `Let's chat`,
    href: 'mailto:stephania.arantxa@gmail.com',
    icon: Email,
  },
}
