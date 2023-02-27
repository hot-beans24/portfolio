import PageTransitionAnimate from '@/components/animation/PageTransitionAnimate'
import PageHeading from '@/components/parts/PageHeading'
import MainText from '@/components/parts/MainText'
import SubText from '@/components/parts/SubText'
import TechnologyCardBox from '@/components/parts/TechnologyCardBox'
import CustomDivider from '@/components/parts/CustomDivider'

import { favoriteTechs } from '@/constants/favoriteTechs'
import { nowLearningTechs } from '@/constants/nowLearningTechs'
import { wantToLearnTechs } from '@/constants/wantToLearnTechs'
import { otherTechs } from '@/constants/otherTechs'

const ProfilePage = () => {
  return (
    <PageTransitionAnimate>
      <PageHeading title="PROFILE" isMainHeading />
      <MainText>
        2001年生まれ福岡在住。情報系専門学校3年。
        <br />
        専門学校入学後初めてITに触れ、基本情報や応用情報の試験勉強を経てIT周辺の知識を学びました。
        授業では主にバックエンド技術・個人でフロントエンド技術を学んでおり、今後はネイティブアプリ開発にもチャレンジしたいです。
      </MainText>
      <CustomDivider />
      <PageHeading title="好きな言語・技術" />
      <TechnologyCardBox technologies={favoriteTechs}/>
      <CustomDivider />
      <PageHeading title="現在主に学んでいる技術" />
      <TechnologyCardBox technologies={nowLearningTechs} />
      <CustomDivider />
      <PageHeading title="今後学びたい技術" />
      <TechnologyCardBox technologies={wantToLearnTechs} />
      <CustomDivider />
      <TechnologyCardBox technologies={otherTechs} />
      <SubText>
        来年度のカリキュラムでPythonとLaravelを学ぶ機会があります
      </SubText>
    </PageTransitionAnimate>
  )
}

export default ProfilePage
