import { render, screen } from '@testing-library/react'

import App from '@/App'
import { describe, expect, it } from 'vitest'

describe('Example', () => {
  it('should render Example correctly', () => {
    render(<App />)

    expect(screen.getByText('Hello, world')).toBeInTheDocument()
  })
})
