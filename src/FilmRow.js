import React from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

const FilmRow = props => {

    return (<div className="film-row" onClick={() => props.handleDetailsClick(props.title)}>
        <FilmPoster poster_path={props.poster_path} />
        <center className="film-summary">
            <h1>{props.title}</h1>
            <p>{props.year}</p>
            <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
        </center>
    </div>);
}

export default FilmRow;