import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
    { name: 'Home', href: '/'},
    { name: 'Products', href: '/products'},
    { name: 'About', href: '/about'},
    { name: 'Login', href: '/login'},
    { name: 'Private', href: '/private'},
    { name: 'Not Ext', href: '/no-exist'},
  ]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 text-green-700 text-4xl font-bold">
                <img
                  className="h-8 w-8"
                  src="data:image/png;base64,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"
                  alt="Logo"
                />
                <p>Logo</p>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                   <NavLink
                    /* className="text-xs font-bold bg-green-100 p-2 hover:bg-green-500 cursor-pointer" */
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        color: isActive ? "green" : "",
                      };
                    }}
                    className={({ isActive }) => {
                      return "text-xs font-bold bg-green-100 p-2 hover:bg-green-200 cursor-pointer rounded";
                    }}
                    to={`${item.href}`}
                    key={item.name}
                  >
                    {item.name}
                  </NavLink>
                  ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">User</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Sidebar