

import { BrowserRouter , Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import Messagepage from "./Message";
import Postpage from "../Post";
import Searchpage from "./Search";
import Settingpage from "./Setting";
import Reelspage from "./Reels";
import Loginpage from"./Login";
import Signuppage from"./signup";
import Userspage from "./Users";
function  Myurls(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/"  element={<Homepage/>}/>
            <Route path="/message" element={<Messagepage/>}/>
            <Route path="/post"element={<Postpage/>}/>
            <Route path="/search" element={<Searchpage/>}/>
           
           <Route path="/setting"element={<Settingpage/>}/>
            <Route path="/reels"element={<Reelspage/>}/>
            <Route path="/login"element={<Loginpage/>}/>
            <Route path="/signup"element={<Signuppage/>}/>
           <Route path="/Users"element={<Userspage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Myurls;