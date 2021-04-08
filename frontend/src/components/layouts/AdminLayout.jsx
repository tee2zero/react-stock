import FooterAdmin from '../shared/FooterAdmin'
import NavbarAdmin from '../shared/NavbarAdmin'
import SidebarAdmin from '../shared/SidebarAdmin'

const AdminLayout = ({children}) => {
    return (
        <div className="flex bg-gray-100 font-family-karla">
            <SidebarAdmin />

           <div className="w-full flex flex-col h-screen ">
                    <NavbarAdmin/>
                    <div className="w-full overflow-x-hidden border-t flex flex-col">
                        <main className="w-full flex-grow p-6">
                            {children}
                        </main> 
                        <FooterAdmin />  
                    </div>
            </div>
        </div>
    )
}

export default AdminLayout
