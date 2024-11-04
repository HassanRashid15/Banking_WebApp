import React from 'react'
import HeroBanner from './HeroBanner'
import MarqueeSlider from './MarqueeSlider';
import Achievement from './Achievement';
import OurProduct from './OurProduct';
import TrackRecord from './TrackRecord';
import Newsletter from './Newsletter';

function Home() {
  return (
    <div>
      <HeroBanner />
      <MarqueeSlider />
      <Achievement />
      <OurProduct />
      <TrackRecord />
      <Newsletter/>
    </div>
  );
}

export default Home