import { Content, Section, Title } from 'styles'
import * as S from './styles'

type Props = {
  active?: boolean
}

function ProfileContactSection(props: Props) {
  const { active } = props

  return (
    <Section active={active} id="contact">
      <Content>
        <Title>CONTACT</Title>

        <S.Wrapper>
          <S.Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            et, maiores, dicta officia obcaecati praesentium consequatur optio
            blanditiis dolore cupiditate odit vitae perferendis.
          </S.Description>

          <S.Button>WORK TOGETHER</S.Button>
        </S.Wrapper>
      </Content>
    </Section>
  )
}

export default ProfileContactSection
