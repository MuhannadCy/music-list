import axios from 'axios'

axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=8b478cd7bd90968e2c92c09a55fe2efa&format=json`)
      .then(res => {
       const songs = res.data.tracks.track;
        
      })
      console.log(songs)
export default songs;