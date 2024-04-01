import React from 'react'
import "../css/component css/TestimonialCard.css"
import user from "../images/user1.jpg"
export default function TestimonialCard(props) {
  return (
    <div className='testimonial-card'>
        <img src={props.image} alt="" />
        <div className="user-detail">
            <h4>{props.name}</h4>
            <p>{props.company}</p>
        </div>
        <div className="user-feedback">
            <p>{props.feedback}</p>
        </div>
    </div>
  )
}
