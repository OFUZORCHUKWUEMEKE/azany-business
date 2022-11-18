import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Footer = () => {
    return (
        <footer>
            <div class=" mt-18 bg-[#0266EA] text-white ">
                <div class="md:flex md:justify-between m-auto w-[85%] py-16 gap-12">
                    <div class="mb-6 md:mb-0 space-y-2 ">
                        <h1 class="text-xl">Azany Business</h1>
                        <p className="text-sm text-gray-200">Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor Lorem ipsum dolor sit amet.sit amet consectetur.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 ">Product</h2>
                            <ul class="text-sm  text-gray-200">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Payment</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="">Solutions</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="">Referrals</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 ">Legal</h2>
                            <ul class=" text-sm text-gray-200">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class=" ">Terms and Services</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 ">Contact</h2>
                            <ul class="text-sm text-gray-200">
                                <li class="mb-4 flex items-center gap-5">
                                    < LocalPhoneIcon />
                                    <a href="#" class="">+123444444444</a>
                                </li>
                                <li class="mb-4 flex items-center gap-5">
                                    <EmailIcon />
                                    <a href="#" class="">Azanybusiness@gmail.com</a>
                                </li>
                                <li class="mb-4 flex items-center gap-5">
                                    <LocationOnIcon />
                                    <a href="#" class="">2972 Westheimer Rd. Santa Ana, Illinois 85486</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-4 py-5">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaGoogle />
                </div>
            </div>
        </footer>
    );
};

export default Footer;