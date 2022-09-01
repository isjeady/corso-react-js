import React, { useContext } from 'react'
import { UserContext } from '../../contexts/user.context';

const Topbar = () => {


  return (
    <div className='flex h-10 border-b z-30'>
        <div className='w-72'></div>
        <div className=''>
            <ul className='inline-flex gap-4 my-2 text-xs font-medium text-gray-900'>
                <li>{parseFloat(Math.random().toFixed(2))}</li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar