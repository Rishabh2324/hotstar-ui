import { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';
import BannerComponent from '../../components/BannerComponent';

import { IThumbnailCard } from '../../components/ThumbnailCard';

import './style.scss';

interface IBannerList {
  listData: IThumbnailCard[];
}

const BannerList: FC<IBannerList> = ({ listData }) => {
  const [data, setData] = useState<IThumbnailCard[]>([]);

  useEffect(() => {
    listData && setData(listData);
  }, [listData]);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: true,
          swipeToSlide: true,
          touchMove: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="BannerList">
      {/* TO DO NEED TO UPDATE THIS AS LOADING SKELETON LOGIC */}
      {data.length > 0 && (
        <Slider {...settings} className="BannerList__List">
          {data.map((item, index) => (
            <BannerComponent
              key={index}
              bannerAlt={item.title}
              bannerSrc={item.assetUrl}
              linkTo={item.linkTo}
              className="BannerList__List-Item"
            />
          ))}
        </Slider>
      )}
    </section>
  );
};

export default BannerList;
