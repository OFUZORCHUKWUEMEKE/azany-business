import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Navbar from '../components/Navbar';

const ListOfServices = () => {

    return (
        <div className='bg-[#FAFCFF] '>
            <Navbar />
            <div className="m-auto w-[85%] h-[100vh]">
                <div className="py-10">
                    <h1 className="font-bold text-3xl">List of Services</h1>
                    <div className="flex gap-5">
                        <h1 className="">Ticketing</h1>
                        <h1 className="">Billing</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListOfServices;