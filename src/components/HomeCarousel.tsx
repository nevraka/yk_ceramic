import React from 'react';
import Slider from 'react-slick';

const HomeCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  const urls = [];

  for (let i = 1; i <= 10; i++) {
    let numStr = i.toString();
    numStr = numStr.padStart(2, '0');
    urls.push(`/photos/carousel-${numStr}.jpeg`);
  }

  return (
    <div className="pb-8">
      <Slider {...settings}>
        {urls.map((u) => (
          <img className="w-screen h-4/6 object-cover" src={u} />
        ))}
      </Slider>
    </div>
  );
};

export default HomeCarousel;
