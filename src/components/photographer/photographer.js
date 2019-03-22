import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { Container, breakpoints } from 'Components/layout/layout';
import { colors } from 'Styles/colors';

import img1 from 'Images/PETE0002-1.jpg';
import img2 from 'Images/PETE0196-as-Smart-Object-1.jpg';
import img3 from 'Images/PO000058-as-Smart-Object-1.jpg';
import img4 from 'Images/PO000359-3.jpg';
import img5 from 'Images/PO006781-as-Smart-Object-1.jpg';

const images = [img1, img2, img3, img4, img5];

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 90vh;

  .photo {
    position: absolute;
    z-index: 10;

    & img {
      position: absolute;
      background-color: black;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      object-fit: contain;
      opacity: 0;
      transition: opacity 1000ms;

      &.active {
        opacity: 1;
      }

      @media (min-width: ${breakpoints.mobile}) {
        object-fit: cover;
      }
    }
  }

  .content {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    color: ${colors.primary};

    & .layout {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media (min-width: ${breakpoints.mobile}) {
        padding-top: 4rem;
      }
    }

    a {
      color: ${colors.primary};
    }

    .links {
      padding-top: 1rem;
      font-size: 1rem;
      text-align: right;

      & > div {
        margin-bottom: 1rem;

        svg {
          display: inline-block;
          margin-left: 1rem;
        }
      }

      @media (min-width: ${breakpoints.mobile}) {
        font-size: 1.4rem;
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
      <div className="photo" id="photographer">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={index === currentImage ? 'active' : ''}
          />
        ))}
      </div>
      <div className="content">
        <Container>
          <div className="layout">
            <div>
              <h2>Photographer</h2>
            </div>
            <div className="links">
              <div>
                <a href="http://street.pics">street.pics</a>
                <i className="fab fa-tumblr-square" />
              </div>
              <div>
                <a href="https://instagram.com/peterorum">instagram</a>
                <i className="fab fa-instagram" />
              </div>
              <div>
                <a href="https://www.facebook.com/peterorumphotography">
                  facebook
                  <i className="fab fa-facebook" />
                </a>
              </div>
              <div>
                <a href="https://www.flickr.com/photos/petero2">flickr</a>
                <i className="fab fa-flickr" />
              </div>
              <div>
                <a href="http://au.blurb.com/user/petero2">books</a>
                <i className="fas fa-book" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Wrapper>
  );
};
