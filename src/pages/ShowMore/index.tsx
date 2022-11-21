import React from 'react';

import Clickable from '../../components/Clickable';
import ThumbnailCard from '../../components/ThumbnailCard';

import data from '../../data.json';

import './style.scss';

const ShowMore = () => {
  return (
    <div className="ShowMore">
      <div className="ShowMore__title">
        <Clickable
          size="large"
          isDisabled
          isHoverable={false}
          label={'Popular shows'}
        />
      </div>
      <div className="ShowMore__list">
        {data.data.map((item, index) => (
          <ThumbnailCard
            key={index}
            linkTo={item.linkTo}
            summary={item.summary}
            category={item.category}
            assetUrl={item.assetUrl}
            title={item.title}
            className="ShowMore__list___card"
          />
        ))}
      </div>
    </div>
  );
};

export default ShowMore;
