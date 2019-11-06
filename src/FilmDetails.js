import React from 'react'

const FilmDetails = props => {
    const backdropUrl = ``
    const posterUrl = ``
    let details = (<div className="film-detail">
        <p>
            <i className="material-icons">subscriptions</i>
            <span>No film selected</span>
        </p>
    </div>)
    
    if (props.film.name) {
        details = (
            <div className="film-detail is-hydrated">
                <figure className="film-backdrop">
                    <img src={backdropUrl} alt="" />
                    <h1 className="film-title">{props.film.name}</h1>
                </figure>

                <div className="film-meta">
                    <h2 className="film-tagline">{props.film.name}</h2>
                    <p className="film-detail-overview">
                        <img src={posterUrl} className="film-detail-poster" alt={props.film.artist.name} />
                        <a href = {props.film.url} target={"_blank"}>Listen to the song</a>
                        <h3>Similar Songs</h3>
                    </p>
                </div>
            </div>)
    }
    return (
        <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {details}
        </div>
    );
}

export default FilmDetails;