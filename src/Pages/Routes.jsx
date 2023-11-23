import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "../Components/Navbar"
function Router (){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        
        </>
    )
}
export default Router