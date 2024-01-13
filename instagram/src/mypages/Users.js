import Urlbuttons from "./Buttons"
import { useState,val } from "react";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
function Userspage(){
console.log(document.cookie.split("=")[1])

const [selectedUser, setSelectedUser] = useState(null);

  const users = [
   
    { username: 'kiki',likes:'233',comments:'34',saved:'67',description:'lonely',hashtag:'be strong',PostImage:'https://images.unsplash.com/photo-1527212986666-4d2d47a80d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60',profileImage:'https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg',about:'step out of comfort zone' ,  id:'123',followers:'1400',following:'456'},
     { username: 'priya',likes:'2334',comments:'1000',saved:'34',description:'sunshadow',hashtag:'wow pics',PostImage:'https://funylife.in/wp-content/uploads/2023/10/20231011_221640-2-1024x1024.jpg', profileImage:'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', about:'dont bunt', id:'124',followers:'4400',following:'590'},
      { username: 'Gokulapriya',likes:'2345',comments:'33',saved:'44',description:'angle',hashtag:'princess',PostImage:'https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg', profileImage:'https://funylife.in/wp-content/uploads/2023/10/20231014_104932-1024x1024.jpg',about:'do what"s is right',id:'234',followers:'400',following:'45' },
    
    { username: 'akashaya',likes:'1233',comments:'345',saved:'78',description:'smily girl',hashtag:'keep smile with your smile',PostImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGmyBgnpQ5O9qILF_6TA8GLBA4QyR3h3uRQ&usqp=CAU',profileImage:"https://funylife.in/wp-content/uploads/2023/10/20231014_104957-1024x1024.jpg",about:'be happy and enjoy your life' ,  id:'123',followers:'345',following:'45'},
     { username: 'micky',likes:'7634',comments:'345',saved:'677',description:'keep smile',hashtag:'always happy',PostImage:'https://funylife.in/wp-content/uploads/2022/12/27_Whatsapp-Dp-images-FunyLife.in_-1024x1024.jpg',profileImage:'https://funylife.in/wp-content/uploads/2023/10/20231010_112218-1024x1024.jpg',  about:'never give up of your self', id:'124',followers:'600',following:'340'},
      { username: 'dora',likes:'345',comments:'55',saved:'55',description:'black heart',hashtag:'black baground',PostImage:'https://funylife.in/wp-content/uploads/2023/10/20231011_221801-2-1024x1024.jpg',profileImage:'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60', about:'dont compare your self to others',id:'234',followers:'860',following:'456' }
    
  
  ];

  const handleUsernameClick = (username) => {
    const user = users.find((user) => user.username === username);
    setSelectedUser(user);
  };



    return (
        <>
            
               <div className= "container-fluid">
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img>


            <div className="row">
                <div className="col-lg-4"style={{backgroundColor:"#ee2a7b"}}>
                    
                    <Urlbuttons />
                </div>
            
            
                
                <div className="col-lg-3">
  <h3>Userdetails</h3>

  
           <div className="col-lg-12" style={{ textAlign: 'right',}}>
        <div>
          <p>
            <button className="btn btn-link" onClick={() => handleUsernameClick(document.cookie.split('=')[1])}>
              {document.cookie.split('=')[1]}
              
            </button>
            
            {selectedUser && (
        <div className="user-details">
        
        
          <div>
            <div class="text-left"style={{textAlign:"left"}}>
          <p><b>User:</b>{selectedUser.username}</p>
          <img src={selectedUser.profileImage} alt={`${selectedUser.username}profile`}class="rounded-circle"width={`50`}height={`50`} />
         
  <p><b>Userid:</b>:{selectedUser.id}
  
  </p>
   <p><b>About:</b>{selectedUser.about}</p>
 </div>
    <div class="text-center"style={{textAlign:"center"}}>

   <space>    <button className="btn btn-primary">Followers</button><spam><spam ><b>{selectedUser.followers}</b></spam></spam></space>
   <space>    <button className="btn btn-primary">Following</button><spam><spam><b>{selectedUser.following}</b></spam></spam></space>
   
 </div><br/>
          <img src={selectedUser.PostImage} alt={`${selectedUser.username}profile`}width={`400`}height={`400`} />  
          <div class="text-left"style={{textAlign:"left"}}>
          <button className="btn btn-link"><FcLike />{selectedUser.likes}</button>
        <button className="btn btn-link"><FaRegCommentDots />{selectedUser.comments}</button>
        <button className="btn btn-link"><CiSaveDown2 />{selectedUser.saved}</button></div>
          <div class="text-left"style={{textAlign:"left"}}>
      <h5><p>{selectedUser.description}</p></h5>
        <b><h5><p>#{selectedUser.hashtag}</p></h5></b> 
 </div>
          
        </div>
        </div>
      )}

      {/* ... (the rest of your JSX) */}
      </p>
</div> 

</div>
                </div>
                </div>
                </div>
                
                </>

    )
}
export default Userspage;