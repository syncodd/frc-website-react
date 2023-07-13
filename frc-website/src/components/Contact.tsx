import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className="flex flex-row h-full mx-10 items-center justify-between">
      <div>
        <div className="flex flex-row items-center">
          <MdLocationOn color='white' className='w-5 h-10 mx-2'/>
          <h1 className="text-white">Akat, Levent Ebulula Mardin Caddesi, Öztürk Sk. No:2, 34335 Beşiktaş/İstanbul</h1>
        </div>
        <div className="flex flex-row items-center">
          <BsTelephoneFill color='white' className='mx-3' />
          <h1 className="text-white">+90 533 813 52 24 Merve Berker</h1>
        </div>
      </div>
      <div className='text-white'>
        <SocialIcon className="mx-5" url='https://www.linkedin.com/in/terakki-robotik-tak%C4%B1m%C4%B1-8567a9255/'/>
        <SocialIcon className="mx-5" url='https://www.instagram.com/terakki_robotics_team/'/>
      </div>
      
    </div>
  )
}

export default Contact