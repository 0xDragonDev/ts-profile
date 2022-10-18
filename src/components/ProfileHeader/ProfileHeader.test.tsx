import { render, screen } from '@testing-library/react'
import ProfileHeader from './ProfileHeader'

describe('ProfileHeader | component | unit test', () => {
  it('should render with success', () => {
    render(<ProfileHeader>ProfileHeader</ProfileHeader>)

    expect(screen.getByText('ProfileHeader')).toBeInTheDocument()
  })
})
