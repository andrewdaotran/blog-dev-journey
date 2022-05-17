import Post from './Post'

const Hero = () => {
  const arr: number[] = [1, 2, 3, 4]
  return (
    <div className="mx-6 ">
      <div className="mx-auto  grid max-w-7xl border-b-2 border-black pb-12 md:grid-cols-3">
        <div className="md:col-span-1"></div>
        <div className=" flex flex-col   md:col-span-2 ">
          <h1 className="text-6xl sm:text-[5rem]  ">Latest Updates</h1>
          <p className="mt-12 text-lg xl:text-2xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
            autem ad debitis in tempore. Quos cum aliquam, exercitationem non
            natus quaerat perspiciatis, nemo et ad nobis minima harum? Voluptas,
            neque!
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center"></div>

      <div className="mx-auto mt-16 grid  grid-cols-1 justify-items-center gap-6 border md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {arr.map((num) => (
          <Post key={num} />
        ))}
      </div> */}
    </div>
  )
}

export default Hero
