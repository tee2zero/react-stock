/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import {useState, useRef} from 'react';
import { NavLink, useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faDatabase, faChartPie, faMap, faImage, faTable, faRocket, faInbox, faLock, faShoppingCart, faKey, faVideo, faFilePdf, faBars, faTimes, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons"
import useOutsideClick from "./useOutsideClick";

const NavbarAdmin = () => {

  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false)
  });

  // logout และ clear stoage 
  let history = useHistory()
  const logOut = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <>
    {/* Header for desktop size */}
    <header className="w-full items-center bg-white shadow-md py-2 px-6 hidden sm:flex">
    <div className="w-1/2" />
    <div ref={ref} className="relative w-1/2 flex justify-end">
        <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none" onClick={() => {setIsActive(!isActive)}}>
        <img src="assets/images/avatar_sm.png" />
        </button>
        <div className={`${ isActive ? 'block':'hidden'} absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16`}>
        <NavLink to="/account" className="block px-4 py-2 account-link hover:text-white">Account</NavLink>
        <NavLink to="/support" className="block px-4 py-2 account-link hover:text-white">Support</NavLink>
        <a href="#login" onClick={()=>logOut()}  className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
        </div>
    </div>
    </header>

    {/* Mobile Header & Nav */}
    <header className="w-full bg-sidebar py-5 shadow-md sm:hidden">
    <div className="flex items-center justify-between px-6">
        <NavLink to="/dashboard" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">React Land</NavLink>
        <button className="text-white text-3xl focus:outline-none" onClick={() => {setIsOpen(!isOpen)}}>
        
        {
          isOpen ? 
          <FontAwesomeIcon icon={faTimes} />
          :
          <FontAwesomeIcon icon={faBars} />
        }

        </button>
    </div>
    {/* Dropdown Nav */}
    <nav className={`${ isOpen ? 'block':'hidden'} flex flex-col pt-4`}>
        
        <NavLink to="/dashboard"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTachometerAlt} /> &nbsp; Dashboard
        </NavLink>

        <NavLink to="/reststrapi"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faDatabase} /> &nbsp; Rest API (Strapi)
        </NavLink>

        <NavLink to="/redux"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Redux (Cart)
        </NavLink>

        <NavLink to="/jwt"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faKey} /> &nbsp; React JWT
        </NavLink>

        <NavLink to="/chartjs"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faChartPie} /> &nbsp; ChartJS
        </NavLink>

        <NavLink to="/pdfcsvexport"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faFilePdf} /> &nbsp; PDF & CSV Export 
        </NavLink>

        <NavLink to="/hookform"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faInbox} /> &nbsp; React Hook form
        </NavLink>

        <NavLink to="/googlemap"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faMap} /> &nbsp; Google Map API
        </NavLink>

        <NavLink to="/firebasecrud"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faRocket} /> &nbsp; Firebase CRUD
        </NavLink>

        <NavLink to="/firebaseauth"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faLock} /> &nbsp; Firebase Auth
        </NavLink>

        <NavLink to="/firebasestorage"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faImage} /> &nbsp; Firebase Storage
        </NavLink>

        <NavLink to="/reactadmin"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTable} /> &nbsp; React Admin
        </NavLink>

        <NavLink to="/reactdatagrid"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTable} /> &nbsp; React Data Grid 
        </NavLink>

        <NavLink to="/reactytapi"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faVideo} /> &nbsp; React Youtube API
        </NavLink>

        <NavLink to="/account"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faUser} /> &nbsp; Account
        </NavLink>

        <NavLink to="/login"className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp; Logout
        </NavLink>
    </nav>

    </header>

    </>
  )
}

export default NavbarAdmin
