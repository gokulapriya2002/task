
import {useEffect, useState} from 'react';
import { Link,Outlet } from "react-router-dom";
function Loginpage() {


const [username, Setusername] = useState('');
  const [password, Setpassword] = useState('');
  
 const[message,Updatemessage]=useState('')
  const[users,Getusers]=useState([])
  

  useEffect(()=> {
  fetch("http://localhost:8000/users",{ 
    method:"POST"
  })
  .then(res=> res.json() )
  .then(data=> Getusers(data))
  .catch(err => console.log(err))
   },[])


   function CheckUser(){
    const user=users.find((a)=> a.username===username&& a.userpassword==password )
   if(user){
     document.cookie = "user="+user.username
    
     
    window.location.href='http://localhost:3000';
    
   }else{
    Updatemessage("username or password is incorrect")
   }

   }

 return (
        <> 
        <br/><br/><br/><br/><br/>
          
         
         <div class="container" style ={{border:"1px solid green",bordercolor:"black",height:"395px",width:"350px",borderRadius:"35px",borderBlockColor:"black",padding:"5px",borderWidth:"3px",}}>
  
                <center>
                  <div>
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img></div>
             <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    
        <h3>Login Here</h3><br/>

        <label for="username">Username:</label>
        <input type="text" placeholder="Email or Phone" id="username" onChange={(e) =>{Setusername(e.target.value)}}/><br/>

<br/>
        <label for="password">Password:</label>
        <input type="password" placeholder="Password" id="password" onChange={(e) =>{Setpassword(e.target.value)}}/><br/>
<p>create a new account <a href="#">Terms & Privacy</a>.</p>
    <button onClick={CheckUser}class="btn btn-success">login</button>
    <p>{message}</p>
   


    <p>Already you signin</p>
    <a href="#">signup</a>
    <p>Already have an account? <Link to="/signup">Signin</Link>.</p><br/>
    <Outlet/>
  
  
   </center>

</div>

</>


    )}
    
export default Loginpage;