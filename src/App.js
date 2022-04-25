import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Navbar from './comps/navbar';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <header >
        <Title />
      </header>
      <div className='content-body'>
        <div className='text-box'>
          <h2>What is the Gainz Gym?</h2>
          <p>
Gainz Club is a one man passion project with the goal of bringing together the fitness industry and the world of NFT's! 
We will be releasing 1500 Gainz shaker NFT's in 3 stages of 500. This way we don't dilute supply and keep people on their toes.
The project will be run on the solana ecosystem and sold on solsea.io, price TBD.<br/><br/>
With each purchase, you will get access to a growing community, a free gift per person and discounts on fitness supplements and the upcoming #GainzClubNFT merchandise being supplied from a local small business.
Further benefits are in the pipeline! Watch this space! <br/><br/></p>
        </div>
        <div className='token-info text-box'>
          <div className='token-text'>
          <h2>The token</h2>
          <p>
            Each Gainz Shaker NFT is 1/1. These programmatically generated shakers make use of multiple trait variations to make sure no two are the same! <br /><br />
            These traits include:<br /><br />
          </p>
            <ul>
              <li> 5 Background colours: Blue, Green, Purple, Red, Yellow</li>
              <li> 5 Fluid colours: Gold, Neon Blue, Neon Green, Neon Orange, Neon Red</li>
              <li> 4 Hand options: No Hand, Green, Purple and Yellow</li>
              <li> 10 Cap Colours: Black, Dark Blue, Gold, Green, Grey, Light Blue, Pink, Purple, Red, Yellow</li>
              <li> 3 Logo Options: No Logo, Green or Blue</li>
          </ul><br /><br />
          <p>
            Each variation offers it own touch of rarity, allowing from some truely rare combinations to be made.
          </p>
          </div>
          <ImageGrid setSelectedImg={setSelectedImg} />
        </div>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <div className='text-box'>
          <h2>Utility: Gainz Rewards</h2>
          <p>
            We here at the Gainz Gym try and keep things simple, whether its in the gym or in business. And we are all about working with our hands! <br /><br />
            Thats why, along side a supportive community where fitness advice can be shared and Gainz celebrated, we are offering utility you can hold in your hands.</p>
            <ul>
              <li>In partnership with Enhanced Performance Nutrition, we are offering a free* gift of a shaker bottle to each holder</li>
              <li>Discounted products from EP-Nutrition</li>
              <li>Discounted project merchandise</li>
            </ul>
            <br /><br />
          <p>
            *P&P may still apply.
          </p>
        </div>
        <div className='team-info'></div>
      </div>
      <footer>
        <h2>Designed and created by Corruption</h2>
        <span>v {process.env.REACT_APP_VERSION}</span>
      </footer>
    </div>
  );
}

export default App;
