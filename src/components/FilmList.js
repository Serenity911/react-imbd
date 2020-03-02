import React, {Fragment} from 'react';
import FilmItem from './FilmItem.js'
import './FilmList.css'


function FilmList({upcomingFilms}){

  const upcomingFilmItems = upcomingFilms.map(film => {
      return(
        <FilmItem key={film.id} url={film.url}>
        {film.name}
        </FilmItem>
      )
  })

  return (
    <article>
      <header>
        <h2> Upcoming Film Releases for UK:</h2>
      </header>
      <section className="film-list">
        <ul>
          {upcomingFilmItems}
        </ul>
      </section>
    </article>
  )
}

export default FilmList;
