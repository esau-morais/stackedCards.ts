import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <a
          className='bg-neutral-900 text-white p-4 absolute -translate-y-full focus:translate-y-0 left-2 transition-transform'
          href="#stackedCards"
        >
          Skip to stacked cards
        </a>
      </header>
      <main data-testid='viewport' className='max-w-4xl mx-2 md:mx-auto flex flex-col items-center justify-center'>
        {children}
      </main>
      <footer className='w-full flex items-center justify-center space-x-2 py-8'>
        <span>Copyright © 2023</span>
        <a
          className='underline decoration-wavy underline-offset-4'
          href="https://links.dev"
          target="_blank"
          rel="noreferrer">
          Esaú Morais
        </a>
      </footer>
    </>
  )
}

export default Layout
