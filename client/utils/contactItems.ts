import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  Linkedin,
} from 'client/components/icons/icons'

export enum Id {
  GitHub = 'github',
  Linkedin = 'linkedin',
  Instagram = 'instagram',
  Facebook = 'facebook',
  Email = 'email',
}

export const contactItems = {
  [Id.GitHub]: {
    text: 'Go to my GitHub',
    alternativeText: 'My GitHub',
    href: 'https://github.com/stephanianevado',
    icon: GitHub,
  },
  [Id.Linkedin]: {
    text: 'Go to my LinkedIn',
    alternativeText: 'LinkedIn',
    href: 'https://www.linkedin.com/in/stephanianevado/',
    icon: Linkedin,
  },
  [Id.Instagram]: {
    text: 'Go to my Instagram',
    alternativeText: 'Instagram',
    href: 'https://www.instagram.com/stephanianevado/',
    icon: Instagram,
  },
  [Id.Facebook]: {
    text: 'Go to my Facebook',
    alternativeText: 'Facebook',
    href: 'https://www.facebook.com/nevadostephania',
    icon: Facebook,
  },
  [Id.Email]: {
    text: 'Send me a message',
    alternativeText: `Let's chat`,
    href: 'mailto:stephania.arantxa@gmail.com',
    icon: Email,
  },
}
