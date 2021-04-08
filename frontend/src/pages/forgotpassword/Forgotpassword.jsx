/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {NavLink} from 'react-router-dom'

const Forgotpassword = () => {
    return (
        <div className="flex h-screen bg-indigo-700">

           <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">   

            {/* header */}
            <header className="mb-6">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-12 h-12 text-white p-2 bg-indigo-500 rounded-full mx-auto"
                viewBox="0 0 24 24"
                >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </header>

            {/* form */}
            <form>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="username">Email</label>
                    <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="email" name="username" />
                </div>
                <div>          
                    <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Reset password" onClick={()=>{}} />
                </div>       
            </form>

            {/* footer */}
            <footer>
                <NavLink className="text-indigo-700 hover:text-pink-700 text-sm float-left" to="/login">Back to login</NavLink>
            </footer> 
            </div>

        </div>
    )
}

export default Forgotpassword
