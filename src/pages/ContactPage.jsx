import React, { useState } from 'react'
import "../css/page css/ContactPage.css"
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import image from "../images/contact page image.png"
export default function ContactPage() {
    const[formData , setFormData] = useState({name:"",email:"",contact:"",query:""})
    
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name] : e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/send-query" , {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body : JSON.stringify(formData)
            })
            const json = await response.json()
            if(json.success){
                alert("Message Sent Successfully!")
                setFormData({name:"",email:"",contact:"",query:""})
            }
        }catch(Err){
            console.log(Err);
        }
    }
  return (
    
    <div className='contact-page'>
        {/* {window.scrollTo(0, 0)} */}
        <div className="contact-page-top-section">
            <div className="contact-method-card">
                <div className="contact-method-card-content">
                    <AddIcCallIcon className='contact-icons'/>
                    <h3>Call Us</h3>
                    <h4>+91 123 456 7890</h4>
                </div>
            </div>
            <div className="contact-method-card">
                <div className="contact-method-card-content">
                    <EmailIcon className='contact-icons'/>
                    <h3>Mail Us</h3>
                    <h4>officialmail@gmail.com</h4>
                </div>
            </div>
            <div className="contact-method-card">
                <div className="contact-method-card-content">
                    <LocationOnIcon className='contact-icons'/>
                    <h3>Visit Us</h3>
                    <h4>A-block princess park , faridabad F-Tower</h4>
                </div>
            </div>
        </div>
        <div className="contact-page-middle-section">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send Query</h2>
                <div className="input-box">
                    <p>Enter Name</p>
                    <input type="text" className="input-field" name='name' required value={formData.name} onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <p>Enter Email</p>
                    <input type="email" className="input-field" name='email' required value={formData.email} onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <p>Enter Phone Number</p>
                    <input type="number" className="input-field" name='contact' required value={formData.contact} onChange={handleChange}/>
                </div>
                <div className="input-box">
                    <p>Enter Query</p>
                    <textarea className='input-field' name='query' required value={formData.query} onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="Send Message" className="btn-a" />
            </form>
            <img src={image} alt="" />
        </div>
    </div>
  )
}
