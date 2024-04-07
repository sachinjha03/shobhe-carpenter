import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../css/page css/ServicePage.css"
import service1 from "../images/modular kitchen.jpg"
import service2 from "../images/modern bedroom.jpg"
import service3 from "../images/modern furniture.jpg"
import service4 from "../images/modern hall.jpg"
import service5 from "../images/modern bedroom 2.jpg"
import care from "../images/care.png"
export default function ServicePage() {

    const[readServiceData , setReadServiceData] = useState([])

    useEffect(() => {
        const fetchServiceData = async() => {
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/read-services" , {
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            const json = await response.json()
            setReadServiceData(json.data)
        }
        fetchServiceData()
    } , [])
  return (
    <div className='service-page'>
        <div className="service-page-header-section">
            <div className="service-page-header-box">
                <div className="service-page-header-box-left">
                    <h2>We Care!!</h2>
                    <p>At Shobhe Carpenter, our commitment to our clients goes beyond just delivering exceptional carpentry services. We genuinely care about your satisfaction and the success of your project. Here's how we demonstrate our dedication to you</p>
                    <p>We believe in treating each client as an individual with unique needs and preferences. That's why we take the time to listen to your ideas, concerns, and expectations.</p>
                    <Link to="/contact" className="btn-a link-a">Visit Us</Link>
                </div>
                <div className="service-page-header-box-right">
                    <img src={care} alt="" />
                </div>
            </div>
        </div>
        <div className="service-page-service-section">
            <div className="service-page-service-section-header">
                <h2>Our Services</h2>
            </div>
            <div className="service-page-service-section-bottom">
                {readServiceData.map((elem) => {
                    return(
                        <div className="service-card" key={elem._id}>
                            <div className="service-card-content">
                                <h3>{elem.name}</h3>
                                <p>{elem.description}</p>
                                <a href="tel:9755107804" className="btn-a link-a">Call Now</a>
                            </div>
                            <div className="service-card-image">
                                <img src={elem.image} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
