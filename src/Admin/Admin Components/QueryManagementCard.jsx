import React from 'react'
import "../Admin Css/QueryManagementCard.css"
export default function QueryManagementCard(props) {

  const handleDelete = async(id) => {
    try{
      const response = await fetch(`https://shobhe-carpenter-backend.onrender.com/api/delete-query/${id}` , {
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }
      })
      const json = await response.json()
      if(json.success){
        alert("Query Deleted Successfully")
        window.location.reload()
      }
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='query-management-card'>
        <h4>{props.name}</h4>
        <h5>{props.email}</h5>
        <h5>{props.contact}</h5>
        <p>{props.query}</p>
        <button className="btn-a" onClick={(e) => handleDelete(props.id)}>Delete Query</button>
    </div>
  )
}
