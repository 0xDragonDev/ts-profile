import { useState } from 'react'
import {
  ProfileAboutSection,
  ProfileContactSection,
  ProfileExperienceSection,
  ProfileHeader,
  ProfileMenu
} from 'components'
import * as S from './styles'
import { profile, experiences } from 'data/profile.json'

function Profile() {
  const [activeSection, setActiveSection] = useState('about')

  function handleClick(section: string) {
    setActiveSection(section)
  }

  return (
    <S.Container data-state={`#${activeSection}`}>
      <ProfileHeader active={activeSection !== 'about'} {...profile} />

      <S.Content active={activeSection !== 'about'}>
        <ProfileAboutSection
          active={activeSection === 'about'}
          description={profile.description}
          socialMedia={profile.socialMedia}
        />

        <ProfileExperienceSection
          active={activeSection === 'experience'}
          experiences={experiences}
        />

        <ProfileContactSection active={activeSection === 'contact'} />

        <ProfileMenu activeSection={activeSection} onClick={handleClick} />
      </S.Content>
    </S.Container>
  )
}

export default Profile
