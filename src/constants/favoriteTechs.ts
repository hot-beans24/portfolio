import { type Tech } from '@/types/cardItemType'

import javaIcon from '@/assets/images/java-icon.svg'
import javascriptIcon from '@/assets/images/javascript-icon.svg'
import nodejsIcon from '@/assets/images/nodejs-icon.svg'
import reactIcon from '@/assets/images/react-icon.svg'
import nextjsIcon from '@/assets/images/nextjs-icon.svg'
import sassIcon from '@/assets/images/sass-icon.svg'

export const favoriteTechs: Tech[] = [
  {
    id: 1,
    name: 'java',
    title: 'Java',
    imgSrc: javaIcon.src
  },
  {
    id: 2,
    name: 'javascript',
    title: 'JavaScript',
    imgSrc: javascriptIcon.src
  },
  {
    id: 3,
    name: 'nodejs',
    title: 'Node.js',
    imgSrc: nodejsIcon.src
  },
  {
    id: 4,
    name: 'react',
    title: 'React',
    imgSrc: reactIcon.src
  },
  {
    id: 5,
    name: 'nextjs',
    title: 'Next.js',
    imgSrc: nextjsIcon.src
  },
  {
    id: 6,
    name: 'sass',
    title: 'Sass',
    imgSrc: sassIcon.src
  }
]