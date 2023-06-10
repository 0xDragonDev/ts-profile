import { Content, Section, Title } from 'styles'
import * as S from './styles'

type Props = {
  description: string
  active?: boolean
}

function ProfileAboutSection(props: Props) {
  const { description, active } = props

  return (
    <Section active={active} id="about">
      <Content>
        <Title>Sobre</Title>
        <S.Description>{description}</S.Description>
      </Content>
    </Section>
  )
}

export default ProfileAboutSection
