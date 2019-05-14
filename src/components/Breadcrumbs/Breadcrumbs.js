import React from 'react';
import {Route} from "react-router-dom";
import './Breadcrumbs.scss';
import BreadcrumbsItem from "./BreadcrumbsItem/BreadcrumbsItem";

export default function Breadcrumbs(props){
  const {location} = props;
  const paths = generatePaths(location.pathname);

  return(
    <div className="breadcrumbs-container">
      <ul className='breadcrumbs'>
        {paths.length > 1
          ? paths.map(path => <Route key={path} path={path} component={BreadcrumbsItem} />)
          : null
        }
      </ul>
    </div>
  );

  function generatePaths(path) {
    const pathsGenerated = ['/'];

    if (path === '/') return pathsGenerated;

    path.split('/').reduce((prev, curr) => {
      const current = `${prev}/${curr}`;
      pathsGenerated.push(current);
      return current;
    });
    return pathsGenerated;
  }
}
