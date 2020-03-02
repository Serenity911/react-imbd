import React from 'react';

function FilmItem({url, children}){

  return(
    <li>
    <a href={url}> {children} </a>
    </li>
  )
}
export default FilmItem;
