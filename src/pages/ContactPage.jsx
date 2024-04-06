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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28021.516318371934!2d77.19599567313239!3d28.609089130311457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2db961be393%3A0xf6c7ef5ee6dd10ae!2sIndia%20Gate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1712395223868!5m2!1sen!2sin" width="100%" height="200px" style={{border:'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
