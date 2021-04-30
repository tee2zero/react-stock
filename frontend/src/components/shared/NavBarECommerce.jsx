import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const NavBarECommerce = () => {

    const cartObj = useSelector(store => store.cartReducer)

    return (
        <nav id="header" className="top-0 z-30 w-full py-1">
            <div className="container flex items-center justify-between w-full mx-auto mt-0">
                <label htmlFor="menu-toggle" className="block cursor-pointer md:hidden">
                    <svg className="text-gray-900 fill-current" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />
                <div className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1" id="menu">
                    <nav>
                        <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
                            <li>
                                <NavLink className="inline-block px-4 py-2 no-underline nav-link hover:text-black hover:underline" to="/redux">
                                    Shop
                                </NavLink>
                                </li>
                            <li><a className="inline-block px-4 py-2 no-underline hover:text-black hover:underline" href="#">About</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="order-1 md:order-2">
                    <a className="flex items-center text-xl font-bold tracking-wide text-gray-800 no-underline hover:no-underline " href="#">
                        <svg className="mr-2 text-gray-800 fill-current" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                        </svg>
                        Shopping Mall
                    </a>
                </div>


            <div className="flex items-center order-2 md:order-3" id="nav-content">
                <a className="inline-block no-underline hover:text-black" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mt-2 feather feather-shopping-cart">
                        <circle fill="none" cx={12} cy={7} r={3} />
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                    </svg>
                </a>
                <div />
                <div className="flex flex-row-reverse w-full ml-2">
                    <div slot="icon" className="relative">
                        {
                            cartObj.carItems.length > 0 ?
                                <div className="absolute top-0 right-0 px-1 -mt-1 -mr-2 text-xs font-bold text-white bg-red-700 rounded-full">{cartObj.carItems.length}</div>
                                :
                                <div></div>
                        }
                        <NavLink className="nav-link" to="/redux/cartdetail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mt-2 feather feather-shopping-cart">
                                <circle cx={9} cy={21} r={1} />
                                <circle cx={20} cy={21} r={1} />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </NavLink>
                    </div>

                </div>
            </div>

       

            
            </div>
        </nav >

    )
}

export default NavBarECommerce
