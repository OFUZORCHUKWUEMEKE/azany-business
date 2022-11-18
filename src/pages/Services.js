import React from 'react';

const Services = () => {
    return (
        <div>
            <div className="m-auto w-[85%] md:flex items-center gap-10 my-20">
                <div className="space-y-2 md:my-0 my-5">
                    <h1 className="font-bold text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, perferendis?</p>
                    <button className="secondary-button">Create Account</button>
                </div>
                <div className="text-center">
                    <div className="md:flex gap-5 space-y-5 md:space-y-0">
                        <div className="bg-[#fff9fd] p-8">
                            <div className="py-5">
                                <i className="rounded-full  bg-[#7a7a7a] p-5"></i>
                            </div>
                            <h1 className="font-bold mb-2">Lorem Ipsum dolor</h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum!</p>
                        </div>
                        <div className="bg-[#fff9fd]  p-8">
                            <div className="py-5">
                                <i className="rounded-full bg-[#7a7a7a] p-5"></i>
                            </div>
                            <h1 className="font-bold mb-2">Lorem Ipsum dolor</h1>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum!</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className="md:flex gap-5 space-y-5 md:space-y-0">
                            <div className="bg-[#fff9fd] p-8">
                                <div className="py-5">
                                    <i className="rounded-full bg-[#7a7a7a] p-5"></i>
                                </div>
                                <h1 className="font-bold mb-2">Lorem Ipsum dolor</h1>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum!</p>
                            </div>
                            <div className="bg-[#fff9fd] p-8">
                                <div className="py-5">
                                    <i className="rounded-full  bg-[#7a7a7a] p-5"></i>
                                </div>
                                <h1 className="font-bold mb-2">Lorem Ipsum dolor</h1>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, harum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;