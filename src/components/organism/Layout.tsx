import { ReactNode } from 'react'
import Header from '@organism/Header'

const Layout = ({ children }: Props) => {
  return (
    <div className='bg-secondary'>
      <Header />
      <main className='container text-center mx-auto bg-background min-h-screen max-w-xs sm:max-w-xl md:max-w-xl lg:max-w-4xl xl:max-w-5xl'>
        {children}
      </main>
    </div>
  )
}

type Props = {
  children?: ReactNode
}

export default Layout
