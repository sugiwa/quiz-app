import { ReactNode, useState } from 'react'
import Overlay from '@atom/Overlay'
import NavigationDrawer from '@molecule/NavigationDrawer'
import Header from '@organism/Header'

type ToggleNavBar = () => void

const Layout = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleNavBar: ToggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-secondary'>
      <Header toggleNavBar={() => toggleNavBar} />
      <Overlay isOpen={isOpen} toggleNavBar={() => toggleNavBar} />
      <NavigationDrawer isOpen={isOpen} />
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
