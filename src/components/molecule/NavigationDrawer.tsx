import TextLink from '@atom/TextLink'

type Props = {
  isOpen: boolean
}

const NavigationDrawer = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <nav className='bg-white fixed top-0 h-full w-2/3 sm:w-1/6'>
          <ul>
            <li>
              <TextLink title='Index' href='/' />
            </li>
            <li>
              <TextLink title='Top Page' href='/TopPage' />
            </li>
            <li>
              <TextLink title='Quiz' href='/Quiz' />
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}

export default NavigationDrawer
