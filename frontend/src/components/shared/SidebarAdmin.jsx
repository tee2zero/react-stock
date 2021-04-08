/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faDatabase, faChartPie, faMap, faImage, faTable, faRocket, faInbox, faLock, faShoppingCart, faKey, faVideo, faFilePdf } from "@fortawesome/free-solid-svg-icons"

const SidebarAdmin = () => {
  return (
    <aside className="bg-sidebar min-h-screen w-72 hidden sm:block shadow-md relative">

      <div className="p-6">
        <NavLink to="/dashboard" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">
          React Land
        </NavLink>
      </div>

      <nav className="text-white text-base font-semibold pt-3">
        <NavLink to="/dashboard"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTachometerAlt} /> &nbsp; Dashboard
        </NavLink>
        <NavLink to="/reststrapi"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faDatabase} /> &nbsp; Rest API (Strapi)
        </NavLink>
        <NavLink to="/redux"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Redux (Cart)
        </NavLink>
        <NavLink to="/jwt"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faKey} /> &nbsp; React JWT
        </NavLink>
        <NavLink to="/chartjs"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faChartPie} /> &nbsp; ChartJS
        </NavLink>
        <NavLink to="/pdfcsvexport"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faFilePdf} /> &nbsp; PDF & CSV Export 
        </NavLink>
        <NavLink to="/hookform"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faInbox} /> &nbsp; React Hook form
        </NavLink>
        <NavLink to="/googlemap"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faMap} /> &nbsp; Google Map API
        </NavLink>
        <NavLink to="/firebasecrud"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faRocket} /> &nbsp; Firebase CRUD
        </NavLink>
        <NavLink to="/firebaseauth"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faLock} /> &nbsp; Firebase Auth
        </NavLink>
        <NavLink to="/firebasestorage"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faImage} /> &nbsp; Firebase Storage
        </NavLink>
        <NavLink to="/reactadmin"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTable} /> &nbsp; React Admin
        </NavLink>
        <NavLink to="/reactdatagrid"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faTable} /> &nbsp; React Data Grid 
        </NavLink>
        <NavLink to="/reactytapi"className="flex items-center text-white py-4 pl-6 nav-item" activeClassName="active-nav-link">
          <FontAwesomeIcon icon={faVideo} /> &nbsp; React Youtube API
        </NavLink>
        
      </nav>
    </aside>
  )
}

export default SidebarAdmin
