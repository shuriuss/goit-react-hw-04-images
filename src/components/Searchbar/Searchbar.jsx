import s from './Searchbar.module.css';
import { useState } from 'react';

import PropTypes from 'prop-types';

export function Searchbar({ onSubmitForm }) {
  const [search, setSerch] = useState('');

  const headleSubmit = e => {
    e.preventDefault();
    onSubmitForm(search);
  };

  const handleChange = e => {
    setSerch(e.target.value)
  }

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={headleSubmit}>
        <button type="submit">
          <span className={s.buttonlabel}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={search}
        />
      </form>
    </header>
  );
}

// export class Searchbar extends Component {
//   state = {
//     search: '',
//   };

//   headleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmitForm(this.state.search);
//   };

//   handleChange = e => {
//     this.setState({ search: e.target.value });
//   };

//   render() {
//     return (
//       <header className={s.searchbar}>
//         <form className={s.form} onSubmit={this.headleSubmit}>
//           <button type="submit">
//             <span className={s.buttonlabel}>Search</span>
//           </button>

//           <input
//             className={s.input}
//             type="text"
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={this.state.search}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  state: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }),
  headleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default Searchbar;
