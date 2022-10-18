import { render, screen } from '@testing-library/react'
import ProfileExperienceSection from './ProfileExperienceSection'

describe('ProfileExperienceSection | component | unit test', () => {
  it('should render with success', () => {
    render(<ProfileExperienceSection>ProfileExperienceSection</ProfileExperienceSection>)

    expect(screen.getByText('ProfileExperienceSection')).toBeInTheDocument()
  })
})
