import React , {useState} from 'react'
import ReactImageZoom from 'react-image-zoom';
import gallery1 from "../images/g1.jpg"
import gallery2 from "../images/g2.jpg"
import gallery3 from "../images/g3.jpg"
import gallery4 from "../images/g4.jpg"
import gallery5 from "../images/g5.jpg"
import gallery6 from "../images/g6.jpg"
import gallery7 from "../images/g7.jpg"
import gallery8 from "../images/g8.jpg"
import gallery9 from "../images/g9.jpg"
export default function GallerySection() {
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleZoom = (imageUrl) => {
        setZoomedImage(imageUrl);
    };

    const handleCloseZoom = () => {
        setZoomedImage(null);
    };
    return (
       <>
        <div className="gallery-section">
            <div className="gallery-section-header">
                <h2>Our Gallery</h2>
            </div>
            <div className="gallery-section-bottom">
                <img src={gallery1} alt="" onClick={() => handleZoom(gallery1)} />
                <img src={gallery2} alt="" onClick={() => handleZoom(gallery2)} />
                <img src={gallery3} alt="" onClick={() => handleZoom(gallery3)} />
                <img src={gallery4} alt="" onClick={() => handleZoom(gallery4)} />
                <img src={gallery5} alt="" onClick={() => handleZoom(gallery5)} />
                <img src={gallery6} alt="" onClick={() => handleZoom(gallery6)} />
                <img src={gallery7} alt="" onClick={() => handleZoom(gallery7)} />
                <img src={gallery8} alt="" onClick={() => handleZoom(gallery8)} />
                <img src={gallery9} alt="" onClick={() => handleZoom(gallery9)} />
            </div>
        </div>
    {
        zoomedImage && (
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
        )
    }
    </> 
  )
}
