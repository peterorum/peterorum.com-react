import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import img1 from 'Images/PETE0002-1.jpg';
import img2 from 'Images/PETE0196 as Smart Object-1.jpg';
import img3 from 'Images/PO000058-as-Smart-Object-1.jpg';
import img4 from 'Images/PO000359-3.jpg';
import img5 from 'Images/PO006781-as-Smart-Object-1.jpg';

const images = [img1, img2, img3, img4, img5];

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;

  .photo {
    /* position: absolute; */

    & img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1000ms;

      &.active {
        opacity: 1;
      }
    }
  }
`;

export const Photographer = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // change image every 5 seconds

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
  }, [currentImage]);

  return (
    <Wrapper>
      <div className="photo">
        {images.map((image, index) => (
          <img
            src={image}
            alt=""
            className={index === currentImage ? 'active' : ''}
          />
        ))}
      </div>
      Photographer2
    </Wrapper>
  );
};
