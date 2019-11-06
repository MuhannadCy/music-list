import React from 'react'

const FilmPoster = (props) => {
    return (
        <img src={"" + props.poster_path} alt="" />
    );
}

export default FilmPoster;