import { render, screen } from '@testing-library/react'
import Profile from './Profile'

describe('Profile | component | unit test', () => {
  it('should render with success', () => {
    render(<Profile>Profile</Profile>)

    expect(screen.getByText('Profile')).toBeInTheDocument()
  })
})
