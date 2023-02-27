import { Center, Link, Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import PageTransitionAnimate from '@/components/animation/PageTransitionAnimate'

const HomePage = () => {
  return (
    <PageTransitionAnimate>
      <Center>
        <Image src="/github-icon.svg" alt="img-github" width={160} height={160} />
      </Center>
      <Center marginTop={30}>
        <Link
          href="https://github.com/hot-beans24"
          isExternal
          textDecoration="underline"
          _hover={{
            opacity: 0.6
          }}
        >
          hot-beans24
          <ExternalLinkIcon />
        </Link>
      </Center>
    </PageTransitionAnimate>
  )
}

export default HomePage
