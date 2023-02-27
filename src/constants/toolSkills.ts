import { type Skill } from '@/types/cardItemType'

import dockerIcon from '@/assets/images/docker-icon.svg'
import gitIcon from '@/assets/images/git-icon.svg'
import githubIcon from '@/assets/images/github-icon.svg'
import figmaIcon from '@/assets/images/figma-icon.svg'


export const toolSkills: Skill[] = [
  {
    id: 1,
    name: "docker",
    title: "Docker",
    level: 1,
    imgSrc: dockerIcon.src
  },
  {
    id: 2,
    name: "git",
    title: "git",
    level: 1,
    imgSrc: gitIcon.src
  },
  {
    id: 3,
    name: "github",
    title: "GitHub",
    level: 1,
    imgSrc: githubIcon.src
  },
  {
    id: 4,
    name: "figma",
    title: "Figma",
    level: 1,
    imgSrc: figmaIcon.src
  },
]