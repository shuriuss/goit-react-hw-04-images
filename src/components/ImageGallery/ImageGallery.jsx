import { Component } from 'react';

import s from './ImageGallery.module.css';
// import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from '../Button';



export class ImageGallery extends Component {
  

  render() {
    const { images, onLoadMore } = this.props;
    return (
      <>
        <ul className={s.gallery}>
          {images.map(image => {
            console.log(image.webformatURL);
            return (
              <ImageGalleryItem
                key={image.id}
                web={image.webformatURL}
                tag={image.user}
                largeImageURL={image.largeImageURL}
                
              />
            );
          })}
        </ul>

        {images.length > 0 && <Button onLoadMore={onLoadMore} />}

       
      </>
    );
  }
}

// export function ImageGallery({ images}) {
//   // console.log(images);
//   return (
//     <>
//       <ul className={s.gallery}>
//         {images.map((image)=>{
//           console.log(image.id);
//           return (
//             <ImageGalleryItem
//             id = {image.id}
//             src={images.webformatURL}
//             alt={images.user}
//             />
//           )
//         })}
//       </ul>
//     </>
//   );
// }

// }

// export default ImageGallery
