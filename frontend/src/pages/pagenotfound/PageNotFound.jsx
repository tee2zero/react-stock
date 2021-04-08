import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
    document.title = 'Page not found'
    return (
        <div className="h-screen flex text-center">
            <div className="m-auto">
                <h1 className="text-2xl">404 Page not found.</h1>
                <p className="text-xl mb-3">ไม่พบหน้าที่กำลังเรียกใช้</p>

                <NavLink to='/' className="inline-flex text-gray-600 border-indigo-500 border-opacity-50 border-2 ml-2 py-1 px-3 hover:border-indigo-600 rounded">กลับหน้าหลัก</NavLink>
            </div>
        </div>
    )
}

export default PageNotFound
