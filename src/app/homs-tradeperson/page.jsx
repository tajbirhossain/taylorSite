"use client"

import React, { useState } from 'react'
import greenTick from '../../../public/check-circle.svg'
import greenClose from '../../../public/x-circle.svg'
import Image from 'next/image';
import Link from 'next/link';


const Page = () => {
    const [show, setShow] = useState(false);
    const [isNext, setIsNext] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = e => {
        // action="https://formbold.com/s/FORM_ID" method="POST"
        e.preventDefault()
        handleShow()
    }

    const goNext = () => {
        setIsNext(true)
        setShow(false)
    }


    return (
        <div className='homs-tradeperson'>
            <section className="relative">
                <div className="w-full sm:w-3/5 sm:px-0 px-5 m-auto flex justify-between bg-white my-20 relative after:content[''] after:w-[calc(100%-120px)] sm:after:w-[calc(100%-80px)] after:h-[1px] after:absolute after:top-7 after:right-5 sm:after:right-0 after:bg-[#C8C8C8]">
                    <div className="w-fit text-center flex items-center flex-col z-10">
                        <span className="bg-[#FB2A63] w-10 h-10 flex items-center justify-center mt-2 text-white">1</span>
                        <h3 className="mt-3 font-bold text-[#434343]">Check Bang! availability</h3>
                    </div>
                    <div className="w-fit text-center flex items-center flex-col z-10">
                        <span className="w-10 h-10 flex items-center justify-center mt-2 text-white" style={{ backgroundColor: isNext ? "#FB2A63" : "gray" }}>2</span>
                        <h3 className="mt-3 font-bold text-[#a1a1a1]">Book</h3>
                    </div>
                </div>
            </section>
            <div>
                <section className=" bg-white relative pt-4 pl-4 lg:pl-10 pr-4 lg:pr-0" style={{ display: isNext ? "none" : "block" }}>
                    <div className="absolute lg:top-3 bottom-0 lg:bottom-0 right-0 mt-4 bg-gray-200 h-[calc(100%-340px)] lg:h-full lg:w-1/3 w-3/4 z-10">
                    </div>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
                        <div className="my-auto lg:bg-transparent bg-white w-full mb-14 lg:mb-0">
                            <p className="font-normal">
                                Let&apos;s see if BANG!S are available <br />
                                where you live .
                            </p>
                            <div>
                                <div class="flex flex-col mt-8">
                                    <div className='mb-6'>
                                        <label className="uppercase text-sm font-bold opacity-70 text-pink-600 mb-3 block">Enter postcode</label>
                                        <div className="flex pr-0 lg:pr-20">
                                            <input type="text" placeholder="W2 5QX" className="py-2 px-2 w-full sm:w-full bg-[#F1F1F1] rounded border-2 border-[#F1F1F1] focus:border-slate-200 focus:outline-none" />
                                            <input type="submit" class="py-2 px-5 bg-[#FB2A63] text-white text-sm font-extralight hover:bg-ping-500 cursor-pointer ease-in-out duration-300" value="Find Address" />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="flex flex-col mt-2">
                                                <div>
                                                    <label className="uppercase text-sm font-bold opacity-70 text-pink-600 mb-3 block">Select an address</label>
                                                    <div className="flex pr-0 lg:pr-20">
                                                        <select class="sm:w-full w-full py-2 px-3  bg-[#F1F1F1] border-2 border-[#F1F1F1] focus:border-slate-200 focus:outline-none">
                                                            <option value="">98 results</option>
                                                            <option value="">Ruby</option>
                                                            <option value="">Python</option>
                                                            <option value="">PHP</option>
                                                            <option value="">Java</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-[#112F51] px-4 sm:px-14 relative z-20">
                            <div className="mx-auto w-full max-w-full lg:max-w-[700px] px-7 lg:px-12 py-8">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="mb-1 block text-base font-semibold text-white"
                                        >
                                            Address line 1
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="w-full  bg-[rgba(255,255,255,0.2)] py-2 px-4 text-base font-medium  outline-none"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email"
                                            className="mb-1 block text-base font-semibold text-white"
                                        >
                                            Address line 2
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="w-full  bg-[rgba(255,255,255,0.2)] py-2 px-4 text-base font-normal  outline-none"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="subject"
                                            className="mb-1 block text-base font-semibold text-white  "
                                        >
                                            Town/City
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            placeholder="Enter your subject"
                                            className="w-full  bg-[rgba(255,255,255,0.2)] py-2 px-4 text-base font-normal  outline-none"
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="subject"
                                            className="mb-1 block text-base font-semibold text-white  "
                                        >
                                            Postcode
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="w-1/2   bg-[rgba(255,255,255,0.2)] py-2 px-4 text-base font-normal  outline-none"
                                        />
                                    </div>
                                    <div>
                                        <button className="hover:shadow-form bg-[#FB2A63] py-3 px-8 text-base font-semibold text-white outline-none">
                                            Are BANG!S available
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ display: isNext ? "block" : "none" }}>
                    <section className="mt-20">
                        <div className="grid max-w-screen-xl px-4 py-8 pt-0 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
                            <p className="font-medium text-2xl text-center text-gray-600">Let&apos;s get YOUR 2023 BANG! Price.Great! Now we know the Tradesperson BANG! is available where you live you can tell us about the job</p>
                        </div>
                    </section>
                    <section className="mt-20 relative">
                        <div className="absolute top-3 left-0 mt-4 bg-gray-200 h-[250px] lg:h-full lg:w-1/3 w-3/4 z-10">
                        </div>
                        <div className="absolute lg:top-3 bottom-0 right-0 mt-4 bg-gray-200 h-[370px] lg:h-full w-3/4 lg:w-1/3 z-10">
                        </div>
                        <div className="mt-16 lg:ml-20 relative z-20 py-8 pb-4">
                            <div className="grid max-w-screen-xl gap-4 px-4 py-8 mx-auto lg:gap-8  lg:py-8 lg:grid-cols-2 text-white">
                                <div className=" bg-[#112F51] p-8 mb-28 lg:mb-0">
                                    <div className="flex gap-4 sm:gap-8 mb-4">
                                        <img className="w-10 min-w-[40px] object-contain" src="./phone.png" alt="phone" />
                                        <div>
                                            <p className="text-white text-lg font-medium">
                                                Ready for an estimate?
                                                Call the team today
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-white text-lg font-medium sm:mt-12 mt-7">
                                            (207) 555-0119
                                        </p>
                                    </div>
                                </div>
                                <div className=" bg-[#112F51] p-8">
                                    <div className="flex gap-4 sm:gap-8">
                                        <div>
                                            <img src="./envelope.png" alt="" className='w-10 min-w-[40px]' />
                                        </div>
                                        <div className="col-span-8">
                                            <p className="text-white text-lg font-medium">
                                                Not quite ready? No problem  you can get you home&apos;s BANG!
                                                Code by email
                                            </p>
                                            <div className="mt-8">
                                                <form action="https://formbold.com/s/FORM_ID" method="POST">
                                                    <div className="mb-5">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Enter your email"
                                                            className="w-full bg-[rgba(255,255,255,0.2)] py-2 px-4 text-base font-medium text-white outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <button className="hover:shadow-form bg-[#FB2A63] py-1.5 px-8 text-base font-semibold text-white outline-none">
                                                            Send
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            <div className="font-raleway w-screen h-screen fixed top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] z-40" style={{ display: show ? "block" : "none" }}>
                <div className='w-[420px] max-w-[90%] bg-[#2A2A35] text-white text-center flex items-center justify-center flex-col rounded-xl py-10 pb-7 px-10 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] z-40'>
                    <Image src={greenTick} className='mb-4' />
                    <h3 className='text-xl font-extrabold mb-3'>Great News!</h3>
                    <p className='text-base mb-4'>BANG!S are available where you live. Once we knowthe job you need doing we can give you your home&apos;sBANG! price.</p>
                    <button className='text-white bg-[#36E39A] px-8 py-2.5 rounded-3xl' onClick={goNext}>Next</button>
                </div>
                <div className='w-screen h-screen fixed top-0 left-0 bg-[#00000072] z-30' style={{ display: show ? "block" : "none" }} onClick={handleClose} />
            </div>
        </div>
    )
}

export default Page