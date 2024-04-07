import React, { useState } from 'react'
import "../css/page css/LoginPage.css"
export default function LoginPage() {
    const[data , setData] = useState({email:"" , password:""})
    const handleChange = (e) => {
        setData({...data , [e.target.name] : e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/login" , {
                method:'POST',
                headers : {
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(data)
            })
            const json = await response.json()
            if(json.success){
                if(json.data.admin){
                    const token = json.token
                    localStorage.setItem("token" , token)
                    window.location.reload()
                    window.location.href = "/my-dashboard"
                }else{
                    alert("Incorrect Login Attempt")
                }
            }else{
                alert("Incorrect Credentials")
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='login-page'>
      <form action="POST" className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-box">
            <p>Email Address</p>
            <input type="email" className="input-field" name='email' value={data.email} required onChange={handleChange}/>
        </div>
        <div className="input-box">
            <p>Password</p>
            <input type="password" className="input-field" name='password' value={data.password} required onChange={handleChange}/>
        </div>
        <input type="submit" value="Login" className='btn-a'/>
      </form>
    </div>
  )
}
