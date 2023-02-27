import { type Skill } from '@/types/cardItemType'

import htmlIcon from '@/assets/images/html-icon.svg'
import cssIcon from '@/assets/images/css-icon.svg'
import sassIcon from '@/assets/images/sass-icon.svg'
import javaIcon from '@/assets/images/java-icon.svg'
import javascriptIcon from '@/assets/images/javascript-icon.svg'
import typescriptIcon from '@/assets/images/typescript-icon.svg'
import nodejsIcon from '@/assets/images/nodejs-icon.svg'
import reactIcon from '@/assets/images/react-icon.svg'
import nextjsIcon from '@/assets/images/nextjs-icon.svg'
import springIcon from '@/assets/images/spring-icon.svg'

export const techSkills: Skill[] = [
  {
    id: 1,
    name: 'html',
    title: 'HTML',
    level: 2,
    imgSrc: htmlIcon.src
  },
  {
    id: 2,
    name: 'css',
    title: 'CSS',
    level: 2,
    imgSrc: cssIcon.src
  },
  {
    id: 3,
    name: 'sass',
    title: 'Sass(SCSS)',
    level: 2,
    imgSrc: sassIcon.src
  },
  {
    id: 4,
    name: 'java',
    title: 'Java',
    level: 1,
    imgSrc: javaIcon.src
  },
  {
    id: 5,
    name: 'javascript',
    title: 'JavaScript',
    level: 2,
    imgSrc: javascriptIcon.src
  },
  {
    id: 6,
    name: 'typescript',
    title: 'TypeScript',
    level: 1,
    imgSrc: typescriptIcon.src
  },
  {
    id: 7,
    name: 'nodejs',
    title: 'Node.js',
    level: 1,
    imgSrc: nodejsIcon.src
  },
  {
    id: 8,
    name: 'react',
    title: 'React',
    level: 1,
    imgSrc: reactIcon.src
  },
  {
    id: 9,
    name: 'nextjs',
    title: 'Next.js',
    level: 1,
    imgSrc: nextjsIcon.src
  },
  {
    id: 10,
    name: 'spring',
    title: 'Spring Boot',
    level: 1,
    imgSrc: springIcon.src
  },
]
