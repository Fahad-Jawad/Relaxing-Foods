import Image from 'next/image'
import React from 'react'
export default function TopBar() {
  return (
    <div className='w-full py-2 px-20 flex'>
        <div className='w-1/2 flex gap-5 items-center'>
         <div className='flex gap-1 items-center'>
                   <Image
                     src={'/images/icons/Send.svg'}
                     alt='relaxing-Food-email'
                     width={20}
                     height={20}
                   />
                   <p> relaxingfood@gmail.com</p>
                 </div>
                 <div className='flex gap-1 items-center'>
                   <Image
                     src={'/images/icons/Phone.svg'}
                     alt='relaxing-Food-phone'
                     width={20}
                     height={20}
                   />
                   <p>+954894596456</p>
                 </div>
        </div>
    </div>
  )
}
