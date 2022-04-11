import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Navbar from './comps/navbar';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App" style={{ backgroundImage: "url(/images/szabolcs-toth-CyuvsE3TVak-unsplash.jpg)" }}>
      <Navbar />
      <header >
        <Title />
      </header>
      <div className='content-body'>
        <div className='token-info text-box'>
          <h2>What is the Gainz Gym?</h2>
          <p>So who are we?! <br/><br/>
Gainz Club is a one man passion project with the goal of bringing together the fitness industry and the world of NFT's! 
We will be releasing 1500 Gainz shaker NFT's in 3 stages of 500. This way we don't dilute supply and keep people on their toes.<br/><br/>
The project will be run on the solana ecosystem and sold on solsea.io, price TBD.<br/><br/>
With each purchase, you will get access to a growing community, a free gift per person and discounts on fitness supplements and the upcoming #GainzClubNFT merchandise being supplied from a local small business.<br/>
Further benefits are in the pipeline! Watch this space! <br/><br/>
Support a small business!<br/></p>
        </div>
        <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        
        <div className='team-info'></div>
      </div>
      <footer>
        <h2>Designed and created by Corruption (aka. Project Owner)</h2>
      </footer>
    </div>
  );
}

export default App;
