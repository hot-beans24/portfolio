import PageTransitionAnimate from '@/components/animation/PageTransitionAnimate'
import PageHeading from '@/components/parts/PageHeading'
import SkillCardBox from '@/components/parts/SkillCardBox'
import CustomDivider from '../parts/CustomDivider'

import { techSkills } from '@/constants/techSkills'
import { toolSkills } from '@/constants/toolSkills'

const SkillsPage = () => {
  return (
    <PageTransitionAnimate>
      <PageHeading title="SKILLS" isMainHeading />
      <PageHeading title="言語・技術" />
      <SkillCardBox skills={techSkills} />
      <CustomDivider />
      <PageHeading title="ツール・サービス等" />
      <SkillCardBox skills={toolSkills} />
    </PageTransitionAnimate>
  )
}

export default SkillsPage
