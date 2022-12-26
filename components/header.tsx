import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../components/headericon'
import {HomeIcon,PhoneIcon,UserIcon,InformationCircleIcon} from "@heroicons/react/20/solid"

function Header() {
  return (
    <div className= 'bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between'>
    <div className='flex'>
    <HeaderIcon Icon={HomeIcon} string='HOME'/>
    <HeaderIcon Icon={UserIcon} string='ACCOUNT'/>
    <HeaderIcon Icon={PhoneIcon} string='CONTACT'/>
    <HeaderIcon Icon={InformationCircleIcon} string='ABOUT'/>
    </div>
    <Image
    src={'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'}
    width={100}
    height={100}
    alt={'imagen'}
    className="cursor-pointer active:brightness-110"
    />
    </div>

  )
}

export default Header