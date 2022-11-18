import React from 'react';
import Navbar from '../components/Navbar';

const EmailVerification = () => {
    return (
        <div>
            <Navbar />
            <div className="m-auto w-[45%]">
                <div className="my-10">
                    <h1 className="font-bold text-xl">Email Verification</h1>
                    <p className="">Provide the OTP sent to Joel@gmail.com</p>
                </div>
                <div className="flex gap-5">
                    <input type="text" className='bg-[#DBE1E7] w-[69.13px] h-[60px]' />
                    <input type="text" className='bg-[#DBE1E7] w-[69.13px] h-[60px]' />
                    <input type="text" className='bg-[#DBE1E7] w-[69.13px] h-[60px]' />
                    <input type="text" className='bg-[#DBE1E7] w-[69.13px] h-[60px]' />
                </div>
                <p className="text-center py-2">Didn’t receive an OTP? <span className='text-red-500'><a href="emailVerification"> Resend in 60s</a></span></p>
                <button type="submit" className='secondary-button my-3 bg-blue-500 w-[100%] md:w-[50%]'>Verify</button>
                <p className="text-center py-2">Don't have an account?<span className='text-[#1B7CFC]'><a href="emailVerification">Sign up</a></span></p>
            </div>
        </div>
    );
};

export default EmailVerification;