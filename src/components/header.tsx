import React from 'react';
import Link from 'next/link';
import { tree } from 'next/dist/build/templates/app-page';
const NavBar = () => {
  return (
    <div>
    <nav className="p-5 border-b border-gray-300 flex items-center justify-between mx-auto h-14">
      <Link href="/">
      <h1  className="font-bold text-xl">Home</h1>
      </Link>
      <div className="flex gap-5">
        <Link href="/performance" scroll={true}>Performance</Link>
        <Link href="/reliability">Reliability</Link>
      </div>
     </nav>
    </div>
  )
}

export default NavBar