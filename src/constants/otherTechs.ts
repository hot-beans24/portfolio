import { type Tech } from '@/types/cardItemType'

import pythonIcon from '@/assets/images/python-icon.svg'
import laravelIcon from '@/assets/images/laravel-icon.svg'

export const otherTechs: Tech[] = [
  {
    id: 1,
    name: 'python',
    title: 'Python',
    imgSrc: pythonIcon.src
  },
  {
    id: 2,
    name: 'laravel',
    title: 'Laravel',
    imgSrc: laravelIcon.src
  }
]