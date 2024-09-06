'use client'
import Image from "next/image";
import bars from '../../../public/bars.svg'
import shape from '../../../public/shape-curve.svg'
import right from '../../../public/right.svg'

export default function Navbar() {
  return (
    <header className="w-full h-[43px] min-[400px]:h-[55px] sm:h-[70px] relative  text-gray-700 bg-gray-200  body-font overflow-hidden">
      <div className="min-w-full h-full container flex items-center justify-between pr-0 md:pr-6 pl-0 z-10">
        <div className="h-full flex items-center">
          <Image src={bars} className="h-full w-fit cursor-pointer" />
          <a className="h-full flex items-center font-medium text-gray-900 title-font">
            <Image src="/logo.svg" alt="logo" className="h-full w-fit" width={100} height={100} />
          </a>
          <nav className="flex flex-wrap items-center justify-center pl-2 sm:pl-6 ml-3 text-base border-l border-gray-200">
            <a href="#_" className="mr-5 font-light text-sm sm:text-lg hover:text-gray-900">
              By alices
            </a>
          </nav>
        </div>

        <div className="flex items-center justify-end h-full z-10">
          <a href="#_" className="mr-8 text-sm font-semibold bg-[#FB2A63] py-2 px-3 text-white hover:text-gray-900 hidden md:block">
            Start free trial
          </a>
          <a href="#_" className="rounded text-base font-bold text-black px-4 py-2 hover:text-gray-900 flex items-center">
            <Image src={right} className="h-5 sm:mr-2 mr-0" />
            <span className="sm:block hidden">
              Login
            </span>
          </a>
        </div>
      </div>
      <Image src={shape} className="h-full absolute right-[-70px] min-[400px]:right-[-80px] sm:right-[-40px] md:right-0 top-0" />
    </header>


  )
}
