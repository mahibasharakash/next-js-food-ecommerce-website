import Link from "next/link";
import { relative } from "path";

export default function Contact() {
  return (
    <div>

      {/* breadcrumb */}
      <section className="w-full min-h-[250px] max-h-[250px] relative mt-5 px-7">
        <div className="min-h-[250px] max-h-[250px] w-full block" style={{ backgroundImage: "url('https://demo.cmssuperheroes.com/themeforest/raworganic/wp-content/uploads/2018/10/banner-faq.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="absolute min-h-[250px] max-h-[250px] inset-0 flex justify-center items-center">
          <div className="inline-flex justify-center items-center flex-col gap-1 bg-white/85 px-10 py-3 rounded-md">
            <div className="text-lg font-medium"> Contact Us </div>
            <div className="inline-flex justify-center items-center gap-1">
              <Link href="/" className="decoration-0 text-black text-sm font-medium"> Home </Link>
              -
              <Link href="/contact" className="decoration-0 text-black text-sm font-medium"> Contact Us </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='px-7 mt-5 flex justify-center items-center'>
        <div className='max-w-[750px] w-full'>
          <div className="text-lg mb-2 font-medium block w-full"> Leave Us A Message </div>
          <div className="text-xs mb-5 block w-full"> We’ll aim to get back to your query within the same working day! </div>
          <div className="w-full flex flex-wrap">
            <div className="mb-3 block w-full md:w-1/2 md:pe-3">
              <label htmlFor="name" className="w-full block mb-2 text-xs font-medium"> Name </label>
              <input type="text" name="name" id="name" className="w-full block min-h-[45px] max-h-[45px] rounded-md border border-gray-200 duration-500 ring-0 focus-within:ring-2 ring-green-700 outline-0 px-3.5" required autoComplete="off" />
            </div>
            <div className="mb-3 block w-full md:w-1/2">
              <label htmlFor="email" className="w-full block mb-2 text-xs font-medium"> Email </label>
              <input type="text" name="email" id="email" className="w-full block min-h-[45px] max-h-[45px] rounded-md border border-gray-200 duration-500 ring-0 focus-within:ring-2 ring-green-700 outline-0 px-3.5" required autoComplete="off" />
            </div>
            <div className="mb-3 block w-full md:w-1/2">
              <label htmlFor="subject" className="w-full block mb-2 text-xs font-medium"> Subject </label>
              <input type="text" name="subject" id="subject" className="w-full block min-h-[45px] max-h-[45px] rounded-md border border-gray-200 duration-500 ring-0 focus-within:ring-2 ring-green-700 outline-0 px-3.5" required autoComplete="off" />
            </div>
          </div>
          <div className="mb-3 block w-full">
            <label htmlFor="message" className="w-full block mb-2 text-xs font-medium"> Message </label>
            <textarea name="message" id="message" cols={30} rows={10} className="w-full block rounded-md border border-gray-200 duration-500 ring-0 focus-within:ring-2 ring-green-700 outline-0 p-3.5" required autoComplete="off"></textarea>
          </div>
          <div className="block w-full">
            <button type="button" className="bg-gray-100 flex justify-center items-center w-full min-h-[45px] max-h-[45px] duration-500 hover:bg-green-700 text-black hover:text-white text-black px-4.5 py-2 inline-block cursor-pointer text-xs rounded-sm">
              Submit
            </button>
          </div>
        </div>
      </section>

      <section className="px-7 mt-5">
        <div className="mapouter" style={{ position: 'relative', textAlign: 'right', width: '100%', height: '450px' }}>
          <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none!important', width: '100%', height: '450px' }}>
            <iframe width="100%" height="450px" style={{ width: '100%', border: '0' }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?q=kustia%20kumarkhali%20bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}