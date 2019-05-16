import React from 'react';
import './SearchPage.scss';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import Container from "../../components/Container/Container";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";

export function SearchPage(props) {
  const {results} = props;
  const headerName = results.length ? "search-header" : "search-header search-header--empty";
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbsItem to="Search">Search results</BreadcrumbsItem>
      </Breadcrumbs>

      <Container searchPage>
        {results.length ?
          <>
          <h3 className={headerName}>Found {results.length} results according to the request</h3>
          <ul>
            {results.map(([url, label]) => {
              return (
                <li key={url}><NavLink className="search-item" to={url}>{label}</NavLink></li>
              )
            })}
          </ul>
          </>
          : <h3 className={headerName}>Nothing was found according to the request</h3>
        }
      </Container>
    </>
  )
}

export default connect(
  state => ({
    results: state.search.results
  }),
  {}
)(SearchPage);
