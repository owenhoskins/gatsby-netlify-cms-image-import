import React from 'react'
import Img from 'gatsby-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import _ from 'lodash'


export default ({ images }) =>
  <div style={{
    padding: '0 1.5rem 30px 1.5rem',
  }}>
    <Slider
      dots={true}
      infinite
      speed={1000}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={false}
      autoplay={true}
      autoplaySpeed={10000}
    >
      {_.sortBy(images, 'node.sizes.src')
        .map(({ node: { sizes }}) =>
        <figure
          key={sizes.src}
          className="image"
        >
          <Img
            sizes={sizes}
          />
        </figure>

      )}
    </Slider>
  </div>
