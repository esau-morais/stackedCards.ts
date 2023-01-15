import { Layout, StackedCards } from './components'

const App = () => {
  return (
    <Layout>
      <section className='w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='mb-2 text-4xl font-bold'>Stacked Cards</h1>
        <p>
          Scroll down to see the effect.
          <span role="img" aria-label="scroll down">
            ⬇️
          </span>
        </p>
      </section>

      <section id='stackedCards'>
        <StackedCards />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet dolorum laboriosam voluptatibus alias, numquam fugit corrupti libero quia. Rem, eligendi, numquam a sunt exercitationem reprehenderit iusto ullam eveniet recusandae molestiae, ea earum tenetur! Eum placeat veniam labore porro id omnis vitae reiciendis, dolor rem reprehenderit ipsam inventore repellat tempore autem architecto totam consequuntur sequi! Nesciunt corporis, delectus aut molestiae minus aspernatur repellendus? Enim amet id, natus quam quo nam consectetur alias omnis aperiam expedita quibusdam sit eum itaque corrupti possimus sed dolor dolorem nulla harum. Saepe quas maxime vel excepturi eaque quidem quis quasi exercitationem iste. Maxime blanditiis quisquam totam, corrupti consectetur fugit, dolorum quia accusamus quis necessitatibus veniam deserunt, beatae odio sit doloribus? Quaerat repellendus tenetur, consectetur quis aut voluptatibus esse quod nesciunt, repellat mollitia enim blanditiis velit quibusdam expedita molestiae architecto reprehenderit quae dolorum delectus? Soluta magni, sint suscipit voluptates facere fugit minima deleniti ut atque ab sequi voluptatum officia provident. Cupiditate sapiente, labore nostrum ducimus nesciunt alias eligendi necessitatibus cumque quidem repellendus illo voluptatum praesentium maiores aspernatur aliquam, inventore laborum veritatis molestias. Delectus pariatur fugiat qui unde modi incidunt totam ipsam libero natus eius, dolores iste placeat necessitatibus? Soluta qui nobis aspernatur enim veritatis similique placeat!
        </p>
      </section>
    </Layout>
  )
}

export default App
