import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div className='h-[100vh] overflow-x-hidden'>
            <Navbar />
            <div className='w-full flex justify-center'>
                <div className="mx-auto  text-sm">
                    <div className="space-y-2 my-10">
                        <h1 className="text-2xl font-bold">Create Account</h1>
                        <p className="">Create an account to partner with Azany Business</p>
                    </div>
                    <form action="" className="">
                        <div className="space-y-5">
                            <div>
                                <TextField label="First Name" id="outlined-size-normal" className='w-[100%]  text-sm' />
                            </div>
                            <div>
                                <TextField label="Last Name" id="outlined-size-normal" className='w-[100%] ' />
                            </div>
                            <div>
                                <TextField label="Email address" id="outlined-size-normal" className='w-[100%] ' />
                            </div>
                            <div className=''>
                                <TextField label="Enter Password" id="outlined-size-normal" className='w-[100%] ' />
                            </div>
                            <div>
                                <TextField label="Confirm Password" id="outlined-size-normal" className='w-[100%] ' />
                            </div>
                            <div className="flex items-center text-sm ">
                                <Checkbox {...label} />
                                <p className="">By clicking ‘sign up’ I agree to <span className='text-[#1B7CFC]'>Terms & Conditions</span></p>
                            </div>
                        </div>
                        <button className='secondary-button my-3 bg-blue-500 w-[100%]'>Submit</button>
                
                        <p className="text-center py-2">Already have an account?<span className='text-[#1B7CFC]'><a href="emailVerification"> Log In</a></span></p>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default SignUp;