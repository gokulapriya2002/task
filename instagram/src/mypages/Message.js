import Urlbuttons from "./Buttons"
import React, { useState } from 'react';
const Messagepage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, isUser: true }]);
      
      setNewMessage('');
    }
  };
   
const ChatMessage = ({ text, isUser }) => (
  <div className={isUser ? 'user-message' : 'other-message'}>
    {text}
  </div>
);

   

    return (
        <>
        
               <div className= "container-fluid">
                <img src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"></img>
        
        <div className="row">
                <div className="col-lg-3"style={{backgroundColor:"#ee2a7b"}}>
                    
                    <Urlbuttons />
                </div>
            
            
                
                < div className="col-lg-6">
                    <h5>MESSAGE PAGE</h5><div class="container">

            <div class="card">

              <div class="top">
                
                <h4 class="mt-2">Inbox</h4>

              </div>

              <div class="bottom">
                  
                  <div class="d-flex justify-content-between align-items-center">

                    <div class="d-flex flex-row align-items-center">

                      <div class="image">

                        <img src="https://i.imgur.com/jhsYqVT.png" width="70"/>
                        <span class="type"><img src="https://i.imgur.com/4lg6mOg.png" width="20"/></span>
                        
                      </div>

                      <div class="d-flex flex-column line-height ml-2">

                        <span class="font-weight-bold">priya</span>
                        <span>hey! goodmoring</span>
                        <span class="d-flex flex-row align-items-center l-now"><small class="live"></small>Live now</span>
                        
                      </div>
                      
                    </div>


                    <span class="dots">
                      

                    </span>
                    

                  </div>





                  <div class="d-flex justify-content-between align-items-center mt-2">

                    <div class="d-flex flex-row align-items-center">

                      <div class="image">

                        <img src="https://i.imgur.com/vxEWOFl.png" width="70"/>
                        <span class="type"><img src="https://i.imgur.com/CngJIFw.png" width="20"/></span>
                        
                      </div>

                      <div class="d-flex flex-column line-height ml-2">

                        <span class="font-weight-bold">sneha</span>
                        <span>goodmoring</span>
                        <span class="d-flex flex-row align-items-center l-now"><small class="live"></small>Live now</span>
                        
                      </div>
                      
                    </div>


                    <span class="dots">
                      

                    </span>
                    

                  </div>











                  <div class="d-flex justify-content-between align-items-center mt-2">

                    <div class="d-flex flex-row align-items-center">

                      <div class="image">

                        <img src="https://i.imgur.com/jhsYqVT.png" width="70"/>
                        <span class="type"><img src="https://i.imgur.com/4lg6mOg.png" width="20"/></span>
                        
                      </div>

                      <div class="d-flex flex-column line-height ml-2">

                        <span class="font-weight-bold">Sri</span>
                        <span>goodmoring!</span>
                        <span class="d-flex flex-row align-items-center l-now"><small class="live"></small>Live now</span>
                        
                        <div className="chat-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} isUser={message.isUser} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>

                      </div>
                      
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
export default Messagepage;