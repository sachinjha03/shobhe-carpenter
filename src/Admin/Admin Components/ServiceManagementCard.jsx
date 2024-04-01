import React, { useEffect, useState } from 'react'
import "../Admin Css/ServiceManagementCard.css"
import CloseIcon from '@mui/icons-material/Close';
export default function ServiceManagementCard(props) {

  const [formData, setFormData] = useState({image:"" , name:"" , description:""})
  const [editScreen , setEditScreen] = useState(false)

  useEffect(() => {
      const fetchServiceData = async(id) => {
        const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/read-service/${id}` , {
          method:'GET',
          headers:{
            'content-type':'application/json'
          }
        })
        const json = await response.json()
        if(json.success){
          setFormData({image:json.data[0].image , name:json.data[0].name , description:json.data[0].description , })
        }
      }

      fetchServiceData(props.id)

  } , [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/delete-service/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    if (json.success) {
      alert("Service Deleted Successfully!!")
      window.location.reload()
    }
  }

  const handleEdit = async (id) => {
    setEditScreen(true)
  }

  const handleChange = (e) => {
    setFormData({...formData , [e.target.name]:e.target.value})
  }

  const closeEditScreen = () => {
    setEditScreen(false)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/update-service/${props.id}` , {
        method : 'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const json = await response.json()
      if(json.success){
        alert("Service Updated Successfully")
        window.location.reload()
      }
    }catch(Err){
      console.log(Err);
    }
  }

  return (
    <>
      <div className='service-management-card'>
        <div className="service-management-card-img">
          <img src={props.image} alt="" />
        </div>
        <div className="service-management-card-content">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <div className="row">
            <button className='btn-a link-a' onClick={(e) => { handleEdit(props.id) }}>Edit</button>
            <button className="btn-a delete-btn" onClick={(e) => { handleDelete(props.id) }}>Delete</button>
          </div>
        </div>
      </div>
      {editScreen && <div className="edit-screen">
        <form onSubmit={handleSubmit} className="edit-service-form service-management-form">
          <CloseIcon className='close-icon' onClick={closeEditScreen}/>
          <h3>Update Service</h3>
          <div className="input-box">
            <p>Enter Image Url</p>
            <input type="text" className="input-field" name='image' onChange={handleChange} value={formData.image} required />
          </div>
          <div className="input-box">
            <p>Enter Service Name</p>
            <input type="text" className="input-field" name='name' onChange={handleChange} value={formData.name} required />
          </div>
          <div className="input-box">
            <p>Enter Description</p>
            <textarea className="input-field" name='description' onChange={handleChange} value={formData.description} required></textarea>
          </div>
          <input type="submit" value="Save Changes" className='btn-a' />
        </form>
      </div>}
    </>
  )
}
