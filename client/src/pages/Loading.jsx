import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useLocation } from "react-router-dom"

const Loading = () => {

    const {navigate} = useContext(ShopContext)
    let {search} = useLocation()
    const query = new URLSearchParams(search)
    const nextUrl = query.get('next')

    useEffect(()=> {
        if(nextUrl){
            setTimeout(() => {
                navigate(`/${nextUrl}`)
            },5000)
        }
    },[nextUrl])

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
                <div className="h-14 w-14 rounded-full border-4 border-gray-200"></div>
                <div className="absolute h-14 w-14 rounded-full border-4 border-secondary border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-sm text-gray-600 tracking-wide">
                Loading, please wait...
            </p>
        </div>
    )
}

export default Loading