import Urlbuttons from "./Buttons"

  
  import React, { useState } from 'react';

const Settingpage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    location: '',
    username: '',
    password: '',
    mobileNo: '',
    emailAddress: '',
    bio: '',
    confirmPassword: '',
    newPassword: '',
    isPublic: false,
    isPrivate: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    const isUpdateSuccessful = true;

    if (isUpdateSuccessful) {
      
      setShowSuccessMessage(true);

      
    }
  };

    
  
    return (
    
        
        <>
         {/* Success message */}
        {showSuccessMessage && (
          <div className="alert alert-success" role="alert">
            Username and password updated successfully!
          </div>
        )}
        
        <div className= "container-fluid">
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img>
            <div div className="row">
                <div className="col-lg-4"style={{backgroundColor:"#ee2a7b"}}>
                    
                    <Urlbuttons />
                </div>
            
<div className="col-lg-8">
                    <h5>SETTING PAGE</h5>
        

        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>

<div class="row">
  <div class="col-xs-12 col-sm-9">
    <form class="form-horizontal">
        <div class="panel panel-default">
          <div class="panel-body text-center">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcwhyE3EjaFt2Qyp_0dMG5msYB02ieSl9JBrzjiiP6Tw8uZDNLMic&s=0" class="rounded-circle" alt="User avatar"width="80"height="90"/>
          </div>
        </div>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">User info</h4>
        </div>
        <div class="panel-body">
          <div class="form-group">
            <label class="col-sm-2 control-label">Location</label>
            <div class="col-sm-10">
              <select class="form-control">
                <option selected="">Select captions</option>
                <option>do what is right</option>
                <option>no pain no gain</option>
                <option>good luck</option>
                <option>keep rocking</option>
                <option>keep smiling</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">username</label>
            <div class="col-sm-10">
              <input type="text" class="form-control"/>
            </div>
          </div>
          
          <div class="form-group">
            <label class="col-sm-2 control-label"> password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"/>
            </div>
          </div>
        </div>
      </div>
</form>
      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">email</h4>
        </div>
        < div class="panel-body">
          <div class="form-group">
            <label class="col-sm-2 control-label">mobilen no</label>
            <div class="col-sm-10">
              <input type="tel" class="form-control"/>
            </div>
          </div>
          
          <div class="form-group">
            <label class="col-sm-2 control-label">E-mail address</label>
            <div class="col-sm-10">
              <input type="email" class="form-control"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">enter your bio</label>
            <div class="col-sm-10">
              <textarea rows="3" class="form-control"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">
        <h4 class="panel-title">Current password</h4>
        </div>
        < div class="panel-body">
          <div class="form-group">
            <label class="col-sm-2 control-label">Confirm  password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">New password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control"/>
            </div>
          </div>
           <form className="form-horizontal" onSubmit={handleSubmit}>
          {/* ... (existing form content) ... */}
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="publicCheckbox"
                  onChange={() => setFormData({ ...formData, isPublic: !formData.isPublic })}
                />
                <label htmlFor="publicCheckbox">Make this account public</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="privateCheckbox"
                  onChange={() => setFormData({ ...formData, isPrivate: !formData.isPrivate })}
                />
                <label htmlFor="privateCheckbox">Make this account private</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" className="btn btn-default">
                Cancel
              </button>
            </div>
          </div>
        </form>

       
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
export default Settingpage;