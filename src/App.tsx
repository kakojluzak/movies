import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

import SearchField from './components/SearchField/SearchField';
import Gallery from './components/Gallery/Gallery';
import { useState } from 'react';

function App() {
  const API_KEY = `ce762116`;
  const [error, setError] = useState({});
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  let notEmpty = { 'Error': '' };

  const fetchForData = (param) => {
    setIsLoaded(false);
    if (!param) {
      notEmpty['Error'] = "Field Cannot be Empty";
      setMovies([]);
      setError(notEmpty);
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
