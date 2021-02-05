import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

import SearchField from './components/SearchField/SearchField';
import Gallery from './components/Gallery/Gallery';
import { useState } from 'react';
import { notEmpty } from './models/errorModel';


function App() {
  //TO DO REMOVE FROM PAGE SOURCE
  const API_KEY = `ce762116`;
  const [error, setError] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const errorHandler = notEmpty;

  const fetchForData = (param) => {
    setIsLoaded(false);
    if (!param) {
      setMovies([]);
      setError(errorHandler);
      setIsLoaded(true);
      return;
    }
    setError({});

    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${param}`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        if (response['Search']) {
          setMovies(response['Search']);
          setIsLoaded(true);

        } else {
          setMovies(response);
          setIsLoaded(true);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      })
  }
  return (
    <div className='App'>
      <div className="content-container">

        <div>
          <Jumbotron>
            <SearchField fetchForData={fetchForData} />
            <Gallery error={error} movies={movies} isLoading={isLoaded} />
          </Jumbotron>
        </div>

      </div>
    </div>
  );
}

export default App;
