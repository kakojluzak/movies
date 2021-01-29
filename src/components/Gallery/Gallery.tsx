import Spinner from 'react-bootstrap/Spinner';

import './Gallery.css';

const Gallery = ({ movies, isLoading }) => {
  let shouldShowSpinner = isLoading ? false : true;

  let showListOfMovies = (list): JSX.Element[] => {
    let listMovies: JSX.Element[] = list.map((el, index) => {
      return (<div key={el['Title'] + index} className={'poster'}>
        <img alt={el['Title']} src={el['Poster']} />
        <div>{el['Title']}</div>
      </div>
      );
    });
    return listMovies
  }
  
  let errorHandler = movies && movies['Error'] ? movies['Error'] : [];

  return (
    <div className={'spinner'}>
      {shouldShowSpinner &&
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}

      <div>{movies && movies.length > 0 ? showListOfMovies(movies) : errorHandler}</div>

    </div>

  )
}

export default Gallery