
'use client'
import { useRef } from "react";
import Navbar from "./components/navbar";
import Tabs from "./components/Tabs";
import leftphone from '../../public/leftphone.svg'
import middlephone from '../../public/middlephone.svg'
import rightphone from '../../public/rightphone.svg'
import background from '../../public/background.png'
import Image from "next/image";

export default function Home() {
  const ref = useRef(null)
  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main>
      <div>
        <Navbar />
        <section className="bg-gray-200 h-full">
          <div className="flex justify-between flex-col md:flex-row max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
            <div className="w-full md:w-2/4 lg:mt-0 lg:col-span-5 flex px-6 sm:px-16 md:px-0 md:py-0 py-10 md:pr-10">
              <Image src={background} alt="mockup" className="w-full object-contain" />
            </div>
            <div className="place-self-center w-full md:w-2/4 md:pl-16">
              <span className="text-sm font-extrabold text-[#38E0B2] mb-1">Just launched in Kingston, UK</span>
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight md:text-3xl xl:text-4xl">
                Plumber prices are crazy. Get
                your home&apos;s BANG! code to
                unlock discounted prices on
                plumbers and more.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Your home gets 1 BANG! in each category every year
                and they can be used by you or anyone you live with.
                BANG!S are designed to save your household big bucks.
              </p>
              <div className="flex flex-wrap">
                <a
                  href="#"
                  className="sm:h-12 h-9 inline-flex items-center justify-center px-5 mr-4 text-sm sm:text-base font-medium text-center bg-primary-700 hover:bg-primary-800 border-2 border-black mb-3"
                >
                  More Info
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <button onClick={handleScroll}
                  className="inline-flex items-center justify-center px-5 sm:h-12 h-9 text-sm sm:text-base font-medium text-center text-white border bg-[#FB2A63] border-none hover:bg-[#fb2a62dd] focus:ring-4 focus:ring-gray-100 mb-3"
                >
                  Tradesperson BANG!
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className=" bg-white relative pt-4 pl-0 sm:pl-10 pb-20">
        <div className="absolute top-0 right-0 bg-gray-200 h-full w-1/2 z-10" />
        <div style={{
          backgroundColor: '#112F51'
        }} className="mt-16 sm:ml-20 ml-0 relative z-20">
          <div className="grid max-w-screen-xl px-4 py-8 sm:pl-14 pl-4 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-white">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
                Goodbye £70+ an hour
                plumbers. Hello your home&apos;s
                2023 BANG! price.
              </h1>
              <p className="max-w-2xl mb-5 font-light text-white lg:mb-8 text-lg dark:text-gray-400">
                A BANG! is an exclusive price for your home. We&apos;ve
                just launched the Tradesperson BANG! so you
                cansave BIG on your next home repair job.
                <br />
                <br />
                Use your home&apos;s 2023 Tradesperson BANG! to save BIG on popular plumbing jobs
              </p>
            </div>
            <div className="lg:px-0 sm:px-14 px-5 lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={background} alt="mockup" className="w-full object-contain" />
            </div>
          </div>
          <div className="flex justify-start sm:justify-center md:justify-between flex-wrap text-white max-w-screen-xl px-4 py-2 mx-auto lg:py-8">
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Block Toilets Sinks, Pipes and Drains
              </div>
            </div>
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Burst Pipes
              </div>
            </div>
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Floods
              </div>
            </div>
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Hot Water Problems
              </div>
            </div>
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Overflows
              </div>
            </div>
            <div className="w-full sm:w-[170px] md:w-[calc(100%/6)] flex sm:block items-center px-1.5 py-2 text-start sm:text-center">
              <img className="inline-block mr-3 sm:mr-0 mb-2" src="./circle-tick.png" />
              <div>
                Pipe Replacements
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-20 px-4 sm:px-8 md:px-16">
        <div className="px-0 sm:px-4 md:px-16 pt-7 pb-5">
          <h2 className="text-start sm:text-center text-3xl font-bold text-[#292929] mb-5 sm:mb-10">Need a tradesperson? The first price you should check is your home's 2023 BANG! price.</h2>
          <h3 className="text-start sm:text-center text-lg font-light text-[#292929] mb-5 sm:mb-10">Check your address Get your BANG! price Book the job</h3>
        </div>
        <div className="flex items-start justify-center flex-wrap">
          <div className="w-[330px]">
            <h3 className="text-lg font-bold text-center mb-4">Your customer enters their email address on your form</h3>
            <Image src={leftphone} className="w-full" />
            <p className="text-base font-light text-center mt-4">The next time you need a tradespersson just all your local team to get an estimate. We'll confirm your BANG!</p>
          </div>
          <div className="w-[330px] mx-0 md:mx-16">
            <h3 className="text-lg font-bold text-center mb-4">Your customer enters their email address on your form</h3>
            <Image src={middlephone} className="w-full" />
            <p className="text-base font-light text-center mt-4">The next time you need a tradespersson just all your local team to get an estimate. We'll confirm your BANG!</p>
          </div>
          <div className="w-[330px]">
            <h3 className="text-lg font-bold text-center mb-4">Your customer enters their email address on your form</h3>
            <Image src={rightphone} className="w-full" />
            <p className="text-base font-light text-center mt-4">The next time you need a tradespersson just all your local team to get an estimate. We'll confirm your BANG!</p>
          </div>
        </div>
      </section>

      <section className="relative" ref={ref}>
        <h1 className="text-start px-4 sm:text-center text-3xl font-bold text-blue-950 pt-16 pb-6 md:py-16">Your home&apos;s Tradesperson 2023 BANG!</h1>
        <Tabs />
      </section>


    </main>
  )
}
