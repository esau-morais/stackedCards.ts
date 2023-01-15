import { useEffect, useRef, useState } from 'react'

const cards = [
  {
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-1.jpg'
  },
  {
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-2.jpg'
  },
  {
    imageUrl: 'https://codyhouse.co/app/assets/img/stacking-cards-img-3.jpg'
  },
]

const StackedCards = () => {
  const cardsRef = useRef<HTMLLIElement[]>([])
  const [transform, setTransform] = useState<string>()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // this could be better/dynamic
          setTransform('translateY(-10px) scale(0.95)')
        } else {
          setTransform('translateY(0px) scale(1)')
        }
      })
    })

    cardsRef.current.forEach((card) => {
      observer.observe(card)
    })
  }, [])

  return (
    <ul className='my-4 w-full pb-8 flex flex-col gap-4'>
      {cards.map((card, i) => (
        <li
          key={i}
          ref={(el) => {
            cardsRef.current[i] = el as HTMLLIElement
          }}
          className='transition-transform w-full top-5 overflow-hidden rounded-lg sticky origin-[center_top] mb-lg'
          // should apply to each element, but for now it is styling all of them
          style={{ transform }}
        >
          <img className='aspect-[2/1] abolute top-0 left-0 w-full h-full object-cover' src={card.imageUrl} alt="" />
        </li>
      ))
      }
    </ul >
  )
}

const App = () => {
  return (
    <main className='max-w-4xl mx-2 md:mx-auto py-32 flex flex-col items-center justify-center'>
      <h1 className='mb-2 text-4xl font-bold'>Stacked Cards</h1>
      <p>Scroll down to see the effect.</p>
      <StackedCards />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet dolorum laboriosam voluptatibus alias, numquam fugit corrupti libero quia. Rem, eligendi, numquam a sunt exercitationem reprehenderit iusto ullam eveniet recusandae molestiae, ea earum tenetur! Eum placeat veniam labore porro id omnis vitae reiciendis, dolor rem reprehenderit ipsam inventore repellat tempore autem architecto totam consequuntur sequi! Nesciunt corporis, delectus aut molestiae minus aspernatur repellendus? Enim amet id, natus quam quo nam consectetur alias omnis aperiam expedita quibusdam sit eum itaque corrupti possimus sed dolor dolorem nulla harum. Saepe quas maxime vel excepturi eaque quidem quis quasi exercitationem iste. Maxime blanditiis quisquam totam, corrupti consectetur fugit, dolorum quia accusamus quis necessitatibus veniam deserunt, beatae odio sit doloribus? Quaerat repellendus tenetur, consectetur quis aut voluptatibus esse quod nesciunt, repellat mollitia enim blanditiis velit quibusdam expedita molestiae architecto reprehenderit quae dolorum delectus? Soluta magni, sint suscipit voluptates facere fugit minima deleniti ut atque ab sequi voluptatum officia provident. Cupiditate sapiente, labore nostrum ducimus nesciunt alias eligendi necessitatibus cumque quidem repellendus illo voluptatum praesentium maiores aspernatur aliquam, inventore laborum veritatis molestias. Delectus pariatur fugiat qui unde modi incidunt totam ipsam libero natus eius, dolores iste placeat necessitatibus? Soluta qui nobis aspernatur enim veritatis similique placeat!
      </p>
    </main>
  )
}

export default App
