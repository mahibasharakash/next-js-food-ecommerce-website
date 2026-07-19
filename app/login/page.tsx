import Link from "next/link";

export default function Login() {
  return (
    <div>

      <section className='px-7 mt-5'>
          <div className="flex min-h-[75vh] items-center justify-center">
            <div className="w-full max-w-[420px] rounded-md border border-gray-200 p-5">
              <div className="text-center text-sm font-medium pt-5 mb-4"> Login with your site account </div>
              <div className="w-full mb-3 block">
                <label htmlFor="label-email" className="w-full mb-2 block text-xs font-medium"> Email </label>
                <input type="email" name="email" id="label-email" className="w-full border border-gray-200 min-h-[45px] max-h-[45px] rounded-sm outline-0 ring-0 duration-500 focus-within:ring-2 ring-gray-300 text-xs px-4" />
              </div>
              <div className="w-full mb-3 block">
                <label htmlFor="label-password" className="w-full mb-2 block text-xs font-medium"> Password </label>
                <div className="w-full relative">
                  <input type="password" name="password" id="label-password" className="w-full border border-gray-200 min-h-[45px] max-h-[45px] rounded-sm outline-0 ring-0 duration-500 focus-within:ring-2 ring-gray-300 text-xs px-4" />
                  <div className="absolute top-0 bottom-0 end-0 pe-4 flex items-center">
                    <button type="button" className="p-0 m-0 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full mb-3 block text-end">
                <Link href="/forgot" className="decoration-0 text-red-500 text-xs"> Forgot Password </Link>
              </div>
              <div className="w-full block mb-5">
                <button type="button" className="w-full flex justify-center items-center min-h-[45px] max-h-[45px] rounded-sm cursor-pointer bg-gray-200 text-xs font-medium"> Login </button>
              </div>
              <div className="w-full block text-center text-xs">
                Not a member yet? <Link href="/registration" className="decoration-0 text-blue-700 text-xs"> Register now </Link>
              </div>
            </div>
          </div>
      </section>

    </div>
  );
}