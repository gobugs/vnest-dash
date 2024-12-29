import React from 'react'
import Logo from "@/app/_assets/logo.svg";
import Placeholder_company_logo from "@/app/_assets/placeholder_company_logo.svg";
import { ChartBarIcon, ChartPieIcon, HomeModernIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';
import FounderCard from './founder_card';

const Sidenav = () => {
  return (
    <div className='w-72 h-full bg-[#263578] flex flex-col overflow-hidden hover:overflow-y-auto'>

        <div className="flex flex-col items-center justify-center w-full mt-6 space-y-8">    
            <Image src={Logo} alt='logo' className='h-14'></Image>

            <div className="bg-[#5D5FEF] text-white font-semibold flex space-x-2 items-center px-3 py-2 rounded-xl text-sm">
                <ChartPieIcon className='h-6' />
                <span>Dashboard</span>
            </div>

            {/* Company Logo */}
            <Image src={Placeholder_company_logo} alt='company_logo' className='h-14'></Image>


            <div className="flex flex-col mt-8">
                <FounderCard />
                <FounderCard />
            </div>

            <div className="flex flex-col text-white space-y-2">
                <div className="flex space-x-2">
                    <MapPinIcon className='h-6' />
                    <span>Chennai, India</span>
                </div>

                <div className="flex space-x-2">
                    <ChartBarIcon className='h-6' />
                    <span>Stage:</span>
                    <span className='text-green-500 font-bold'>SEED</span>
                </div>

                <div className="flex space-x-2">
                    <HomeModernIcon className='h-6' />
                    <span>Industry:</span>
                    <span className='text-green-500 font-bold'>EDTECH</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Sidenav;