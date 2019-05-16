import React, {useState} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import './Search.scss';
import {performSearch} from "../../reducers/searchReducer";

function Search(props) {
  const {performSearch, history} = props;
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSearch();
    }
  }

  function handleSearch(e) {
    if(!value){
      return null;
    }
    history.push('/search');
    performSearch(value);
  }

  return (
    <section className="main-search">
      <input className="main-search__field" value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
      <button className="main-search__button" onClick={handleSearch}>search</button>
    </section>
  )
}

export default withRouter(connect(
  () => ({}),
  {
    performSearch
  }
)(Search));
