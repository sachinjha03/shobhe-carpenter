import React, { useEffect, useState } from 'react'
import "../Admin Css/AdminDashboard.css"
import ServiceManagementCard from '../Admin Components/ServiceManagementCard'
import QueryManagementCard from '../Admin Components/QueryManagementCard'
import ProductManagementCard from '../Admin Components/ProductManagementCard'
export default function AdminDashboard() {
    const [newServiceData , setNewServiceData] = useState({serviceImage:"",serviceName:"",serviceDescription:""})
    const [newProductData , setNewProductData] = useState({productImage:"",productName:"",productDescription:"" , productPrice : 0 , productWidth : 0 , productHeight : 0})
    const [readServiceData , setReadServiceData] = useState([])
    const [readContactData , setReadContactData] = useState([])
    const [readProductData , setReadProductData] = useState([])

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

        const fetchContactData = async() => {
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/read-query" , {
                method : 'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            const json = await response.json()
            if(json.success){
                setReadContactData(json.data)
            }
        }
        fetchContactData()

        const fetchProductData = async() => {
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/read-product" , {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const json = await response.json()
            if(json.success){
                setReadProductData(json.data)
            }
        }

        fetchProductData()


    } , [])

    const handleServiceChange = (e) => {
        setNewServiceData({...newServiceData , [e.target.name] : e.target.value})
    }
    const handleServiceSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/add-service" , {
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body : JSON.stringify({image:newServiceData.serviceImage , name : newServiceData.serviceName , description : newServiceData.serviceDescription})
            })
            const json = await response.json()
            if(json.success){
                alert("New Service Added Successfully!!")
                window.location.reload()
            }
            console.log(json);
        }catch(err){
            console.log(err);
        }
    }

    const handleProductChange = async(e) => {
        setNewProductData({...newProductData , [e.target.name] : e.target.value})
    }
    const handleProductSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/add-product" , {
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({image:newProductData.productImage , name : newProductData.productName , description : newProductData.productDescription , price : newProductData.productPrice , width : newProductData.productWidth , height : newProductData.productHeight})
            })
            const json = await response.json()
            if(json.success){
                alert("Product Added Successfully")
                window.location.reload()
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='admin-dashboard'>
        {/* {window.scrollTo(0, 0)} */}
        <div className="admin-dashboard-landing-section">
            <h3>Welcome To</h3>
            <h1>Admin <span>Dashboard</span></h1>
            <p>Welcome to the Shobhe Carpenter Admin Dashboard, your central hub for managing and optimizing your carpentry business operations. Designed with efficiency and convenience in mind, our admin dashboard empowers you to streamline your workflow, track project progress, and make informed decisions to drive business growth.</p>
            <h4>Let's Explore The Features You Have</h4>
            <div className="scroll-animation-box">
                    <div className="scroll-animation-circle"></div>
            </div>
        </div>
        <div className="service-management-section">
            <div className="service-management-section-header">
                <h2>Manage Your Services</h2>
            </div>
            <div className="service-management-section-bottom">
                <form className="service-management-form" onSubmit={handleServiceSubmit}>
                    <h3>Add Service</h3>
                    <div className="input-box">
                        <p>Enter Image Url</p>
                        <input type="text" className="input-field" name='serviceImage' onChange={handleServiceChange} value={newServiceData.image} required/>
                    </div>
                    <div className="input-box">
                        <p>Enter Service Name</p>
                        <input type="text" className="input-field" name='serviceName' onChange={handleServiceChange} value={newServiceData.name} required/>
                    </div>
                    <div className="input-box">
                        <p>Enter Description</p>
                        <textarea className="input-field" name='serviceDescription' onChange={handleServiceChange} value={newServiceData.description} required></textarea>
                    </div>
                    <input type="submit" value="Add Service" className='btn-a'/>
                </form>
                <div className="service-management-scrollable-section">
                    {readServiceData.map((currElem) => (
                        <ServiceManagementCard key={currElem._id} image={currElem.image} name={currElem.name} description={currElem.description} id={currElem._id}/>
                    ))}
                </div>
            </div>
        </div>
        <div className="user-query-management-section service-management-section">
            <div className="service-management-section-header">
                <h2>User Queries</h2>
            </div>
            <div className="user-query-management-section-bottom">
                {readContactData.slice().reverse().map((elem) => (
                    <QueryManagementCard key={elem._id} name={elem.name} email={elem.email} contact={elem.contact} query={elem.query} id={elem._id} />
                ))}
            </div>
        </div>
        <div className="service-management-section product-management-section">
            <div className="service-management-section-header">
                <h2>Product Management</h2>
            </div>
            <div className="service-management-section-bottom">
                <form className="service-management-form product-management-form" onSubmit={handleProductSubmit}>
                    <h3>Add Product</h3>
                    <div className="input-box">
                        <p>Enter Image Url</p>
                        <input type="text" className="input-field" name='productImage' onChange={handleProductChange} value={newProductData.productImage} required/>
                    </div>
                    <div className="input-box">
                        <p>Enter Product Name</p>
                        <input type="text" className="input-field" name='productName' onChange={handleProductChange} value={newProductData.productName} required/>
                    </div>
                    <div className="input-box">
                        <p>Enter Description</p>
                        <textarea className="input-field" name='productDescription' onChange={handleProductChange} value={newProductData.productDescription} required></textarea>
                    </div>
                    <div className="input-box">
                        <p>Enter Pricing</p>
                        <input type="number" className="input-field" name='productPrice' onChange={handleProductChange} value={newProductData.productPrice} required/>
                    </div>
                    <div className="row">
                    <div className="input-box">
                        <p>Width (inch)</p>
                        <input type="number" className="input-field" name='productWidth' onChange={handleProductChange} value={newProductData.productWidth} required/>
                    </div>
                    <div className="input-box">
                        <p>Height (inch)</p>
                        <input type="number" className="input-field" name='productHeight' onChange={handleProductChange} value={newProductData.productHeight} required/>
                    </div>
                    </div>
                    <input type="submit" value="Add Product" className='btn-a'/>
                </form>
                <div className="service-management-scrollable-section">
                    {readProductData.map((currElem) => (
                        <ProductManagementCard key={currElem._id} image={currElem.image} name={currElem.name} description={currElem.description} price={currElem.price} width={currElem.width} height={currElem.height} id={currElem._id}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
