import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App" style={{ backgroundImage: "url(/images/szabolcs-toth-CyuvsE3TVak-unsplash.jpg)" }}>
      <header >
        <Title />
      </header>
      <div className='content-body'>
        <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <div className='token-info'>

        </div>
        <div className='team-info'>
          
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
