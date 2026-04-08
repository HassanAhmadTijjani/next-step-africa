import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabaseClient'

// @ts-ignore
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        async function checkUser() {
            const { data } = await supabase.auth.getSession()

            if (!data.session) {
                navigate('/admin/login')
            } else {
                setChecking(false)
            }
        }

        checkUser()
    }, [])

    if (checking) {
        return (
            <div className="text-center py-20">
                <div className="animate-spin rounded-full h-24 w-24 border-b-4 m-auto border-gray-900 "></div>
                <p className="text-gray-500">Checking authentication...</p>
            </div>
        )
    }

    return children
}

export default ProtectedRoute