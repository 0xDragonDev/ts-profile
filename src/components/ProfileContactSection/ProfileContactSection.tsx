import { Content, Section, Title } from 'styles'
import { profile } from 'data/profile.json'
import * as S from './styles'

type Props = {
  active?: boolean
}

function ProfileContactSection(props: Props) {
  const { active } = props

  const linkedinUrl = profile.socialMedia.find(({ url }) => url)?.url

  function handleClick() {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <Section active={active} id="contact">
      <Content>
        <Title>Contato</Title>

        <S.Wrapper>
          <S.Description>
            Para contatos profissionais ou freelas, sinta-se à vontade para me
            contatar pelo{' '}
            <a
              href={linkedinUrl}
              title="Meu perfil do linkedin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            . Estou sempre aberto a novas conexões e oportunidades de
            networking.
          </S.Description>

          <S.Button onClick={handleClick}>Enviar mensagem</S.Button>
        </S.Wrapper>
      </Content>
    </Section>
  )
}

export default ProfileContactSection
