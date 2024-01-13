   

import Urlbuttons from "./mypages/Buttons";
import { useState,useEffect ,val} from "react";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
function Postpage() {
      const[posts,Getpost]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/')
    .then(res=> res.json())
    .then(data=> Getpost(data))
  .catch(err => console.log(err))
   },[])
    return (
        <> 
               <div className= "container-fluid">
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img>
           </div>

            <div div className="row">
                <div className="col-lg-4"style={{backgroundColor:"#6228d7"}}>
                    
                    <Urlbuttons />
                </div>
            
            
       

                <div className="col-lg-8">
                 
     
    


        
{
  posts.map((val) => (
    <div className="row-" key={val.idname}>
      <div className="col-lg-5">
        <img src={`data:image/png;base64,${val.profile}`} height={45} width={55} alt=""class="rounded-circle"/>
        <b><span>{val.idname}</span></b>

        {val.catergory === "image" ? (
          <>
            <img src={`data:image/png;base64,${val.post}`} height={500} width={500} alt="" />
          </>
        ) : val.catergory === "video" ? (
          <>
          
            <video height={500} width={500} alt="" controls>
  
              <source src={`data:video/mp4;base64,${val.post}`}alt="" />
            </video>
          </>
        ) : null}
 <button className="btn btn-link"><FcLike />{val.likes}</button>
        <button className="btn btn-link"><FaRegCommentDots />{val.comments}</button>
        <button className="btn btn-link"><CiSaveDown2 />{val.saved}</button>
        <h5><p>{val.description}</p></h5>
        <b><h5><p>#{val.hashtag}</p></h5></b>
      </div>
    </div>
  ))
}


                
         </div>
         </div>   
        
             
    



            </>     


    )}
    


   
        
export default Postpage;