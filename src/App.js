import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
      items:[]
    };
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
  }
  componentDidMount() {
    axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json`)
      .then(res => {
        const songs = res.data.tracks.track;
        console.log(songs)
        this.setState({ items: songs });
      })
  }
  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film)
    console.log(filmIndex)
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1)
      console.log("Removing " + film.title + " from faves...")
    }
    else {
      faves.push(film);
      console.log("Adding " + film.title + " to faves... ")
    }
    this.setState({ faves });
  }
  handleDetailsClick = (film) => {
    console.log("Fetching details for " + film.title);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    // const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response) // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      console.log(response.data)
      this.setState({ current: response.data })
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing handleDetailsClick={this.handleDetailsClick} faves={this.state.faves} films={this.state.items} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails films={TMDB.films} film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;