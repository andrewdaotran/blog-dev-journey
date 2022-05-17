import RecentPost from './RecentPost'

const Sidebar = () => {
  return (
    <div className=" border-l-2 border-black">
      <div className="ml-6 mr-4 border-b-2  border-black pb-4 ">
        <h3 className="font-bold">recent posts.</h3>
      </div>
      <RecentPost />
      <RecentPost />
      <RecentPost />
    </div>
  )
}

export default Sidebar
