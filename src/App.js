import 'swiper/swiper.min.css';
import './App.css';
import Movie from "./components/Movie";
import React, {useEffect, useState} from "react";
import movie from "./components/Movie";


const FEATURED_API = "https://api.themoviedb.org/3/movie/popular?api_key=65496bc66137fccb297cd6e812b6d401&language=en-US&page=1"

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=65496bc66137fccb297cd6e812b6d401&language=en-US&page=1&include_adult=false";

function App() {
    const [movies, setMovies] = useState([]);


    useEffect(()=>{
        fetch(FEATURED_API)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setMovies(data.results)
            })
    },[]);



    return (
        <>
            {movies.length>0 && movies.map(movie => (
                <Movie key={movie.id} data ={movie} />
            ))}
        </>

    );
}

export default App;