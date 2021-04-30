/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { UserContext} from '../../context/UserContext'
import { useForm } from 'react-hook-form'
import api from '../../services/authUserAPI';
import Swal from 'sweetalert2'

const Login = () => {

    document.title = 'Login'

    let history = useHistory()

    // เรียกใช้งาน Context
    const {user, setUser} = useContext(UserContext)
    // console.log("user", user)

    // เรียกใช้งาน React Hook From
    const { register, handleSubmit, formState: { errors } } = useForm()

    // ฟังก์ชันหลังจาก Submit form
    const onSubmit = (data) => {
        // console.log(data)
        // เรียก api login 
        const authData = {
            "identifier" : data.email,
            "password" : data.password
        }
        // console.log(authData);
        api.authLogin(authData).then( res =>{
            // console.log(res);            
            setUser(res)
            const jwtValue = res.data.jwt
            localStorage.setItem("token",jwtValue)

            // Redirect ไปหน้า dashboard
            history.push('/dashboard')

        }).catch(error => {
            if(error.response.status === 400 ){
                Swal.fire({
                    icon : 'error',
                    text : 'ข้อมูลเข้าระบบไม่ถูกต้อง ลองใหม่',
                    confirmButtonText : 'ปิดหน้าต่าง'
                })
            }
        });
        
    }

    return (
        
        <div className="flex h-screen bg-indigo-700">

           <div className="w-full max-w-xs p-5 m-auto bg-indigo-100 rounded">   

            {/* header */}
            <header className="mb-6">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-12 h-12 p-2 mx-auto text-white bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
                >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            </header>

            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="email">Email</label>
                    {/* <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                    type="email"
                    id="email"
                    name="email" 
                    ref={register({required: true})}
                    />
                    {errors.email && <p className="mb-6 text-red-500">กรุณาป้อนอีเมล์ก่อน</p>} */}

                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                    type="email"
                    {...register("email", {validate: (value) => value !== null && value.length > 0 })}
                    />
                    {errors.email && <p className="mb-6 text-red-500">กรุณาป้อนอีเมล์ก่อน</p>} 
                </div>
                <div>
                    <label className="block mb-2 text-indigo-500" htmlFor="password">Password</label>
                    {/*
                     /// React Hook Form version 6 
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" 
                    type="password"
                    id="password" 
                    name="password"
                    ref={register({required: true})}
                    />
                    {errors.password && <p className="mb-6 text-red-500">กรุณาป้อนรหัสผ่านก่อน</p>} */}

                    {/* React Hook Form version 7 */}
                    <input className="w-full p-2 mb-3 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                    type="password"
                    {...register("password", {validate: (value) => value !== null && value.length > 0 })}
                    />
                    {errors.password && <p className="mb-6 text-red-500">กรุณาป้อนรหัสผ่านก่อน</p>} 

                </div>
                <div>          
                    <input className="w-full px-4 py-2 mb-6 font-bold text-white bg-indigo-700 rounded hover:bg-pink-700" type="submit" value="Login" />
                </div>       
            </form>

            {/* footer */}
            <footer>
                <NavLink className="float-left text-sm text-indigo-700 hover:text-pink-700" to="/forgotpassword">Forgot Password?</NavLink>
                <NavLink className="float-right text-sm text-indigo-700 hover:text-pink-700" to="/register">Create Account</NavLink>
            </footer> 
            </div>

        </div>

    )
}

export default Login