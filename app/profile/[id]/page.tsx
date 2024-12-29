"use client"

import { useParams } from 'next/navigation';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';

import FIN_ICON_1 from "@/app/_assets/fin_icon1.svg"
import FIN_ICON_2 from "@/app/_assets/fin_icon2.svg"
import FIN_ICON_3 from "@/app/_assets/fin_icon3.svg"
import Timeline from '@/app/_components/timeline';
import ProgressTable from '@/app/_components/progress_table';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const page = () => {

    const params : { id: string } = useParams();

  return (
    <div className="flex flex-col w-full p-5 max-w-screen-xl space-y-4">


        {/* FIRST COMPONENT */}
        <div className="flex w-full space-x-5 items-stretch">
            <div className="flex flex-col space-y-2 p-2 basis-1/2 w-full shadow-lg rounded-lg bg-white">

                 <div className="flex flex-col">
                    <span className='text-base text-[#05004E] font-bold'>Focus Area</span>
                    <span className='text-xs'>Our USP</span>
                </div>

                <p className='bg-[#FFE2E5] p-3 rounded-lg text-xs'>
                    <span className='text-[#05004E] text-sm font-bold'>Problem Statement: </span>
                    65% of students entering school now will be competing for jobs that don't exist yet, and they aren't being prepared even for the ones that do.
                </p>

                <p className='bg-[#FFF4DE] p-3 rounded-lg text-xs'>
                    <span className='text-[#05004E] text-sm font-bold'>Our Solution: </span>
                    Reimagining education with data analytics through our flagship offering - zClass, zCult, zTrail and zCommunity
                </p>

                <p className='bg-[#DCFCE7] p-3 rounded-lg text-xs'>
                    <span className='text-[#05004E] text-sm font-bold'>Target Market: </span>
                    India's EdTech TAM: ~$17-20 billion; SAM: $1.3 billion SOM estimate: ₹200–500 crores (~$25–60 million)
                </p>

                
            </div>
            <div className="flex flex-col basis-1/2 w-full shadow-lg rounded-lg bg-white p-4">

                <div className="flex">
                    <div className="flex flex-col">
                        <span className='text-base text-[#05004E] font-bold'>Financial Metrics</span>
                        <span className='text-xs'>Summary</span>
                    </div>
                </div>

                <div className="flex justify-between space-x-2 mt-5">
                    <div className='bg-[#FFE2E5] p-3 rounded-lg text-xs flex-col flex space-y-1 w-full'>
                        <Image alt='fin_icon_1' src={FIN_ICON_1}></Image>
                        <span className='text-[#151D48] text-2xl font-bold'>$100</span>
                        <span className='text-[#425166] text-sm'>Burn Rate</span>
                        <span className='text-xs text-[#4079ED]'>-8% from yesterday</span>
                    </div>

                    <div className='bg-[#FFF4DE] p-3 rounded-lg text-xs flex flex-col w-full'>
                        <Image alt='fin_icon_1' src={FIN_ICON_2}></Image>
                        <span className='text-[#151D48] text-2xl font-bold'>27</span>
                        <span className='text-[#425166] text-sm'>Runway</span>
                        <span className='text-xs text-[#4079ED]'>+27% from yesterday</span>
                    </div>

                    <div className='bg-[#DCFCE7] p-3 rounded-lg text-xs flex flex-col w-full'>
                        <Image alt='fin_icon_1' src={FIN_ICON_3}></Image>
                        <span className='text-[#151D48] text-2xl font-bold'>$2.5mn</span>
                        <span className='text-[#425166] text-sm'>Valuation</span>
                        <span className='text-xs text-[#4079ED]'>+12% from yesterday</span>
                    </div>
                </div>

            </div>
        </div>


        {/* SECOND COMPONENTS */}
        <div className="flex w-full space-x-5 items-stretch">
            <div className="basis-4/6 w-full shadow-lg rounded-lg bg-white max-w-full overflow-x-scroll">
                <div className="flex flex-col pt-4 px-4">
                    <span className='text-base text-[#05004E] font-bold'>Progress</span>
                    <span className='text-xs'>Timeline so far</span>
                </div>
               <Timeline />
            </div>
            <div className="basis-2/6 w-full shadow-lg rounded-lg bg-white"></div>
        </div>


        {/* THIRD COMPONENTS */}
        <div className="flex w-full space-x-5">
            <div className="basis-5/12 w-full shadow-lg rounded-lg bg-white h-fit">
                <div className="flex flex-col pt-4 px-4">
                    <span className='text-base text-[#05004E] font-bold'>The Road Ahead</span>
                </div>
                <ProgressTable />
            </div>
            <div className="basis-4/12 w-full shadow-lg rounded-lg bg-white">
                <Doughnut data={data}/>
            </div>
            <div className="flex flex-col basis-3/12 w-full shadow-lg rounded-lg bg-white h-fit">
                <div className="flex flex-col pt-4 px-4">
                    <span className='text-base text-[#05004E] font-bold'>Media</span>
                </div>

                <span className='self-center my-10'>No Media Available</span>
            </div>
        </div>

        
    </div>
  )
}

export default page;