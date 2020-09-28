import React from 'react';
import styled from 'styled-components';

const ImagePreview = ({ value }) => {
  if (value?.imageUrl) {
    const { imageUrl, alt, caption, roundedCorners } = value;

    if (imageUrl) {
      return (
        <Figure>
          <Image alt={alt} src={imageUrl} roundedCorners={roundedCorners} />
          {caption && <figcaption style={{fontStyle: 'italic', opacity: '75%', fontSize: '14px'}}>{caption}</figcaption>}
        </Figure>
      );
    }
  }
  return null;
};

export default ImagePreview;

const Figure = styled.figure`
  margin: 0;
`
const Image = styled.img`
  border-radius: ${props => props.roundedCorners ? '20px' : '0'};
  width: 100%;
  margin: 0;
`