import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { BookingButton } from "./components/BookingButton";
import { MovieMain } from "./components/MovieMain";
import { TopCastContainer } from "./components/TopCastContainer";
import SearchBar from "./components/SearchBar";
import NavigationBar from "./components/NavigationBar";
import SectionMovie from "./components/SectionMovie";
import { getMovies } from "./services/Movies";
import { getMoviesPage1 } from "./services/Movies";

function App() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [movies, setMovies] = useState("");
  
  useEffect(() => {
    getMovies("Alicia").then((data) => {
      setMovies(data);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("now_playing","").then((data) => {
      setNowPlayingMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("upcoming","").then((data) => {
      setUpcomingMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("top_rated","").then((data) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  useEffect(() => {
    getMoviesPage1("discover","28").then((data) => {
      setActionMovies(data.results);
    });
  }, []);


  return (
    <div className="App">
       <MovieMain movies={movies} />
      <TopCastContainer movies={movies} />
      <BookingButton /> 
      
      <SearchBar />
      <SectionMovie title={""} movies={nowPlayingMovies} />
      <SectionMovie title={"Comming Soon"} movies={upcomingMovies} />
      <SectionMovie title={"Top Movies"} movies={topRatedMovies} />
      <SectionMovie title={"Action Movies"} movies={actionMovies} />
      
      <NavigationBar />
    </div>
  );
}

export default App;
