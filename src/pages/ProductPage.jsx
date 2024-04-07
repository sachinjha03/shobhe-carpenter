import React, { useEffect, useState } from 'react'
import "../css/page css/ProductPage.css"
import sofa from "../images/sofa.png"
import ProductCard from '../components/ProductCard'
import newSofa from "../images/new sofa.png"
import table from "../images/table.png"
import chair from "../images/chair.png"


export default function ProductPage() {
    const [readProduct , setReadProduct] = useState([])
    useEffect(() => {
        const fetchProductData = async() => {
            try{
                const response = await fetch("https://shobhe-carpenter-backend.onrender.com/api/read-product" , {
                    method:'GET',
                    headers : {
                        'Content-Type':'application/json'
                    }
                })
                const json = await response.json()
                if(json.success){
                    setReadProduct(json.data)
                }
            }catch(err){
                console.log(err);
            }
        }
        fetchProductData()
    }, [])
  return (
    <div className='product-page'>
        <div className="product-page-header">
            <div className="product-page-header-left">
                <h3>Explore Our</h3>
                <h1>Wide Range Of <span>Products</span></h1>
                <p>At Shobhe Carpenter, we offer a diverse range of high-quality carpentry products to suit your every need and style preference. Whether you're looking to furnish your home, upgrade your commercial space, or enhance your outdoor living area</p>
            </div>
            <div className="product-page-header-right">
                <img src={sofa} alt="" />
            </div>
        </div>
        <div className="product-page-product-section">
            {readProduct.map((currElem) => (          
                <ProductCard key={currElem._id} image={currElem.image} name={currElem.name} description={currElem.description} price={currElem.price} width={currElem.width} height={currElem.height}/>
            ))}
        </div>
    </div>
  )
}
