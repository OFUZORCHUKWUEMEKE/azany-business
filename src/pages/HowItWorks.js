import React from 'react';
import { Input } from "@material-tailwind/react";

const HowItWorks = () => {
    return (
        <div className='my-10'>
            <div className="m-auto w-[85%] bg-[#fff9fd] md:flex px-10 py-20 items-center gap-[10%] ">
                <div className="space-y-5">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.!</h1>
                    <div className="flex items-center ">
                        <div className="w-72 bg-white py-2">
                            <Input placeholder="locate a rewarding store near you" className='bg-white  px-5  border-none active:outline-none outline-0' />
                        </div>
                        <div className="">
                            <i className="bg-[#e51b48] rounded px-8 py-3 text-white"></i>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <div className="grid grid-cols-3 gap-5">
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src="" alt="" className="blue-background absolute" />
                    <div className="girl relative top-14 left-16"></div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;