import React from 'react'
import Img from 'gatsby-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default ({ images }) =>
  <div style={{
    padding: '0 1.5rem',
    overflow: 'hidden',
  }}>
    <Slider
      dots={false}
      infinite
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={false}
      autoplay={true}
      autoplaySpeed={5000}
    >
      {images.map(({ node: { sizes }}) =>
        <figure
          key={sizes.src}
          className="image"
          style={{ padding: '0 1rem'}}
        >
          <Img
            sizes={sizes}
          />
        </figure>

      )}
    </Slider>
  </div>
