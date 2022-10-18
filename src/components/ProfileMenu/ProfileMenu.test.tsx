import { render, screen } from '@testing-library/react'
import ProfileMenu from './ProfileMenu'

describe('ProfileMenu | component | unit test', () => {
  it('should render with success', () => {
    render(<ProfileMenu>ProfileMenu</ProfileMenu>)

    expect(screen.getByText('ProfileMenu')).toBeInTheDocument()
  })
})
