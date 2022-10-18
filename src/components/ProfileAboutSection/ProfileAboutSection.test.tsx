import { render, screen } from '@testing-library/react'
import ProfileAboutSection from './ProfileAboutSection'

describe('ProfileAboutSection | component | unit test', () => {
  it('should render with success', () => {
    render(<ProfileAboutSection>ProfileAboutSection</ProfileAboutSection>)

    expect(screen.getByText('ProfileAboutSection')).toBeInTheDocument()
  })
})
