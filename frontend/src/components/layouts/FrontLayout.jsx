import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

const FrontLayout = ({children}) => {
    return (
        <>
            <Navbar />
                <div className="sm:pt-20 lg:pt-8">
                    {children}
                </div>
            <Footer />
        </>
    )
}

export default FrontLayout