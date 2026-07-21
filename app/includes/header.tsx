"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (

    <header className="w-full bg-gray-50 lg:bg-gray-100">

        {/* header container */}
        <div className="w-full flex justify-between items-center max-w-7xl px-5 lg:px-7 lg:mx-auto">

            <div className='w-full lg:w-auto flex lg:inline-flex justify-between items-center gap-5 py-3'>

                {/* logo link */}
                <Link href="/" className="text-lg text-black font-medium duration-500 hover:text-green-600 cursor-pointer">
                    Food Store Inc.
                </Link>

                {/* button toggle open */}
                <button type='button' onClick={() => setIsOpen(true)} className='min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] rounded-full inline-flex justify-center items-center bg-gray-200 lg:hidden cursor-pointer'>
                    ☰
                </button>

            </div>

            {/* menu */}
            <div ref={menuRef} className={`min-w-[320px] top-0 bottom-0 end-0 fixed lg:static lg:w-auto lg:flex justify-end items-center gap-3 bg-gray-50 lg:bg-gray-100 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>

                {/* button toggle close */}
                <div className='flex justify-end items-center lg:hidden p-3'>
                    <button type="button" onClick={() => setIsOpen(false)} className='min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] rounded-full inline-flex justify-center items-center bg-gray-200 cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                </div>

                {/* link */}
                {[
                    { name: 'Home', href: '/' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact Us', href: '/contact' },
                    { name: 'Blogs', href: '/blogs' },
                    { name: 'Products', href: '/products' },
                    { name: 'Cart [0]', href: '/cart' },
                    { name: 'Login', href: '/login' },
                    { name: 'Registration', href: '/registration' },
                ].map((link) => (
                  <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-xs block lg:inline-block py-2 px-3 lg:p-0 font-medium duration-500 hover:text-green-600 cursor-pointer ${ isActive(link.href) ? 'text-green-600' : 'text-black' }`}>
                    {link.name}
                  </Link>
                ))}

            </div>

        </div>
        
    </header>

  );
}