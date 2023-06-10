import * as S from './styles'

type Props = {
  activeSection: string
  onClick: (section: string) => void
}

function ProfileMenu(props: Props) {
  const { activeSection, onClick } = props

  return (
    <S.Container>
      <S.Button
        data-section="#about"
        active={activeSection === 'about'}
        onClick={() => onClick('about')}
      >
        Sobre
      </S.Button>

      <S.Button
        data-section="#experience"
        active={activeSection === 'experience'}
        onClick={() => onClick('experience')}
      >
        Experiências
      </S.Button>

      <S.Button
        data-section="#contact"
        active={activeSection === 'contact'}
        onClick={() => onClick('contact')}
      >
        Contato
      </S.Button>
    </S.Container>
  )
}

export default ProfileMenu
