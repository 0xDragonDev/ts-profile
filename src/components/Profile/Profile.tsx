import { useEffect, useState } from 'react'
import {
  ProfileAboutSection,
  ProfileContactSection,
  ProfileExperienceSection,
  ProfileHeader,
  ProfileMenu
} from 'components'
import { profile, experiences } from 'data/profile.json'
import * as S from './styles'

function Profile() {
  const [activeSection, setActiveSection] = useState('about')

  function resetContainerScroll() {
    document.querySelector(S.Container)?.scrollTo(0, 0)
  }

  function handleClick(section: string) {
    setActiveSection(section)
  }

  useEffect(() => {
    resetContainerScroll()
  }, [activeSection])

  return (
    <S.Container id="container" data-state={`#${activeSection}`}>
      <ProfileHeader active={activeSection !== 'about'} {...profile} />

      <S.Content active={activeSection !== 'about'}>
        <ProfileAboutSection
          active={activeSection === 'about'}
          description={profile.description}
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
