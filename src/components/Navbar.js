import React from 'react';
import { Link } from "react-router-dom";
import SignUp from '../Auth/SignUp';

const Navbar = () => {
    return (
        <div className='sticky top-0 bg-white'>
            <div className="md:flex justify-between items-center h-[13vh] m-auto w-[85%]">
                <div className="flex-1">
                    <h1 className="text-blue-500 text-xl font-semibold">Azany Business</h1>
                </div>
                <div className="md:flex justify-center hidden">
                    <div className="md:flex gap-5">
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">Home</p>
                        </Link>
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">Services</p>
                        </Link>
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">Blog</p>
                        </Link>

                    </div>

                    <div className="mx-5 md:flex gap-5">
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">FAQ</p>
                        </Link>
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">Contact</p>
                        </Link>
                        <Link to="/">
                            <p className="hover:hover px-3 py-2">EN</p>
                        </Link>
                    </div>

                </div>
                <div className="gap-5 md:flex hidden">
                    <Link to="/">
                        <p className="hover:hover px-3 py-2">Login</p>
                    </Link>
                    <Link to="signup" className="text-red-500 border border-red-500 rounded px-2 py-2">Create Account</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;