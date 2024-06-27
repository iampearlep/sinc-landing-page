import Link from "next/link"


const CTA = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className="flex flex-col w-10/12 justify-center items-center">
        <div className='flex flex-col justify-center items-center text-center w-10/12'>
            <h2 className='text-6xl font-medium w-10/12 text-center pb-8 leading-tight'>Let&#39;s build companies that help everyone succeed</h2>
           <div className="flex flex-row gap-x-6 pb-10">
           <button className="hidden bg-[#f9f9f9] border border-[#303030] cursor-pointer lg:flex items-center px-6 py-3 capitalize text-[#303030] text-left rounded-full">
            <Link href="">SINC with us</Link>
          </button>
          <button className="bg-[#303030] cursor-pointer hidden lg:flex items-center px-6 py-3  text-white rounded-full">
            <Link href="">
             Apply to SIP 1.0
            </Link>
          </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
