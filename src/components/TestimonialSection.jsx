import React from 'react'
import "../css/component css/TestimonialSection.css"
import TestimonialCard from './TestimonialCard'
import user1 from "../images/user1.jpg"
import user2 from "../images/user2.jpg"
import user3 from "../images/user3.jpg"
import user4 from "../images/user4.jpg"
import user5 from "../images/user5.jpg"
export default function TestimonialSection() {
  return (
    <div className='testimonial-section'>
        <div className="testimonial-section-header">
            <h2>Our <span>Testimonial</span></h2>
        </div>
        <div className="testimonial-section-bottom">
            <TestimonialCard image={user1} name="Anjali" company="House Wife" feedback="Shobhe Carpenter exceeded my expectations with their exceptional craftsmanship and attention to detail. From the initial consultation to the final installation, their team was professional, courteous, and dedicated to bringing my vision to life. I couldn't be happier with the results!"/>
            <TestimonialCard image={user2} name="Sachin Jha" company="Trader" feedback="As an interior designer, I've had the pleasure of working with Shobhe Carpenter on several projects, and they never disappoint. Their craftsmanship is top-notch, and their ability to turn my design concepts into reality is truly impressive."/>
            <TestimonialCard image={user3} name="Mahiii" company="Youtuber" feedback="Shobhe Carpenter transformed our restaurant space with their expert carpentry skills. They created custom bar counters, seating booths, and decorative accents that perfectly complemented our aesthetic. "/>
            <TestimonialCard image={user4} name="Vikas" company="Accountant" feedback="We hired Shobhe Carpenter to outfit our office space with custom desks, shelving units, and conference tables. Not only did they deliver high-quality pieces that met our exact specifications, but they also completed the project ahead of schedule."/>
            <TestimonialCard image={user5} name="Manisha" company="House Wife" feedback="Shobhe Carpenter provided exceptional service from start to finish. Their team worked closely with us to design and build custom display units and signage for our retail store."/>
        </div>
        <p>Scroll Right For More</p>
    </div>
  )
}
