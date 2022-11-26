import { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';

import Clickable from '../../components/Clickable';
import ThumbnailCard, { IThumbnailCard } from '../../components/ThumbnailCard';

import './style.scss';

interface IThumbnailCardList {
  leftClickableText: string;
  leftClickableLink: string;
  rightClickableText: string;
  rightClickableLink: string;
  listData: IThumbnailCard[];
}

const ThumbnailCardList: FC<IThumbnailCardList> = ({
  leftClickableText,
  leftClickableLink,
  rightClickableText,
  rightClickableLink,
  listData,
}) => {
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
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
    <section className="ThumbnailCardList">
      <div className="ThumbnailCardList__Summary">
        <Clickable
          label={leftClickableText}
          size="large"
          linkTo={leftClickableLink}
        />
        <Clickable
          label={rightClickableText}
          linkTo={rightClickableLink}
          isHoverable={false}
        />
      </div>
      {/* TO DO NEED TO UPDATE THIS AS LOADING SKELETON LOGIC */}
      {data.length > 0 && (
        <Slider {...settings} className="ThumbnailCardList__List">
          {data.map((item, index) => (
            <ThumbnailCard
              key={index}
              linkTo={item.linkTo}
              summary={item.summary}
              category={item.category}
              assetUrl={item.assetUrl}
              title={item.title}
              className="ThumbnailCardList__List-Item"
            />
          ))}
        </Slider>
      )}
    </section>
  );
};

export default ThumbnailCardList;
