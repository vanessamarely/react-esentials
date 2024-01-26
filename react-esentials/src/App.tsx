import { useState } from 'react'

import './App.css'

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [name, setName] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('este es nuestro formulario', formData)
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setName(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => {
              handleName(event);
            }}
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
          { name ! == "" &&  <div >
        Mi mensaje exitoso
      </div>}
    </>
  )
}

export default App
