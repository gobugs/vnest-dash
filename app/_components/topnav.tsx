import { GlobeAltIcon } from '@heroicons/react/24/outline';
import React from 'react'

const Topnav = () => {
  return (
    <div className='my-4 p-2 rounded-lg bg-[#263578] text-[#C0C5DC] self-center w-1/2'>
        <div className="flex justify-between items-center">

            {/* Social Media Icons */}
            <div className="flex"></div>

            <h1 className='text-lg font-bold'>ZVIA Tech Pvt. Ltd.</h1>


            <GlobeAltIcon className='size-8' />
        </div>
    </div>
  )
}

export default Topnav;