import Link from 'next/link';

export default function Home() {

  return (
    <div>

      <section className='px-5 mt-5'>
        <div className='w-full flex flex-wrap'>
          <div className='w-full sm:w-1/2 lg:w-2/4 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/products" className='min-h-[450px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/6289992/pexels-photo-6289992.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/products" className='min-h-[450px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/31970812/pexels-photo-31970812.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/4 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/products" className='min-h-[450px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/9001223/pexels-photo-9001223.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='px-7 mt-10'>
        <div className='flex justify-center items-center flex-col'>
          <div className='text-center text-xs font-medium mb-3'> CHOOSE FROM ANY THESE </div>
          <div className='text-center text-xl font-medium mb-5'> Categories </div>
          <div className='flex justify-center items-center gap-3 flex-wrap max-w-5xl'>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Fruits </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Vegetables </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Grains </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Proteins </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Dairy </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Fats & Oils </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Sweets & Desserts </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Beverages </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Snacks </Link>
            <Link href="/products" className='bg-gray-100 shadow-sm duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm'> Condiments & Spices </Link>
          </div>
        </div>
      </section>

      <section className='px-5 mt-10'>
        <div className='text-center text-xs font-medium mb-3'> OUR PRODUCT </div>
        <div className='text-center text-xl font-medium mb-5'> Explore new products </div>
        <div className='w-full flex flex-wrap'>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/14853731/pexels-photo-14853731.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/9993754/pexels-photo-9993754.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJt1OT3sRTVPZ89EyCcj9kI48DBq3lMEvBF99CvCBxGBaTR79Gr9KTzed3&s=10')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://247wallst.com/wp-content/uploads/2020/07/Double-Western-Bacon-Cheeseburger-.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Crispy-Mushroom-Carbonara-1bbdb44.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/product-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.immediate.co.uk/production/volatile/sites/2/2025/04/CreamyTuscanChicken-copypreview-fd473a7.jpg?quality=90&resize=700,466')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='px-5 mt-10'>
        <div className='text-center text-xs font-medium mb-3'> OUR BLOGS </div>
        <div className='text-center text-xl font-medium mb-5'> Explore new blogs </div>
        <div className='w-full flex flex-wrap'>
          <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/blog-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/9685275/pexels-photo-9685275.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/blog-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/11299742/pexels-photo-11299742.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/blog-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/37049945/pexels-photo-37049945.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
          <div className='w-full sm:w-1/2 lg:w-1/2 p-2'>
            <div className="overflow-hidden rounded-md">
              <Link href="/blog-details" className='min-h-[350px] block duration-500 scale-100 hover:scale-115 opacity-100 hover:opacity-75' style={{ backgroundImage: "url('https://images.pexels.com/photos/21033174/pexels-photo-21033174.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>  </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
