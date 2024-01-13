
import {Link,Outlet} from "react-router-dom";
import {AiTwotoneHome,AiOutlineMessage,AiFillSetting} from "react-icons/ai";
import {BsSearch,BsFillPostageHeartFill,BsCameraReels}from "react-icons/bs";

import { FaUserShield } from "react-icons/fa";
function Urlbuttons() {
    return(
      <>
      
            <div>
            <Link to="/"><button class="btn">Home<spam><AiTwotoneHome/></spam></button></Link>
       
              </div>
        
          <div>
            <Link to="/Message"><button class="btn">Message<spam><AiOutlineMessage/></spam></button></Link>
         </div>
         
            <div>
            <Link to="/Search"><button class="btn">Search<spam><BsSearch/></spam></button></Link>
         </div>
          
          
             <div>
            <Link to="/Post"><button class="btn">Post<spam><BsFillPostageHeartFill/></spam></button></Link>
         </div>
             <div>
            <Link to="/Setting"><button class="btn">Setting<spam><AiFillSetting/></spam></button></Link>
         
</div>
<div>
            <Link to="/Reels"><button class="btn">Reels<spam><BsCameraReels/></spam></button></Link>
         
</div><div>
            <Link to="/Users"><button class="btn">Users<spam><FaUserShield /></spam></button></Link>
         
</div>


          <Outlet/>
      
         </>

    )
    }
    export default Urlbuttons;
