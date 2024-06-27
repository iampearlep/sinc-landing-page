

const Newsletter = () => {
  return (
    <div className="bg-[#212121] flex flex-col justify-center items-center mx-auto py-12">
      <div className="flex flex-col w-11/12 md:w-10/12 justify-start items-start">
        <div className='flex flex-col justify-start items-start text-[#ffffff] md:w-7/12'>
            <h3 className='text-xl md:text-5xl font-semibold md:w-10/12 pb-8 leading-tight'>Newsletter</h3>
            <p className="text-[14px] md:text-[16px]">Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        </div>
        <div className="pt-7 md:pt-14 w-full md:w-2/3">
        <input
                type="email"
                placeholder="Enter your email address"
                className="bg-[#212121] px-4 py-2 md:px-8 md:py-4 border border-white w-full md:w-9/12 rounded-full placeholder:text-[#a4a4a4] placeholder:text-sm md:placeholder:text-md placeholder:font-medium relative"
              />
              <button className=" bg-[#ffffff] px-5 py-2.5 md:px-12 md:py-4 rounded-full text-[13px] md:text-[17px] font-semibold border  border-[#ffffff] absolute -ml-24 md:-ml-24">
                Suscribe
                </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter


