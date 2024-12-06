import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='max-w-7xl mx-auto flex justify-around   h-28 items-center'>

        <h1 className='text-5xl font-bold'>KAJ</h1>
        <div>
            <ul className='flex gap-4 *:font-light *:text-sm h-28 *:flex *:items-center *:px-4'>
              <Link className='hover:bg-primary-blue hover:text-white' href='/'>Home</Link>
              <Link className='hover:bg-primary-blue hover:text-white' href='/about-us'>About us</Link>
              <Link  className='hover:bg-primary-blue hover:text-white' href='/services'>Services</Link>
              <Link className='hover:bg-primary-blue hover:text-white' href='/carrer'>Carrer</Link>
              <Link className='hover:bg-primary-blue hover:text-white' href='/contact'>Contact</Link>
            </ul>
        </div>
    </div>
  )
}

export default Header