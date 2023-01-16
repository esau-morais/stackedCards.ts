import { render, screen } from '@testing-library/react'

import { Layout, StackedCards } from '@/components'
import { expect, it, vi } from 'vitest'

const Mock = vi.fn()
const intersectionObserverMock = () => ({
  observe: () => null
})
window.IntersectionObserver = Mock.mockImplementation(intersectionObserverMock)

const renderSut = () => render(
  <Layout>
    <StackedCards />
  </Layout>
)

describe('Layout', () => {
  it('should render all cards correctly', () => {
    renderSut()
    const cards = screen.getAllByRole('listitem')

    expect(cards).toHaveLength(3)
  })

  it('should render default styling when scroll event has not been triggered', () => {
    renderSut()

    expect(screen.getAllByRole('listitem')[0]).toHaveStyle('transform: translate3d(0px, 0px, 0px)')
  })

  // it should calls IntersectionObserver and transform vertically when scroll is triggered
})
