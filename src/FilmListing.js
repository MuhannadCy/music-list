import React, { Component } from 'react'
import FilmRow from './FilmRow';
// import FilmPoster from './FilmPoster';
// import FilmPoster from './FilmPoster';

class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'all',
        };
    }
    handleFilterClick = (filter) => {
        
        this.setState({
            filter: filter,
        });
    }

    render() {
        
        const allFilms = this.props.films.map((film, index) => {
            return (
                <FilmRow handleDetailsClick={() => this.props.handleDetailsClick(film)} isFave={(this.props.faves.includes(film) <= 0) ? false : true} onFaveToggle={() => this.props.onFaveToggle(film)} title={film.name} poster_path={film.image[3]["#text"]} key={index} year={film.artist.name} />

            )
        })
        const allFaves = this.props.faves.map((film, index) => {
            return (
                <FilmRow handleDetailsClick={() => this.props.handleDetailsClick(film)} isFave={(this.props.faves.includes(film) <= 0) ? false : true} onFaveToggle={() =>this.props.onFaveToggle(film)} title={film.name} poster_path={film.image[3]["#text"]} key={index} year={film.artist.name} />

            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">SONGS</h1>
                <div className="film-list-filters">
                    <div className={"film-list-filter " + (this.state.filter === "all" ? "is-active" : "")} onClick={() => this.handleFilterClick('all')}>
                        ALL
            <span className="section-count">{this.props.films.length} </span>
                    </div>
                    <div className={"film-list-filter " + (this.state.filter === "faves" ? "is-active" : "")} onClick={() => this.handleFilterClick('faves')}>
                        FAVES
            <span className="section-count">{this.props.faves.length}</span>
                    </div>
                </div>

                {(this.state.filter === 'all') ? allFilms : allFaves}
            </div>
        );
    }
}

export default FilmListing;