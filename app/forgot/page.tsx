import Link from "next/link";

export default function Forgot() {
  return (
    <div>

      <section className='px-7 mt-5'>
          <div className="flex min-h-[75vh] items-center justify-center">
            <div className="w-full max-w-[420px] rounded-md border border-gray-200 p-5">
              <div className="text-center text-lg font-medium pt-5"> Account </div>
              <div className="text-center text-xs font-medium mb-5"> Please enter your username or email address </div>
              <div className="w-full mb-3 block">
                <label htmlFor="label-email" className="w-full mb-2 block text-xs font-medium"> Email </label>
                <input type="email" name="email" id="label-email" className="w-full border border-gray-200 min-h-[45px] max-h-[45px] rounded-sm outline-0 ring-0 duration-500 focus-within:ring-2 ring-gray-300 text-xs px-4" />
              </div>
              <div className="w-full block mb-5">
                <button type="button" className="w-full flex justify-center items-center min-h-[45px] max-h-[45px] rounded-sm cursor-pointer bg-gray-200 text-xs font-medium duration-500 hover:text-white hover:bg-green-600"> Reset Account </button>
              </div>
              <div className="w-full block text-center text-xs">
                Remember Password? <Link href="/login" className="decoration-0 text-blue-700 text-xs"> login </Link>
              </div>
            </div>
          </div>
      </section>

    </div>
  );
}