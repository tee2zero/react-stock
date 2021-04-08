import NavbarAdmin from '../shared/NavbarAdmin'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const AdminLayout = ({children}:Props) => {
    return (
        <>
            <NavbarAdmin />

           <div className="h-screen flex sm:pt-20 lg:pt-16">
           
                <div className="bg-gray-600 w-64">
                    
                </div>

            
                <div className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-y-scroll lg:pt-8 pl-8">
                        {children}
                    </div>

                </div>
            </div>


           {/* <div className="flex max-w-7xl mx-auto">
                <section className="bg-gray-800 text-gray-100 p-4 flex-shrink-0" id="left-side-panel">
                    .... some navigation links..
                </section>
                <div className="bg-red-600 text-white flex-grow p-4" id="main-content">
                    . {children}
                </div>
            </div> */}


            {/* <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mx-auto sm:pt-20 lg:pt-8">
               
            </div> */}
        </>
    )
}

export default AdminLayout
