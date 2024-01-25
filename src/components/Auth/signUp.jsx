import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
function signUp() {
    const history=useHistory();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
      });
    const HandleSubmit=(e)=>{
        e.preventDefault();

        fetch("http://localhost:300/signup",{
            METHOD:"POST",
            header:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log('server response',data);
            history.push('/home');
        })
        .catch((e)=>{
            console.error('Error:',e);
        })
    }
    const handleChange=(e)=>{
        setFormData({
            ...FormData,
            [e.target.name]:e.target.value,
        })
    }
  return (
    <form onSubmit={HandleSubmit}>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

    <label htmlFor="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} required />

    <button type="submit">Sign Up</button>
  </form>
  )
}

export default signUp