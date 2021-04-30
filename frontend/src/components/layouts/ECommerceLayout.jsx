import React from 'react'
import SidebarAdmin from '../shared/SidebarAdmin'
import FooterAdmin from '../shared/FooterAdmin'
import NavBarECommerce from '../shared/NavBarECommerce'

const ECommerceLayout =  ({children}) => {
    return (
        <div className="flex bg-gray-100 font-family-karla">
            <SidebarAdmin />

           <div className="flex flex-col w-full h-screen ">
                    <NavBarECommerce/>
                    <div className="flex flex-col w-full overflow-x-hidden border-t">
                        <main className="flex-grow w-full">
                            {children}
                        </main> 
                        <FooterAdmin />  
                    </div>
            </div>
        </div>
    )
}

export default ECommerceLayout

