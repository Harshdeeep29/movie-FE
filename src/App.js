import {useEffect, useState} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=c094d710';

const movie1={
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies]= useState([]);
    const [searchTerm, setSearchTeam]= useState();
  

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    

   setMovies(data.Search);

  }
    useEffect(() => {
   searchMovies('spiderman');
        
    } , []);
    return(
       <div className="app">
       <h1> MovieLand</h1>
       <div className="search">
       
       <input placeholder="Search for Movies"
       value={searchTerm}
       onChange={(e) => setSearchTeam(e.target.value)}
       />

       <img src={searchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}/>
        </div>
   
       {
        movies?.length>0
        ? (
            <div className="container">

            {movies.map((movie) =>(
                <MovieCard movie={movie}/>
            ))}
                
               </div>
        ):(
            <div className="empty">
                <h2>NO movies found</h2>
            </div>
        )
       }
        
         
        </div>
    );
}
 
export default App;




