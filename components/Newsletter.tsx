

const Newsletter = () => {
  return (
    <div className="bg-[#212121] flex flex-col justify-center items-center mx-auto py-12">
      <div className="flex flex-col w-10/12 justify-start items-start">
        <div className='flex flex-col justify-start items-start text-[#ffffff] w-7/12'>
            <h3 className='text-5xl font-semibold w-10/12 pb-8 leading-tight'>Newsletter</h3>
            <p>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
        </div>
        <div className="pt-14 w-2/3">
        <input
                type="email"
                placeholder="Enter your email address"
                className="bg-[#212121] px-8 py-4 border border-white w-9/12 rounded-full placeholder:text-[#a4a4a4] placeholder:text-md placeholder:font-medium relative"
              />
              <button className=" bg-[#ffffff] px-12 py-4 rounded-full text-[17px] font-semibold  border-[#ffffff] absolute -ml-24">
                Suscribe
                </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter


