/* eslint-disable jsx-a11y/anchor-is-valid */
import {NavLink} from 'react-router-dom'

const Register = () => {

    document.title = 'Register'

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-8">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full mx-auto"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
                    Register for a member
                </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">

                <div>
                    <label htmlFor="email-address" className="sr-only">Fullname</label>
                    <input id="fullname" name="fullname" type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Fullname" />
                </div>

                <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>

            </div>

            <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {/* Heroicon name: solid/lock-closed */}
                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                </span>
                Register
                </button>
            </div>
            </form>
            <div className="text-center">
                Already a member ? <NavLink to="/login">Login</NavLink>
            </div>
        </div>
    </div>
    )
}

export default Register
