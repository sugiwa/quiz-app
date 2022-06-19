import Head from 'next/head'
import Link from 'next/link'

import { useState } from 'react'
import HeaderLink from '../atom/HeaderLink'

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Head>
        <title>Quiz App</title>
        <meta name='description' content='Generated by created next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='bg-primary'>
        <nav className='flex items-center justify-between flex-wrap p-6'>
          <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <span className='font-semibold text-xl tracking-tight'>Quiz App</span>
          </div>
          <div className='block lg:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='flex items-center px-3 py-2 border rounded text-white border-white hover:text-secondary hover:border-secondary'
            >
              <svg
                className='fill-current h-3 w-3'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
          {isOpen ? (
            <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
              <div className='text-sm lg:flex-grow'>
                <HeaderLink href='/' linkTitle='Docs' />
                <HeaderLink href='/TopPage' linkTitle='Top Page' />
                <HeaderLink href='/Quiz' linkTitle='Quiz' />
              </div>
              <div>
                <Link href=''>
                  <a
                    href='#'
                    className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
                  >
                    Sign in
                  </a>
                </Link>
              </div>
            </div>
          ) : (
            <></>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header