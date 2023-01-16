import { useEffect, useRef } from 'react'

import { Card } from '@/lib/types'
import { useSpring, animated } from '@react-spring/web'

const cards: Array<Card> = [
  {
    id: 1,
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-1.jpg'
  },
  {
    id: 2,
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-2.jpg'
  },
  {
    id: 3,
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-3.jpg'
  },
]

const StackedCards = () => {
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [props, set] = useSpring(() => ({
    from: { y: 0 },
    to: { y: 0 }
  }))

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          set({ y: index + 1 })
        } else {
          set({ y: 0 })
        }
      })
    })

    cardsRef.current.forEach((card) => {
      observer.observe(card)
    })
  }, [set])


  return (
    <ul className='w-full flex flex-col gap-4 h-[200vh]'>
      {cards.map((card) => (
        <animated.div
          key={card.id}
          role='listitem'
          ref={(el) => cardsRef.current[card.id] = el as HTMLDivElement}
          className='transition-transform w-full sticky top-[5vh] overflow-hidden shadow-lg border-pink-200 rounded-lg origin-[center_top] mb-lg'
          style={{
            willChange: 'background, transform',
            transform: props.y.to((y) => `translate3d(0px, -${10 * y}px, 0px)`),
            transformStyle: 'preserve-3d'
          }}
        >
          <img className='aspect-[2/1] abolute top-0 left-0 w-full h-full object-cover' src={card.imageUrl} alt="" />
        </animated.div>
      ))
      }
    </ul >
  )
}

export default StackedCards
