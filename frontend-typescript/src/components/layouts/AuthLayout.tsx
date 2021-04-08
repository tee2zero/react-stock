import React from 'react'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const AuthLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout
