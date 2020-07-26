import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import './demo-Video.css'
export class demoVideo extends Component {
    render() {
        return (
            <div>
                <Carousel style={{bordereRadius: "10px"}} >
  <Carousel.Item style={{bordereRadius: "10px"}} >
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-HD-Nature-Images-Free-Download.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-HD-Nature-Images-Free-Download.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-HD-Nature-Images-Free-Download.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}

export default demoVideo
