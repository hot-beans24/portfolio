import { Text, Divider, Flex } from "@chakra-ui/react"

import PageTransitionAnimate from '@/components/animation/PageTransitionAnimate'
import PageHeading from "@/components/parts/PageHeading"

import SubHeading from "@/components/parts/SubHeading"
import TechnologyCard from "@/components/parts/TechnologyCard"
import CustomDivider from "@/components/parts/CustomDivider"

import { favoriteTechnologies, wantLearnTechnologies, otherTechnologies } from "@/constants/technologies"

const ProfilePage = () => {
  return (
    <PageTransitionAnimate>
      <PageHeading title="プロフィール" />
      <Text fontSize="sm">
        2001年生まれ福岡在住。情報系専門学校3年。<br />
        専門学校入学後初めてITに触れ、基本情報や応用情報の試験勉強を経てITに関する知識を身に付けました。
        授業では主にバックエンド技術・個人でフロントエンド技術を学んでおり、今後の予定として、Node.jsで動くWebアプリの公開にチャレンジしたいです。
      </Text>
      <CustomDivider />
      <SubHeading title="好きな言語・技術" />
      <Flex flexWrap="wrap" gap={4}>
        {favoriteTechnologies.map((technology) => (
          <TechnologyCard key={technology.id} name={technology.name} title={technology.title} />
        ))}
      </Flex>
      <CustomDivider />
      <SubHeading title="今後学びたい言語・技術" />
      <Flex flexWrap="wrap" gap={4}>
        {wantLearnTechnologies.map((technology) => (
          <TechnologyCard key={technology.id} name={technology.name} title={technology.title} />
        ))}
      </Flex>
      <CustomDivider />
      <Flex flexWrap="wrap" gap={4}>
        {otherTechnologies.map((technology) => (
          <TechnologyCard key={technology.id} name={technology.name} title={technology.title} />
        ))}
      </Flex>
      <Text marginTop={4} color="gray.400" fontSize="sm" >
        来年度のカリキュラムでPythonとLaravelを学ぶ機会があります
      </Text>
    </PageTransitionAnimate>
  )
}

export default ProfilePage