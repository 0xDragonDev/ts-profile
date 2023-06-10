import { Content, Section, Title } from 'styles'
import * as S from './styles'

type Experience = {
  role: string
  company: string
  year: string
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
        <Title>Experiências Profissionais</Title>

        <S.Timeline>
          {experiences.map((experience) => (
            <S.Item key={experience.year}>
              <S.ItemTitle>
                {experience.role} - {experience.company}
              </S.ItemTitle>
              <S.ItemPeriod>{experience.year}</S.ItemPeriod>
            </S.Item>
          ))}
        </S.Timeline>
      </Content>
    </Section>
  )
}

export default ProfileExperienceSection
