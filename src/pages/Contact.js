import React from 'react';
import Navbar from '../components/Navbar';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaFacebook, FaInstagram } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsInstagram} from "react-icons/bs"
import { SiDiscord} from "react-icons/si"
import Footer from '../components/Footer';
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[85%]">
                <div className="text-center pt-12 space-y-2">
                    <h1 className="text-3xl font-bold">Contact Us</h1>
                    <p className="">Any question or remarks? Just write us a message!</p>
                </div>

                <div className="shadow-md md:flex items-center my-[5%] gap-10">
                    <div className="bg-[#0063E5] text-white pl-5 font-light space-y-24 pt-5 rounded-xl xl:w-[50%]">
                        <div className="space-y-2">
                            <h1 className="font-semibold text-2xl">Contact Information</h1>
                            <p className="font-light text-md text-[#C9C9C9]">Say something to start a live chat!</p>
                        </div>

                        <div className="">
                            <li class="mb-4 flex items-center gap-5">
                                < LocalPhoneIcon />
                                <p class="">+1012 3456 789</p>
                            </li>
                            <li class="mb-4 flex items-center gap-5">
                                <EmailIcon />
                                <p class="">demo@gmail.com</p>
                            </li>
                            <li class="mb-4 flex items-center gap-5">
                                <LocationOnIcon />
                                <p class="">132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States</p>
                            </li>
                        </div>
                        <div className="md:flex justify-between items-center">
                        <div className="flex items-center  gap-4">
                            <AiFillTwitterCircle  className='text-3xl bg-white text-blue-600 rounded-full p-1 '/>
                            <FaInstagram className='text-3xl bg-white text-blue-600 rounded-full p-1 '/>
                            <SiDiscord  className='text-3xl bg-white text-blue-600 rounded-full p-1 '/>
                        </div>
                        <div className="md:flex hidden">
                            <div className="relative  right-[30%] z-0">
                                <div className="bg-blue-800 small-circle rounded-full p-16 absolute bottom-[50%]"></div>
                            </div>
                            <div className="small-circle rounded-l-full rounded-br-xl rounded-b-full rounded-t-full rounded-tr-full p-[90px] bg-blue-900 relative top-[0.5%]"></div>
                        </div>
                        </div>
                    </div>
                    <div className="form space-y-5">
                        <div className="flex items-center gap-5">
                            <div className="w-[50%]">
                                <Input label="First Name"  className='bg-gray-50'/>
                            </div>
                            <div className="w-[50%]">
                                <Input label="Last Name"  className='bg-gray-50'/>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-[50%]">
                                <Input label="Email Address" className='bg-gray-50' />
                            </div>
                            <div className="w-[50%]">
                                <Input label="Phone Number" className='bg-gray-50' />
                            </div>
                        </div>
                            <div className="">
                                <Input label="Message Title"  className='bg-gray-50'/>
                            </div>
                            <div className="">
                                <Textarea label="Type your message here..." className='bg-gray-50' />
                            </div>
                            <div className="flex justify-end">
                                <button type='submit' className="secondary-button ">Send message</button>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;