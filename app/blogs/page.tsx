export default function Blogs() {
  return (
    <div>

      <section className='px-7 mt-5'>
        <div className='border border-gray-200 min-h-[250px] rounded-md'>
          
        </div>
      </section>

      <section className='px-5 mt-5'>
        <div className='w-full flex flex-wrap'>
          <div className='w-full lg:w-1/3'>
            <div className="mb-3 w-full block px-2">
              <div className="text-md font-medium block mb-3"> Search </div>
              <div className="w-full flex items-center">
                <input type="text" name="" placeholder="Enter your Search" className="w-full border border-gray-200 min-h-[45px] max-h-[45px] rounded-sm outline-0 ring-0 duration-500 focus-within:ring-2 ring-gray-300 text-xs px-4" />
              </div>
            </div>
            <div className="mb-3 w-full block px-2">
              <div className="text-md font-medium block mb-3"> Category </div>
              <div className="w-full flex flex-wrap gap-2">
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Fruits </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Vegetables </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Grains </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Proteins </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Dairy </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Fats & Oils </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Sweets & Desserts </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Beverages </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Snacks </a>
                <a href="javascript:void(0)" className="inline-block decoration-0 text-black duration-500 hover:text-gray-700 text-xs bg-gray-200 px-3 py-1 rounded-sm"> Condiments & Spices </a>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-2/3'>
            <div className="mb-3 w-full flex justify-end items-center">
              <div className="w-full max-w-[320px] relative">
                <select name="" id="" className="w-full border border-gray-200 min-h-[45px] max-h-[45px] rounded-sm outline-0 ring-0 duration-500 focus-within:ring-2 ring-gray-300 text-xs px-4 appearance-none cursor-pointer">
                  <option value=""> Newly Published </option>
                  <option value=""> Title a - z </option>
                  <option value=""> Title z - a </option>
                </select>
                <div className="absolute top-0 bottom-0 end-0 pe-4 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-wrap'>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
              <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
                <div className='border border-gray-200 min-h-[350px] rounded-md'>  </div>
              </div>
            </div>
            <div className='w-full flex justify-center items-center gap-2'>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center font-medium'>
                1
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center font-medium'>
                2
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center font-medium'>
                3
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center font-medium'>
                4
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center font-medium'>
                5
              </button>
              <button type="button" className='min-w-[35px] max-w-[35px] min-h-[35px] max-h-[35px] rounded-full text-xs cursor-pointer bg-gray-100 inline-flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="min-w-[17px] min-h-[17px] max-w-[17px] max-h-[17px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}