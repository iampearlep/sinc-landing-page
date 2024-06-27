import JobCard from "./JobCard"

const Jobs = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className="flex flex-col w-10/12 justify-center items-center">
        <div className='flex flex-col justify-center items-center text-center w-9/12'>
        <h2 className='text-5xl font-semibold w-10/12 text-center pb-8 leading-tight'>Equity jobs</h2>
        <p> See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
        </div>
      </div>
      <div className="py-14 w-10/12">
      <JobCard />
      </div>
    </div>
  )
}

export default Jobs
