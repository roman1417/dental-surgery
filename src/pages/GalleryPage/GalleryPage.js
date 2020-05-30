import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import { GalleryWrapper, GalleryTitle } from './GalleryPage.css';
import images from 'assets/gallery';

const GalleryPage = () => (
  <GalleryWrapper>
    <GalleryTitle>Galeria</GalleryTitle>
    <ImageGallery items={images} />
  </GalleryWrapper>
);

export default React.memo(GalleryPage);