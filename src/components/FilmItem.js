import React from 'react';
import './FilmItem.css';

function FilmItem({url, children}){

  return(
    <li>
      <a href={url}> {children} </a>
    </li>
  )
}
export default FilmItem;
