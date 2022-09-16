import s from './Searchbar.module.css';
import { Component } from 'react';

import PropTypes from 'prop-types';



export class Searchbar extends Component {
  state = {
    search: '',
    
  };


  headleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.search)
   

  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.headleSubmit}>
          <button type="submit">
            <span className={s.buttonlabel}>Search</span>
          </button>

          <input
            className={s.input}
            type="text"
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.search}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  state: PropTypes.shape({
    search: PropTypes.string.isRequired
  }),
  headleSubmit: PropTypes.func,
  handleChange: PropTypes.func,

}

export default Searchbar;

