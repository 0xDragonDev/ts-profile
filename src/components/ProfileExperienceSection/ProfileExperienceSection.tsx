import { Content, Section, Title } from 'styles'
import * as S from './styles'

type Experience = {
  year: string
  title: string
  description: string
}

type Props = {
  experiences: Experience[]
  active?: boolean
}

function ProfileExperienceSection(props: Props) {
  const { experiences, active } = props

  return (
    <Section active={active} id="experience">
      <Content>
        <Title>WORK EXPERIENCE</Title>

        <S.Timeline>
          {experiences.map((experience) => (
            <S.Item key={experience.year} data-year={experience.year}>
              <S.ItemTitle>{experience.year}</S.ItemTitle>
              <S.ItemDesc>{experience.description}</S.ItemDesc>
            </S.Item>
          ))}
        </S.Timeline>
      </Content>
    </Section>
  )
}

export default ProfileExperienceSection
