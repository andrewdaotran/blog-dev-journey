import { hero } from '../utils/blogData'

const Hero = () => {
  const arr: number[] = [1, 2, 3, 4]
  return (
    <div className="mx-6 ">
      <div className="mx-auto grid max-w-7xl border-b-2 border-black pb-12 md:grid-cols-3">
        <div className="md:col-span-1"></div>
        <div className=" flex flex-col   md:col-span-2 ">
          <h1 className="text-6xl sm:text-[5rem]  ">{hero.title}</h1>
          <p className="mt-12 text-lg xl:text-2xl">{hero.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
