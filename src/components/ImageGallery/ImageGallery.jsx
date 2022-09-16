// import { Component} from 'react';

import s from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from '../Button';


export function ImageGallery({ images, onLoadMore }) {
  

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




// export class ImageGallery extends Component {
  

//   render() {
//     const { images, onLoadMore } = this.props;
//     return (
//       <>
//         <ul className={s.gallery}>
//           {images.map(image => {
//             console.log(image.webformatURL);
//             return (
//               <ImageGalleryItem
//                 key={image.id}
//                 web={image.webformatURL}
//                 tag={image.user}
//                 largeImageURL={image.largeImageURL}
                
//               />
//             );
//           })}
//         </ul>

//         {images.length > 0 && <Button onLoadMore={onLoadMore} />}

       
//       </>
//     );
//   }
// }

