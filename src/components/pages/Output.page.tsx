import PageTransitionAnimate from '@/components/animation/PageTransitionAnimate'
import PageHeading from '@/components/parts/PageHeading'
import OutputCardBox from '../parts/OutputCardBox'

import { outputs } from '@/constants/outputs'

const OutputsPage = () => {
  return (
    <PageTransitionAnimate>
      <PageHeading title="OUTPUTS" isMainHeading />
      <OutputCardBox outputs={outputs} />
    </PageTransitionAnimate>
  )
}

export default OutputsPage
