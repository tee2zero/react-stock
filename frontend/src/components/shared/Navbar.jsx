/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useRef} from 'react';
import { NavLink } from 'react-router-dom'
import { Transition } from '@headlessui/react'
import useOutsideClick from "./useOutsideClick";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false)
  });


  return (
    <nav className="bg-gray-800 fixed w-full z-20">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => {setIsOpen(!isOpen)}}
              >

              <span className="sr-only">Open main menu</span>

              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className={`${isOpen ? 'hidden':'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className={`${isOpen ? 'block':'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>


            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <NavLink exact to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">React Land</span>
              </NavLink>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

                <NavLink exact to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-green-500">
                  Home
                </NavLink>
                <NavLink exact to="/about" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-green-500">
                  About
                </NavLink>
                <NavLink exact to="/teams" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-green-500">
                  Teams
                </NavLink>
                <NavLink exact to="/projects" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" activeClassName="bg-green-500">
                  Projects
                </NavLink>
                
                <div className="relative">

                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
                <button type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium" aria-expanded="false" onClick={() => {setIsActive(!isActive)}}>
                  <span>More</span>

                  {
                  isActive ? 
                 <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>

                  :
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>

                  }
                  
                </button>

                {/*
                    'More' flyout menu, show/hide based on flyout menu state.
                    Entering: "transition ease-out duration-200"
                      From: "opacity-0 translate-y-1"
                      To: "opacity-100 translate-y-0"
                    Leaving: "transition ease-in duration-150"
                      From: "opacity-100 translate-y-0"
                      To: "opacity-0 translate-y-1"
                */}

                <Transition
                show={isActive}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">

                {
                  <div ref={ref} className={`${ isActive ? 'block':'hidden'} " absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"`}>
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden" >
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        {/* Heroicon name: outline/support */}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Help Center
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Get all of your questions answered in our forums or contact support.
                          </p>
                        </div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        {/* Heroicon name: outline/bookmark-alt */}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Guides
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Learn how to maximize our platform to get the most out of it.
                          </p>
                        </div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        {/* Heroicon name: outline/calendar */}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Events
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            See what meet-ups and other events we might be planning near you.
                          </p>
                        </div>
                      </a>
                      <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                        {/* Heroicon name: outline/shield-check */}
                        <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            Security
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Understand how we take your privacy seriously.
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                      <div>
                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                          Recent Posts
                        </h3>
                        <ul className="mt-4 space-y-4">
                          <li className="text-base truncate">
                            <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                              Boost your conversion rate
                            </a>
                          </li>
                          <li className="text-base truncate">
                            <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                              How to use search engine optimization to drive traffic to your site
                            </a>
                          </li>
                          <li className="text-base truncate">
                            <a href="#" className="font-medium text-gray-900 hover:text-gray-700">
                              Improve your customer experience
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-5 text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">→</span></a>
                      </div>
                    </div>
                  </div>
                </div>
                }
                </Transition>
              </div>

              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* Heroicon name: outline/bell */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {/* เมนูด้านขวา */}
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <NavLink exact to="/login" className="whitespace-nowrap text-sm font-medium text-gray-300 hover:text-white">
                Login
              </NavLink>
              <NavLink exact to="/register" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-900">
                Register
              </NavLink>
            </div>


          </div>
        </div>
      </div>

      {/* เมนูโหมด Mobile */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">

        {
          <div className={`${isOpen ? 'sm:hidden block': 'sm:hidden hidden'}`} id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NavLink exact to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-green-500">
                Home
              </NavLink>
              <NavLink exact to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-green-500">
                About
              </NavLink>
              <NavLink exact to="/teams" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-green-500">
                Teams
              </NavLink>
              <NavLink exact to="/projects" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" activeClassName="bg-green-500">
                Projects
              </NavLink>
              <button type="button" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 inline-flex rounded-md text-sm font-medium" aria-expanded="false" onClick={() => {setIsActive(!isActive)}}>
                  <span>More</span>

                  {
                  isActive ? 
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>

                  :
                  <svg className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>

                  }
                  
                </button>
            </div>
          </div>
        }
        </Transition>
    </nav>
  )
}

export default Navbar
