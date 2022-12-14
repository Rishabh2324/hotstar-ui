import React from 'react';
import BannerComponent from '../../components/BannerComponent';
import ThumbnailCardList from '../../containers/ThumbnailCardList';

import { ReactComponent as FaceBookShareIcon } from '../../assets/icons/facebookShareIcon.svg';
import { ReactComponent as LinkShareIcon } from '../../assets/icons/linkIcon.svg';
import { ReactComponent as TwitterShareIcon } from '../../assets/icons/twitterIcon.svg';
import { ReactComponent as AddToWatchListIcon } from '../../assets/icons/addIcon.svg';
import { ReactComponent as AddedToWatchListIcon } from '../../assets/icons/rightTickIcon.svg';

import data from '../../data.json';

import './style.scss';

const PreviewPage = () => {
  return (
    <div className="PreviewPage">
      <BannerComponent
        linkTo={''}
        bannerSrc="https://images.unsplash.com/photo-1611076351766-d561d39b6af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        bannerAlt="w1"
      >
        <>
          <strong>Subscribe</strong>
          <p>Watch More</p>
        </>
      </BannerComponent>

      <div className="PreviewPage__details">
        <h4 className="PreviewPage__details-title">{'Rorschach'}</h4>
        <p className="PreviewPage__details-cate">
          <span>{'Thriller'}</span> | <span>{'Malyalam'}</span>
        </p>
        <p className="PreviewPage__details-year">
          <span>{'2022'}</span> | <span>{'U/A 16+'}</span>
        </p>
        <p className="PreviewPage__details-desc">
          {
            'Luke Anthony comes to a village searching for his missing wife. His suspicious activities start drawing the attention of the villagers. What is his real motive?.Luke Anthony comes to a village searching for his missing wife. His suspicious activities start drawing the attention of the villagers. What is his real motive?.'
          }
        </p>
        <div className="PreviewPage__socialMediaWrapper">
          <AddToWatchListIcon className="PreviewPage__socialMediaWrapper-mediaIcon" />
          <AddedToWatchListIcon className="PreviewPage__socialMediaWrapper-mediaIcon" />
          <FaceBookShareIcon className="PreviewPage__socialMediaWrapper-mediaIcon" />
          <TwitterShareIcon className="PreviewPage__socialMediaWrapper-mediaIcon" />
          <LinkShareIcon className="PreviewPage__socialMediaWrapper-mediaIcon" />
        </div>
        <ThumbnailCardList
          leftClickableLink="/"
          leftClickableText="More like this"
          rightClickableLink="/"
          rightClickableText="More"
          listData={data.data}
        />
        <ThumbnailCardList
          leftClickableLink="/"
          leftClickableText="More like this"
          rightClickableLink="/"
          rightClickableText="More"
          listData={data.data}
        />{' '}
        <ThumbnailCardList
          leftClickableLink="/"
          leftClickableText="More like this"
          rightClickableLink="/"
          rightClickableText="More"
          listData={data.data}
        />
        <ThumbnailCardList
          leftClickableLink="/"
          leftClickableText="More like this"
          rightClickableLink="/"
          rightClickableText="More"
          listData={data.data}
        />
        <ThumbnailCardList
          leftClickableLink="/"
          leftClickableText="More like this"
          rightClickableLink="/"
          rightClickableText="More"
          listData={data.data}
        />
      </div>
    </div>
  );
};

export default PreviewPage;
