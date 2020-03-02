import React, {Fragment} from 'react';
import FilmItem from './FilmItem.js'

function FilmList({upcomingFilms}){

  const upcomingFilmItems = upcomingFilms.map(film => {
      return(
        <FilmItem key={film.id} url={film.url}>
        {film.name}
        </FilmItem>
      )
  })

  return (
    <Fragment>
      <h2> Upcoming Film Releases for UK:</h2>
      <ul>
        {upcomingFilmItems}
      </ul>
    </Fragment>
  )
}

export default FilmList;
