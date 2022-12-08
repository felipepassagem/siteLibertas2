import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/imgs/odonto.png"
import img2 from "../assets/imgs/agua.png"
import img3 from "../assets/imgs/mec.png"

function CarouselTop() {

  const imgs = [img1, img2, img3]

  return (
    <div>
      <Carousel fade>

      {imgs.map((img) => {
        console.log(img)
        return(
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100 carouselImg"
            src={img}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        )
      })}


        

        
        
      </Carousel>
    </div>
  );
}

export default CarouselTop;


{/* <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100 carouselImg"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
