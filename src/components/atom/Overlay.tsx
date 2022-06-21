type Props = {
  isOpen: boolean
  toggleNavBar: () => void
}

const Overlay = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <div
          className='bg-black bg-opacity-25 w-full h-full fixed top-0'
          onClick={props.toggleNavBar()}
        ></div>
      )}
    </>
  )
}

export default Overlay
