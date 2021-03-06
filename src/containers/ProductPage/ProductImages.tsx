import React, { useState } from 'react';

import { ImageWrapper, ActiveImage, ActiveImageContainer, AllImages, Thumbnail } from './styles';
import { Image } from '../ProductPage';

interface ImagesProps {
  images: Image[];
}

const ProductImages: React.FC<ImagesProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  if (images.length === 0) return null;

  return (
    <ImageWrapper>
      <AllImages>
        {images.map(({ id, localFile }, index) => {
          return (
            <Thumbnail
              key={id}
              src={localFile.childImageSharp.fluid.src}
              alt={`Product-Image-${index}`}
              active={activeImage === index}
              onClick={() => setActiveImage(index)}
            />
          );
        })}
      </AllImages>
      <ActiveImageContainer>
        <ActiveImage src={images[activeImage].localFile.childImageSharp.fluid.src} alt={`Product-Image-${activeImage}`} />
      </ActiveImageContainer>
    </ImageWrapper>
  );
};

export default ProductImages;
