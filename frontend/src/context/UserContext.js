/* eslint-disable import/no-anonymous-default-export */
import {createContext,useState} from 'react'

export const UserContext = createContext(null)

export default ({children}) =>{
    const [user, setUser] = useState(null)

    return(
        <UserContext.Provider value={{user,setUser}} >
            {children}
        </UserContext.Provider>
    )
}