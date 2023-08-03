import { PropTypes } from "prop-types";
import './Filter.css';
import { useState } from "react";
import MovieCard from "./MovieCard";
function Filter() {

    const [movie, setMovie] = useState('');
    const [movies, setMovies] =useState('');
    
    const Movies = [
        {title: "Dance of Pain"},{title: "Double trouble"},
        {title: "Tough kiss"},{title: "Masters of the game"},{title: "A foolish son"},
        {title: "Expidition"},{title: "Born to rule"},{title: "Game of money"},{title: "Lust of the eye"},
    ]
    
    const valueChange = (event) => {
        setMovie(!movie? event.target.value: movie)
    }
    const addClick =()=>{
        document.querySelector(".App").innerHTML = setMovies(!movies? Movies.filter(movie =><MovieCard key={movie.title} title={movie}/>) : movie);
        
    }
    return (
        <>
        <div className="filter">
            <span id="span" onClick={addClick}>Filter Movies </span>
            <input
                onKeyUp={valueChange}  type="text" placeholder="filter off your movies here..." />
        </div>
        </>
    )
}
Filter.propTypes ={
    MovieCard: PropTypes.any.isrequired,
   
}

export default Filter