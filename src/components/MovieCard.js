import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="card card-side w-96 bg-neutral text-neutral-content m-2">
        <figure><img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} /></figure>
        <div className="card-body">
            <h2 className="card-title">{movie.Title}</h2>
            <p>{movie.Year}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">About {movie.Title}</button>
            </div>
        </div>
        </div>
    )
}


export default MovieCard;