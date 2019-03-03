import React, { useState } from 'react';

import { ImageWrapper, ActiveImage, ActiveImageContainer, AllImages, Thumbnail } from './styles';

const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  if (images.length === 0) return null;

  return (
    <ImageWrapper>
      <ActiveImageContainer>
        <ActiveImage src={images[activeImage].localFile.childImageSharp.fluid.src} />
      </ActiveImageContainer>
      <AllImages>
        {images.map(({ id, localFile }, index) => {
          return (
            <Thumbnail
              key={id}
              src={localFile.childImageSharp.fluid.src}
              active={activeImage === index}
              onClick={() => setActiveImage(index)}
            />
          );
        })}
      </AllImages>
    </ImageWrapper>
  );
};

export default ProductImages;