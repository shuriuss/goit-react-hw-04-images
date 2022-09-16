import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { web, tag, largeImageURL } = this.props;

    return (
      <>
        <li  className={s.galleryItem}>
          <img
            src={web}
            alt={tag}
            className={s.image}
            onClick={this.handleToggleModal}
          />
        </li>
        {this.state.isModalOpen && (
          <Modal onCloseModal={this.handleToggleModal}>
            <img src={largeImageURL} alt={tag.split(',')} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
