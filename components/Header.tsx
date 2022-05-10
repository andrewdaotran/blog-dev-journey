const Header = () => {
  return (
    <header className=" bg-cultured">
      <div className="mx-auto  flex max-w-7xl  justify-between py-6 px-16">
        <h1 className="">Logo</h1>
        <h1 className="hidden sm:inline-flex">
          <span className="pr-2">(415) 810.9777</span> /{' '}
          <span className="pl-2">andrewdaotran@gmail.com</span>
        </h1>
        <h1 className="">About Me</h1>
      </div>
    </header>
  )
}

export default Header
