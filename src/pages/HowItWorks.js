import React from 'react';

const HowItWorks = () => {
    return (
        <div className='my-10'>
            <div className="m-auto w-[85%] bg-[#fff9fd] md:flex p-8 items-center gap-10">
                <div className="space-y-5">
                    <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.!</h1>
                    <div className="flex items-center">
                        <div className="">
                            {/* <input type="serch" placeholder='locate a rewarding store near you' className='w-[50%] p-2' /> */}
                            <p className="bg-white py-3 px-5">locate a rewarding store near you</p>
                        </div>
                        <div className="">
                            <i className="bg-[#e51b48] rounded px-6 py-3 text-white"></i>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <div className="md:flex gap-5 space-y-3 md:space-y-0">
                                <li className="list-style  text-black">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>
                            </div>
                            <div className="md:flex my-5 gap-5 space-y-3 md:space-y-0">
                                <li className="list-style">Lorem Ipsum dolor</li>
                                <li className="list-style">Lorem Ipsum dolor</li>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="girl">
                    <img src="" alt="" className="" />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;