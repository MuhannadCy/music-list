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
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=50&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json`)
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
      
    }
    else {
      faves.push(film);
      
    }
    this.setState({ faves });
  }
  handleDetailsClick = (film) => {

      this.setState({ current: film })
  
  }

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing handleDetailsClick={this.handleDetailsClick} faves={this.state.faves} films={this.state.items} onFaveToggle={this.handleFaveToggle} />
          <FilmDetails films={this.state.items} film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;