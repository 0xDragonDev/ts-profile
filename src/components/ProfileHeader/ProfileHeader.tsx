import * as S from './styles'

type Props = {
  name: string
  jobTitle: string
  avatar: string
  active?: boolean
}

function ProfileHeader(props: Props) {
  const { name, jobTitle, avatar, active } = props

  return (
    <S.Header active={active}>
      <S.Cover
        active={active}
        style={{
          backgroundImage: `url('${avatar}')`
        }}
      />

      <S.Avatar
        src="https://avatars.githubusercontent.com/u/3737645?v=4"
        alt="avatar"
        active={active}
      />

      <S.Fullname active={active}>{name}</S.Fullname>
      <S.Jobtitle active={active}>{jobTitle}</S.Jobtitle>
    </S.Header>
  )
}

export default ProfileHeader
