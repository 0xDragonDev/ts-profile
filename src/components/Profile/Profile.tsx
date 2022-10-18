import { useState } from 'react'
import {
  ProfileAboutSection,
  ProfileContactSection,
  ProfileExperienceSection,
  ProfileHeader,
  ProfileMenu
} from 'components'
import * as S from './styles'

const mock = {
  profile: {
    name: 'Eder Sampaio',
    jobTitle: 'Front-End Developer',
    avatar:
      'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    description:
      'Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.',
    socialMedia: [
      { name: 'LinkedIn', url: 'https://linkedin.com' },
      { name: 'GitHub', url: 'https://github.com' }
    ]
  },
  experiences: [
    {
      year: '2022',
      title: 'Front-end Developer at JotForm',
      description: 'Disrupt stumptown retro everyday carry unicorn.'
    },
    {
      year: '2021',
      title: 'Front-end Developer at JotForm',
      description: 'Disrupt stumptown retro everyday carry unicorn.'
    },
    {
      year: '2020',
      title: 'Front-end Developer at JotForm',
      description: 'Disrupt stumptown retro everyday carry unicorn.'
    },
    {
      year: '2019',
      title: 'Front-end Developer at JotForm',
      description: 'Disrupt stumptown retro everyday carry unicorn.'
    }
  ]
}

function Profile() {
  const [activeSection, setActiveSection] = useState('about')

  function handleClick(section: string) {
    setActiveSection(section)
  }

  return (
    <S.Container data-state={`#${activeSection}`}>
      <ProfileHeader active={activeSection !== 'about'} {...mock.profile} />

      <S.Content active={activeSection !== 'about'}>
        <ProfileAboutSection
          active={activeSection === 'about'}
          description={mock.profile.description}
          socialMedia={mock.profile.socialMedia}
        />

        <ProfileExperienceSection
          active={activeSection === 'experience'}
          experiences={mock.experiences}
        />

        <ProfileContactSection active={activeSection === 'contact'} />

        <ProfileMenu activeSection={activeSection} onClick={handleClick} />
      </S.Content>
    </S.Container>
  )
}

export default Profile
