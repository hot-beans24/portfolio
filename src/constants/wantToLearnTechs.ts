import { type Tech } from '@/types/cardItemType'

import rustIcon from '@/assets/images/rust-icon.svg'
import denoIcon from '@/assets/images/deno-icon.svg'
import nestjsIcon from '@/assets/images/nestjs-icon.svg'
import flutterIcon from '@/assets/images/flutter-icon.svg'
import awsIcon from '@/assets/images/aws-icon.svg'
import graphqlIcon from '@/assets/images/graphql-icon.svg'
import grpcIcon from '@/assets/images/grpc-icon.svg'
import trpcIcon from '@/assets/images/trpc-icon.svg'
import tailwindcssIcon from '@/assets/images/tailwindcss-icon.svg'
import headlessuiIcon from '@/assets/images/headlessui-icon.svg'

export const wantToLearnTechs: Tech[] = [
  {
    id: 1,
    name: 'rust',
    title: 'Rust',
    imgSrc: rustIcon.src
  },
  {
    id: 2,
    name: 'deno',
    title: 'Deno',
    imgSrc: denoIcon.src
  },
  {
    id: 3,
    name: 'nestjs',
    title: 'Nest.js',
    imgSrc: nestjsIcon.src
  },
  {
    id: 4,
    name: 'flutter',
    title: 'Flutter',
    imgSrc: flutterIcon.src
  },
  {
    id: 5,
    name: 'aws',
    title: 'AWS',
    imgSrc: awsIcon.src
  },
  {
    id: 6,
    name: 'graphql',
    title: 'GraphQL',
    imgSrc: graphqlIcon.src
  },
  {
    id: 7,
    name: 'grpc',
    title: 'gRPC',
    imgSrc: grpcIcon.src
  },
  {
    id: 8,
    name: 'trpc',
    title: 'tRPC',
    imgSrc: trpcIcon.src
  },
  {
    id: 9,
    name: 'tailwindcss',
    title: 'Tailwind CSS',
    imgSrc: tailwindcssIcon.src
  },
  {
    id: 10,
    name: 'headlessui',
    title: 'Headless UI',
    imgSrc: headlessuiIcon.src
  }
]