import React from 'react'
import { Outlet, useLocation } from 'react-router'

const Container = ({children}) => {
  let location = useLocation();
  return (
    <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <div className="text-base font-bold border-b-2 border-gray-200 mb-4 capitalize">
                    {location.pathname}
                  </div>
                  <Outlet />
                  {children}
                </div>
            </div>
        </main>
    </div>
  )
}

export default Container