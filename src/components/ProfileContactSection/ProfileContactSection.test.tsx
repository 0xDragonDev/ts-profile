import { render, screen } from '@testing-library/react'
import ProfileContactSection from './ProfileContactSection'

describe('ProfileContactSection | component | unit test', () => {
  it('should render with success', () => {
    render(<ProfileContactSection>ProfileContactSection</ProfileContactSection>)

    expect(screen.getByText('ProfileContactSection')).toBeInTheDocument()
  })
})
