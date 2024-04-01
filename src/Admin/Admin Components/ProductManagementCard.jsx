import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import "../Admin Css/ServiceManagementCard.css"
export default function ProductManagementCard(props) {

  const [data , setData] = useState({image:"",name:"",description:"" , price : 0 , width : 0 , height : 0})
  const [editScreen , setEditScreen] = useState(false)

  useEffect(() => {
    const fetchProductData = async(id) => {
      const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/read-product/${id}` , {
        method:'GET',
        headers:{
          'content-type':'application/json'
        }
      })
      const json = await response.json()
      if(json.success){
        setData({image:json.data[0].image ,name:json.data[0].name ,description:json.data[0].description , price : json.data[0].price , width : json.data[0].width , height : json.data[0].height})
        console.log(json.data[0]);
      }else{
        console.log("Failed to fetch product data");
      }
    }
    fetchProductData(props.id)
  } , [])

  const handleDelete = async (id) => {
    const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/delete-product/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    const json = await response.json()
    if (json.success) {
      alert("Product Deleted Successfully")
      window.location.reload()
    }
  }

  const handleChange = (e) => {
    setData({...data , [e.target.name] : e.target.value})
  }

  const showEditScreen = (id) => {
    setEditScreen(true)
    console.log(id);
  }

  const closeEditScreen = () => {
    setEditScreen(false)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/update-product/${props.id}` , {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    const json = await response.json()
    if(json.success){
      alert("Product Updated Successfully")
      window.location.reload()
    }
  }

  return (
    <div className='service-management-card'>
      <div className="service-management-card-img">
        <img src={props.image} alt="" />
      </div>
      <div className="service-management-card-content">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <div className="row">
          <p>Price : Rs. {props.price}</p>
          <p>Dimenstions : {props.width}Wx{props.height}.H</p>
        </div>
        <div className="row">
          <button className='btn-a link-a' onClick={() => {showEditScreen(props.id)}}>Edit</button>
          <button className="btn-a delete-btn" onClick={(e) => { handleDelete(props.id) }}>Delete</button>
        </div>
      </div>
      {editScreen && <div className="edit-screen">
        <form className="edit-product-form product-management-form service-management-form" onSubmit={handleSubmit}>
          <CloseIcon className='close-icon' onClick={closeEditScreen}/>
          <h3>Update Product</h3>
          <div className="input-box">
            <p>Enter Image Url</p>
            <input type="text" className="input-field" name='image' onChange={handleChange} value={data.image} required />
          </div>
          <div className="input-box">
            <p>Enter Product Name</p>
            <input type="text" className="input-field" name='name' onChange={handleChange} value={data.name} required />
          </div>
          <div className="input-box">
            <p>Enter Description</p>
            <textarea className="input-field" name='description' onChange={handleChange} value={data.description} required></textarea>
          </div>
          <div className="input-box">
            <p>Enter Pricing</p>
            <input type="number" className="input-field" name='price' onChange={handleChange} value={data.price} required />
          </div>
          <div className="row">
            <div className="input-box">
              <p>Width (inch)</p>
              <input type="number" className="input-field" name='width' onChange={handleChange} value={data.width} required />
            </div>
            <div className="input-box">
              <p>Height (inch)</p>
              <input type="number" className="input-field" name='height' onChange={handleChange} value={data.height} required />
            </div>
          </div>
          <input type="submit" value="Save Changes" className='btn-a' />
        </form>
      </div>}
    </div>
  )
}
