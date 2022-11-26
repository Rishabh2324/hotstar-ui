import React from 'react';
import BannerList from '../../containers/BannerList';

import data from '../../data.json';

const Home = () => {
  return (
    <div>
      <BannerList listData={data.data} />
    </div>
  );
};

export default Home;
