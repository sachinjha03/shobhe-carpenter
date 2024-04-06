import React  , {useState} from 'react'
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom'
import "../css/page css/HomePage.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import aboutImage from "../images/about section image.png"
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CallIcon from '@mui/icons-material/Call';
import TestimonialSection from '../components/TestimonialSection';
import gallery1 from "../images/g1.jpg"
import gallery2 from "../images/g2.jpg"
import gallery3 from "../images/g3.jpg"
import gallery4 from "../images/g4.jpg"
import gallery5 from "../images/g5.jpg"
import gallery6 from "../images/g6.jpg"
import gallery7 from "../images/g7.jpg"
import gallery8 from "../images/g8.jpg"
import gallery9 from "../images/g9.jpg"
export default function HomePage() {
    const [zoomedImage, setZoomedImage] = useState(null);

  const handleZoom = (imageUrl) => {
    setZoomedImage(imageUrl);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };
  return (
    <>  
        {/* {window.scrollTo(0, 0)} */}
        <div className="home-page-landing-section">
            <div className="home-page-landing-section-content">
                <h3>Welcome To</h3>
                <h1>Shobhe <span>Carpenters</span></h1>
                <p>Welcome to Shobhe Carpenter, your premier destination for expert carpentry services. With a dedication to quality craftsmanship and customer satisfaction, we pride ourselves on transforming your vision into reality.</p>
                <a href="#aboutSection" className='link-a btn-a'>Explore</a>
                <div className="scroll-animation-box">
                    <div className="scroll-animation-circle"></div>
                </div>
            </div>
        </div>
        <div className="about-section" id='aboutSection'>
            <div className="about-section-left">
                <h2><span>Who</span> We Are ?</h2>
                <p>At Shobhe Carpenter, we are more than just a carpentry company - we are a team of passionate craftsmen dedicated to creating beautiful and functional spaces for our clients. With a wealth of experience in the industry, our team brings together a unique blend of expertise, creativity, and attention to detail..</p>
                <p>Founded on the principles of integrity, professionalism, and excellence, Shobhe Carpenter has quickly become a trusted name in the carpentry industry. From residential projects to commercial ventures, we approach every job with the same level of commitment and enthusiasm, striving to exceed our clients' expectations with each and every project.</p>
                <div className="social-media-links">
                    <Link to=""><InstagramIcon className='social-media-icons'/></Link>
                    <Link to=""><FacebookIcon className='social-media-icons'/></Link>
                    <Link to=""><YouTubeIcon className='social-media-icons'/></Link>
                </div>
                <a href="https://wa.me/918742920558" target='_blank' className='link-a btn-a flex-btn'>Connect On <WhatsAppIcon/></a>
            </div>
            <div className="about-section-right">
                <img src={aboutImage} alt="" />
            </div>
        </div>
        <div className="quality-section">
            <div className="quality-card">
                <Diversity3Icon className='quality-card-icon'/>
                <h3>Craftsmanship Masterworks</h3>
                <p>Embark on a journey of unparalleled quality with Craftsmanship Masterworks. Our name speaks to our commitment to excellence in every project we undertake. From intricate woodworking details to flawless finishes</p>
            </div>
            <div className="quality-card">
                <AddModeratorIcon className='quality-card-icon'/>
                <h3>Precision Woodworks Co.</h3>
                <p>Precision Woodworks Co. is synonymous with attention to detail and exacting standards. With a focus on precision and accuracy, we specialize in creating custom woodworks that are as functional as they are beautiful. </p>
            </div>
            <div className="quality-card">
                <AttractionsIcon className='quality-card-icon'/>
                <h3>Artisan Carpentry Creations</h3>
                <p>Elevate your space with Artisan Carpentry Creations, where craftsmanship meets creativity. Our name reflects our passion for the artistry of carpentry, as we strive to create unique and inspired designs that showcase the beauty of natural wood.</p>
            </div>
        </div>
        <div className="offer-section">
            <h2>Get The <span>Best Deal</span></h2>
            <p>Contact Shobhe Carpenter to schedule a consultation. During this meeting, discuss your project in detail, including your vision, specific requirements, and budget constraints. </p>
            <a href='tel:8742920558' className='link-a btn-a flex-btn'>Call Now <CallIcon/></a>
        </div>
        <TestimonialSection/>

        <div className="gallery-section">
            <div className="gallery-section-header">
                <h2>Our Gallery</h2>
            </div>
            <div className="gallery-section-bottom">
                <img src={gallery1} alt="" onClick={() => handleZoom(gallery1)}/>
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
                <img src={gallery7} alt="" />
                <img src={gallery8} alt="" />
                <img src={gallery9} alt="" />
            </div>
        </div>
            {zoomedImage && (
        <div className="zoom-container">
          <div className="zoom-overlay" onClick={handleCloseZoom}></div>
          <div className="zoom-modal">
            <span className="close-btn" onClick={handleCloseZoom}>Close</span>
            <ReactImageZoom
              {...{
                width: 300,
                height: 300,
                zoomWidth: 500,
                img: zoomedImage,
                zoomPosition: 'original',
              }}
            />
          </div>
        </div>
      )}


        <div className="expertise-section">
            <div className="expertise-section-top">
                <h2>Our <span>Expertise</span></h2>
            </div>
            <div className="expertise-section-bottom">
                <div className="expertise-card">
                    <h2>Custom Furniture Design</h2>
                    <p>Shobhe Carpenter specializes in the design and fabrication of custom furniture pieces tailored to your specific needs and style preferences. Whether you're looking for a one-of-a-kind dining table, a unique storage solution, or a bespoke bedroom set, our skilled craftsmen can bring your vision to life with precision and artistry.</p>
                </div>
                <div className="expertise-card">
                    <h2>Architectural Millwork</h2>
                    <p>Our expertise in architectural millwork and trim carpentry allows us to enhance the beauty and elegance of your home or commercial space. From crown molding and baseboards to custom cabinetry and wainscoting.</p>
                </div>
                <div className="expertise-card">
                    <h2>Kitchen and Bathroom Renovations</h2>
                    <p>Shobhe Carpenter is your partner of choice for kitchen and bathroom renovations that combine functionality, style, and durability. Whether you're looking to update your kitchen with custom cabinets, countertops, and backsplashes or revitalize your bathroom with custom vanities</p>
                </div>
                <div className="expertise-card">
                    <h2>Commercial Fit-Outs and Retail Displays</h2>
                    <p>When it comes to commercial fit-outs and retail displays, Shobhe Carpenter excels in creating visually stunning and highly functional spaces that leave a lasting impression on customers and clients alike.</p>
                </div>
            </div>
        </div>
    </>
  )
}
