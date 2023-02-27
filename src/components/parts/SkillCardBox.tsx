import { Grid } from '@chakra-ui/react'

import { type Skill } from '@/types/cardItemType'
import SkillCard from './SkillCard'

type SkillCardBoxProps = {
  skills: Skill[]
}

const SkillCardBox = ({ skills }: SkillCardBoxProps) => {
  return (
    <Grid templateColumns={{ base: 'repeat(1fr, 1fr)', md: 'repeat(2, 1fr)' }} gap={4}>
      {skills.map((skill) => (
        <SkillCard key={skill.id} name={skill.name} title={skill.title} level={skill.level} imgSrc={skill.imgSrc} />
      ))}
    </Grid>
  )
}

export default SkillCardBox
