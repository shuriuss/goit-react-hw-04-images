import Searchbar from './Searchbar';
import { fetchSearch } from '../service/fetchSearch';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader';
import s from './App.module.css';
import { useState, useEffect } from 'react';

export function App() {
  const [page, setPage] = useState(1);
  const [search, setSerch] = useState(null);
  const [imgItem, setImgItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const hadnleSubmitForm = value => {
    setSerch(value);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!search) {
      return;
    }

    setIsLoading(true);
    fetchSearch(search, page).then(data => {
      setImgItem(prev => {
        return [...prev, ...data.hits];
      });
      setIsLoading(false);
    });
  }, [search, page]);

  return (
    <div className={s.app}>
      <Searchbar onSubmitForm={hadnleSubmitForm} />
      <ImageGallery images={imgItem} onLoadMore={handleLoadMore} />
      {isLoading && <Loader />}
    </div>
  );
}

// export class App extends Component {
//   state = {
//     page: 1,
//     search: null,
//     imgItem: [],
//     isLoading: false,
//   };

//   componentDidUpdate(prefProps, prevState) {

//     const { search, page } = this.state;
//     if (prevState.search !== search || prevState.page !== page) {
//       this.setState({isLoading:true})
//       fetchSearch(this.state.search, this.state.page).then(data => {
//         this.setState({ imgItem: [...this.state.imgItem, ...data.hits,], isLoading:false});
//       });
//     }
//   }

//   hadnleSubmitForm = value => {
//     this.setState({ search: value, imgItem: [], page: 1 });
//   };

//   handleLoadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   render() {
//     return (
//       <div className={s.app}>
//         <Searchbar onSubmitForm={this.hadnleSubmitForm} />
//         <ImageGallery
//           images={this.state.imgItem}
//           onLoadMore={this.handleLoadMore}
//         />
//         {this.state.isLoading && <Loader />}
//       </div>
//     );
//   }
// }
