import Urlbuttons from "./Buttons"

import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";

import { Link, } from "react-router-dom";
import { useState } from "react";




function Homepage (){
  console.log(document.cookie.split("=")[1])
 const [selectedUser, setSelectedUser] = useState(null);

  const users = [
   
    { username: 'kiki',profileImage:'https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg',about:'step out of comfort zone' ,  id:'123',followers:'1400',following:'456'},
     { username: 'priya', profileImage:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', about:'dont bunt', id:'124',followers:'4400',following:'590'},
      { username: 'Gokulapriya', profileImage:'https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg',about:'do what"s is right',id:'234',followers:'400',following:'45' },
    
    { username: 'akashaya',profileImage:"https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg",about:'be happy and enjoy your life' ,  id:'123',followers:'345',following:'45'},
     { username: 'micky',profileImage:'https://www.hdwallpapers.in/download/beautiful_cute_little_girl_is_wearing_white_dress_and_headband_standing_in_pink_rose_green_leaves_plants_background_hd_cute-HD.jpg',  about:'never give up of your self', id:'124',followers:'600',following:'340'},
      { username: 'dora',profileImage:'https://www.hdwallpapers.in/download/little_cute_girl_is_blowing_a_kiss_wearing_red_dress_and_cap_having_stalk_in_hand_4k_hd_cute-HD.jpg', about:'dont compare your self to others',id:'234',followers:'860',following:'456' }
    
  
  ];

  const handleUsernameClick = (username) => {
    const user = users.find((user) => user.username === username);
    setSelectedUser(user);
  };




  console.log(document.cookie.split("=")[1])

 

  


  

    return (
        <>
      

        <div className= "container-fluid"style={{backgroundColor:"#ee2a7b"}}>
    

           
        <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img>
             <center>
           <space> <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGmyBgnpQ5O9qILF_6TA8GLBA4QyR3h3uRQ&usqp=CAU"class="rounded-circle"width="60"heigth="60"style={{border:"2px solid red",}}></img></space>

           <space> <img src= "https://funylife.in/wp-content/uploads/2023/10/20231011_221801-2-1024x1024.jpg"class="rounded-circle"width="60"heigth="60"style={{border:"2px solid red"}}></img></space>
           <space> <img src= "https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg"class="rounded-circle"width="60"heigth="60"style={{border:"2px solid red"}}></img></space>
           <space> <img src= "https://funylife.in/wp-content/uploads/2022/12/27_Whatsapp-Dp-images-FunyLife.in_-1024x1024.jpg"class="rounded-circle"width="60"heigth="60"style={{border:"2px solid red"}}></img></space>
         <space> <img src= "https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg"class="rounded-circle"width="60"heigth="60"style={{border:"2px solid red"}}></img></space>
            
            
        </center>
        

    
      {/* <div className="col-lg-12" style={{ textAlign: 'right' }}>
        <div>
          <p>
            <button className="btn btn-link" >
              {document.cookie.split('=')[1]}
            </button>
           
      </p>
      
 </div>
</div> 

</div> */}

         <div className="col-lg-12" style={{ textAlign: 'right',}}>
        <div>
          <p>
            <button className="btn btn-link" onClick={() => handleUsernameClick(document.cookie.split('=')[1])}>
              {document.cookie.split('=')[1]}
              
            </button>
            
            {/* {selectedUser && (
        <div className="user-details"> */}
          <Link to="/Users">Userspage</Link>
        
          {/* <h5>User Details</h5>
          <p><b>User:</b>{selectedUser.username}</p>
          <img src={selectedUser.profileImage} alt={`${selectedUser.username}profile`}class="rounded-circle"width={`50`}height={`50`} />
  <p><b>Userid:</b>:{selectedUser.id}</p>
  <p><b>About:</b>{selectedUser.about}</p>
    <p><b>Followers:</b>{selectedUser.followers}</p>
          <p><b>Following:</b>{selectedUser.following}</p>
            
        </div>
      )} */}

      {/* ... (the rest of your JSX) */}
      </p>
</div> 

</div>
 
         
        </div>
      
          
            < div className="row">
                <div className="col-lg-3"style={{backgroundColor:"#6228d7"}}> 
                
  
    


 
                    <Urlbuttons />
      
                </div>
               
            < div className="col-lg-3">
               <img src="https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg"class="rounded-circle" width="50"/>

     <b><span>kiki</span></b><br/><br/>                                                              
   

            <iframe width="500" height="500" src="https://media.istockphoto.com/id/1892842645/video/two-homemade-easter-cakes-surrounded-by-small-eggs-on-a-black-background.mp4?s=mp4-640x640-is&k=20&c=8c6XIYATNlQvmXbgLDmLNJoCN9DB_ySTim_6DUtLMLY=">
</iframe>
<button className="btn btn-link"><FcLike />800</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />93</button>
<p><b>ice creams</b></p>
<p><b>#so tastee</b></p>



      <div class="profil-img"></div>
      <div class="profil-info">
       
       

        
   
        </div>
  <div class="right-page">
    <div class="top-bar">
     
     <img src="https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg"class="rounded-circle" width="50"/>

     <b><span>kiki</span></b><br/><br/>
   

        <div class="person-radius">
          <img src="https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg"class="rounded-circle"width="550" height="450"style={{border:"5px solid black"}}/>
        <button className="btn btn-link"><FcLike />8999</button>
        <button className="btn btn-link" ><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
  <h5><p>wow</p></h5>
        <b><h5><p>#krishna & ratha</p></h5></b>
       </div>
      </div>
    </div>
    
    <hr class="hr-new"/>
    <div class="right-of-page">
      <div class="right-middle">
         

                        
        <div class="featured">
           
                    <div class="featured-header">
                        
                        <img src="https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>miki</span></b>
                    </div>
 
                    <div class="featured-body">

                        <div class="galery-wrapper">
                          
                            <div class="img-galery">
                                <img
                                    src="https://images.unsplash.com/photo-1562447279-69402cb4587d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"width="550"height="450"class="rounded-circle"/>
                         <button className="btn btn-link"><FcLike />1000</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />333</button>
    <h5><p>beautiful </p></h5>
        <b><h5><p>#beautiful place</p></h5></b>

                           </div>
                            <div class="img-galery">
                               <img src="https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>kiki</span></b>
                              <img
                                    src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"class="rounded-circle" style={{border:"3px solid green"}}/>
                          <button className="btn btn-link"><FcLike />899</button>
        <button className="btn btn-link"><FaRegCommentDots />23</button>
        <button className="btn btn-link"><CiSaveDown2 />9</button>
    <h5><p>walk peaceful</p></h5>
        <b><h5><p>#nature</p></h5></b>
                           </div>
                            <div class="img-galery">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGmyBgnpQ5O9qILF_6TA8GLBA4QyR3h3uRQ&usqp=CAU"class="rounded-circle" width="50"/>
     <b><span>abi</span></b>
     
                                <img
                                    src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"class="rounded-circle"style={{border:"3px solid lightblue"}} />
                            <button className="btn btn-link"><FcLike />788</button>
        <button className="btn btn-link"><FaRegCommentDots />108</button>
        <button className="btn btn-link"><CiSaveDown2 />93</button>
  
                              <h5><p>beauty</p></h5>
        <b><h5><p>#flowers</p></h5></b>
                            </div>
                          <div class="img-galery">
                             <img src="https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>kiki</span></b>
    
                                <img
                                   
                                src="https://images.unsplash.com/photo-1561363702-e07252da3399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"style={{border:"3px solid violet"}} />
                           <button className="btn btn-link"><FcLike />899</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
  
                         <h5><p>mountain</p></h5>
        <b><h5><p>#rivers</p></h5></b>
                           
                        </div>
                    </div>
                </div>
        
     <div class="featured">
                <div class="featured-header">
                </div>
                    </div>
                    <div class="featured-body">
                        <div class="galery-wrapper">
                            <div class="img-galery">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGmyBgnpQ5O9qILF_6TA8GLBA4QyR3h3uRQ&usqp=CAU"class="rounded-circle" width="50"/>
     <b><span>abi</span></b>

                                <img
                                src="https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"class="rounded-circle"style={{border:"3px solid yellow"}} />
                              <button className="btn btn-link"><FcLike />987</button>
        <button className="btn btn-link"><FaRegCommentDots />75</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
    <h5><p>nice</p></h5>
        <b><h5><p>#couples</p></h5></b>
                            </div>
                            <div class="img-galery">
                              <img src="https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>miki</span></b>
                       <img
                                    src="https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                         <button className="btn btn-link"><FcLike />569</button>
        <button className="btn btn-link"><FaRegCommentDots />63</button>
        <button className="btn btn-link"><CiSaveDown2 />23</button>
      </div>
        <h5><p>enjoy</p></h5>
        <b><h5><p>#travel</p></h5></b>
   
                          <div class="img-galery">
                              <img src="https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>miki</span></b>
    
                                <img
                                    src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"class="rounded-circle" width="500" />
                            <button className="btn btn-link"><FcLike />876</button>
        <button className="btn btn-link"><FaRegCommentDots />234</button>
        <button className="btn btn-link"><CiSaveDown2 />78</button>
    <h5><p>wow</p></h5>
        <b><h5><p>#sunset</p></h5></b>
                            </div>
                        </div>
                    </div>
       
        <div class="last-body">
                        <div class="galery-wrapper">
                            <div class="img-galery">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGmyBgnpQ5O9qILF_6TA8GLBA4QyR3h3uRQ&usqp=CAU"class="rounded-circle" width="50"/>
     <b><span>abi</span></b>
   
                                <img
                                  src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                           <button className="btn btn-link"><FcLike />456</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
    <h5><p>peacful place</p></h5>
        <b><h5><p>#beach</p></h5></b>
                            
                            </div>
                            <div class="img-galery">
                                <img src="https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>miki</span></b>
 
                                <img
                                    src="https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                          <button className="btn btn-link"><FcLike />8999</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
    <h5><p>sad</p></h5>
        <b><h5><p>#alone</p></h5></b>
                            </div>
                            <div class="img-galery">
                                <img src="https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>kiki</span></b>
                        <img
                                    src="https://images.unsplash.com/photo-1505158498176-0150297fbd7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"class="rounded-circle" width="550"height="400" />
                            <button className="btn btn-link"><FcLike />189</button>
        <button className="btn btn-link"><FaRegCommentDots />13</button>
        <button className="btn btn-link"><CiSaveDown2 />45</button>
    <h5><p>traveler</p></h5>
        <b><h5><p>#bicylcle lover</p></h5></b>
                           </div>
                        </div>
                    </div>
                           <div class="loader"></div>
                </div>   
      </div>
      <div class="last-right">
          <img src="https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>dora</span></b>
      <div class="text-center"style={{textAlign:"center"}}>
   <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg"width="645"height="453" />
         <div> <button className="btn btn-link"><FcLike />8999</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />33</button>
    <h5><p>beauty</p></h5>
        <b><h5><p>#wonder</p></h5></b>
        <div class="last-right">
          <img src="https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>dora</span></b>
 
         <iframe width="500" height="500" src="https://mazwai.com/videvo_files/video/free/2014-06/small_watermarked/thomas_mandelid--clips_of_the_Aurora_preview.webm">
</iframe>
<button className="btn btn-link"><FcLike />678</button>
        <button className="btn btn-link"><FaRegCommentDots />57</button>
        <button className="btn btn-link"><CiSaveDown2 />34</button>
<p><b>wonderful</b></p>
<p><b>#amazhing</b></p>
<img src="https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>tom</span></b>
 <iframe width="500" height="500" src="https://videos.pond5.com/apple-peeling-ultra-slow-motion-footage-125279864_main_xxl.mp4">
</iframe>
<button className="btn btn-link"><FcLike />567</button>
        <button className="btn btn-link"><FaRegCommentDots />89</button>
        <button className="btn btn-link"><CiSaveDown2 />90</button>
<p><b>colorfull</b></p>
<p><b>#apple slice</b></p>
<img src="https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg"class="rounded-circle" width="50"/>
     <b><span>dora</span></b>
 <iframe width="500" height="500" src="https://videos.pond5.com/one-minute-shot-pretty-male-footage-104132957_main_xxl.mp4">
</iframe>
<button className="btn btn-link"><FcLike />800</button>
        <button className="btn btn-link"><FaRegCommentDots />123</button>
        <button className="btn btn-link"><CiSaveDown2 />93</button>
<p><b>bird</b></p>
<p><b>#beautifull bird</b></p>

 </div>
      </div>
    </div>
    

  </div>
  </div>

       </div> 
  
    </div>

  </>

    )
}
export default Homepage;