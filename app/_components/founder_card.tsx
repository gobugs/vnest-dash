import Image from 'next/image';
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

const FounderCard = () => {
  return (
    <HoverCard>
        <HoverCardTrigger>
            <div className='flex p-4 space-x-2 text-white'>
                <Image className='rounded-xl' width={60} height={60} src={"https://i.ibb.co/QQ8VGFM/775-FB646-38-DF-493-A-B474-EC1231-DD5-A75.png"} alt='founder_pfp'/>
                <div className="flex flex-col">
                    <span className='text-base font-bold'>Founder Name</span>
                    <span className='text-sm'>Designation</span>
                </div>
            </div>
        </HoverCardTrigger>
        <HoverCardContent>
        Founder’s Profile
        Graduated: MS in Biotechnology from Harvard University 2021
        Created a $10mn startup at 22
        Awarded Nobel Prize in Economics in 2022
        Recognised by UN for work in Education Sector
        </HoverCardContent>
    </HoverCard>
  
  )
}

export default FounderCard;