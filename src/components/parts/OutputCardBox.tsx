import { Grid } from '@chakra-ui/react'
import { Output } from '@/types/cardItemType'

import OutputCard from './OutputCard'

type OutputCardBoxProps = {
  outputs: Output[]
}

const OutputCardBox = ({ outputs }: OutputCardBoxProps) => {
  return (
    <Grid templateColumns={{ base: 'repeat(1fr, 1fr)', md: 'repeat(2, 1fr)' }} gap={4}>
      {outputs.map((output) => (
        <OutputCard key={output.id} name={output.name} title={output.title} techs={output.techs} githubLink={output.githubLink} siteLink={output.siteLink} />
      ))}
    </Grid>
  )
}

export default OutputCardBox