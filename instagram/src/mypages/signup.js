import { Link, Outlet } from "react-router-dom";


function signuppage() {


  
    return (
        <>
        
                <br/><br/><br/>
                 <form action="http://localhost:8000/signup"method="POST">
                 
 <div class="container" style ={{border:"1px solid blue",bcolor:"black",height:"450px",width:"350px",borderRadius:"35px",borderBlockColor:"black",padding:"5px",borderWidth:"3px"}}>
            <div class="form-content">
             <center>
               <div>
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img></div>
    <h1 >sign in</h1>
    <p>Please fill in this form to create an account.</p>
   

    <label for="username">Username</label>
    <input type="text" placeholder="Enter Email" name="email" id="email" /><br/><br/>
     <label for="username">Password</label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" /><br/><br/>
    <label for="username"> repeat password</label>
   
    <input type="password" placeholder="confirm Password" name="psw-repeat" id="psw-repeat"/><br/><br/>
  

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <input type="submit" button class="btn btn-primary"value="Signup"/>
   
  <div class="container signin"><br/>

    <p>Already have an account? <Link to="/login">Login in</Link></p><br/>
    <Outlet/>
    </div>
    </center>
  </div>
  </div>
 </form>


  
</>

  )}

export default signuppage;