import React from 'react';
import Link from 'next/link';
import { tree } from 'next/dist/build/templates/app-page';
const NavBar = () => {
  return (
    <div className='absolute z-10 text-white w-full' >
    <nav className=" container p-10  flex items-center justify-between mx-auto h-14">
      <Link href="/">
      <h1  className="font-bold text-2xl">Home</h1>
      </Link>
      <div className="flex gap-5">
        <Link href="/performance" scroll={true} className='text-xl'>Performance</Link>
        <Link href="/reliability" className='text-xl'>Reliability</Link>
      </div>
     </nav>
    </div>
  )
}

export default NavBar