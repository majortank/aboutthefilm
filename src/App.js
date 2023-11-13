import React, {useEffect, useState} from 'react';
import './app.css';
import {FcSearch} from 'react-icons/fc'
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=e9e7651f';

const App = (props) => {
  const [Found, setFound] = useState(false);

  const [Movies, setMovies] = useState([]);

  const [SearchTerm, setSearchTerm] = useState('');

  const [SearchResults, setSearchResults] = useState('Enter a movie name');
  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)

      const data = await response.json();

      
      if (data.Response === "True"){
          setFound(true);
          setMovies(data.Search);
          setSearchResults(data.Search.length + " Movies Found with name : " + SearchTerm);
      } else if (data.Response === "False"){
          setFound(false);
          setSearchResults(data.Error);
      }
      console.log(data.Search);
  }

  useEffect(() => {
      searchMovies(SearchTerm);
  }, []);
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">AboutTheFilm</button>
        <FcSearch className=' w-10 h-10' />
      </div>
      <div className=' mt-10 flex items-center flex-col justify-center'>
        <div className=" flex flex-row">
          <div>
            <div>
              <input 
              className="input input-bordered join-item" 
              placeholder="e.g titanic"
              value={SearchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
          <FcSearch onClick={() => searchMovies(SearchTerm)} className=' cursor-pointer mx-2 w-10 h-10' />
        </div>
        <div>
          {
              Found
              ? (
                  <>
                  <div className="alert alert-success mt-2 w-2/4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{SearchResults}</span>
                  </div>
                  <div className='container flex flex-wrap'>
                          {Movies.map((movie) => (
                              <MovieCard movie={movie}/>
                          ) )}
                      </div>
                  </>
              ) :
              (
                  <>
                  <div className="alert alert-error mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{SearchResults}</span>
                  </div>
                  <div className='container'>
                      
                  </div>
                  </>
              )
          }
        </div>
      </div>
    </>
  );
};
export default App;
