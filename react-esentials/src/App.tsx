import { useState } from 'react'

import './App.css'

function App() {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  return (
    <>
     <form> 
      <div> 
        <label for="firstName">First Name:</label>
     
        <input name="firstName" id="firstName" type="text" />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
       
        <input name="lastName" id="lastName" type="text" />
      </div>
      <div>
       
        <label for="email">Email:</label>
        <input name="email" id="email" type="email" />
      </div>
      <div>
        
        <button type="submit">Send</button>
      </div>
    </form> 

    </>
  )
}

export default App
