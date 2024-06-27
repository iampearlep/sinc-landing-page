import JobCard from "./JobCard"

const Jobs = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className="flex flex-col w-11/12 md:w-10/12 justify-center items-center">
        <div className='flex flex-col justify-center items-center text-center md:w-9/12'>
        <h2 className='text-xl md:text-5xl font-semibold md:w-10/12 text-center pb-8 leading-tight'>Equity jobs</h2>
        <p className="text-[14px] md:text-[16px]"> See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
        </div>
      </div>
      <div className="py-7 md:py-14 w-11/12 md:w-10/12">
      <JobCard />
      </div>
    </div>
  )
}

export default Jobs
