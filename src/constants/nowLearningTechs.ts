import { type Tech } from '@/types/cardItemType'

import typescriptIcon from '@/assets/images/typescript-icon.svg'
import nodejsIcon from '@/assets/images/nodejs-icon.svg'
import reactIcon from '@/assets/images/react-icon.svg'
import nextjsIcon from '@/assets/images/nextjs-icon.svg'
import expressIcon from '@/assets/images/express-icon.svg'
import dockerIcon from '@/assets/images/docker-icon.svg'

export const nowLearningTechs: Tech[] = [
  {
    id: 1,
    name: "typescript",
    title: "TypeScript",
    imgSrc: typescriptIcon.src
  },
  {
    id: 2,
    name: "nodejs",
    title: "Node.js",
    imgSrc: nodejsIcon.src
  },
  {
    id: 3,
    name: "react",
    title: "React",
    imgSrc: reactIcon.src
  },
  {
    id: 4,
    name: "nextjs",
    title: "Next.js",
    imgSrc: nextjsIcon.src
  },
  {
    id: 5,
    name: "express",
    title: "Express",
    imgSrc: expressIcon.src
  },
  {
    id: 6,
    name: "docker",
    title: "Docker",
    imgSrc: dockerIcon.src
  }
]