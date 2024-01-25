import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';

function login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    const history = useHistory();
    const HandleSubmit=(e)=>{
        e.preventDefault();

        fetch("http://localhost:300/login",{
            METHOD:"POST",
            header:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log('server response',data);
            
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
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
    </form>
  )
}

export default login