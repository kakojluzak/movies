import React from 'react';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

import SearchField from './components/SearchField/SearchField';
import Gallery from './components/Gallery/Gallery';

interface Myprops {
};

interface MyState {
  movies: any;
  isLoaded: boolean;
}
class App extends React.Component<Myprops, MyState> {
  constructor(props) {
    super(props);
    this.setState({
      movies: [],
      isLoaded: true
    });
  }

  API_KEY = `ce762116`;

  public fetchForData = (param) => {
    let notEmpty = { 'Error': '' };

    this.setState({ isLoaded: false });
    if (!param) {
      notEmpty['Error'] = "Field Cannot be Empty";
      this.setState({ movies: notEmpty, isLoaded: true })
      return;
    }

    fetch(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${param}`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        if (response['Search']) {
          this.setState({ movies: response['Search'], isLoaded: true })

        } else {
          this.setState({ movies: response, isLoaded: true })
        }
      })
      .catch(({ message }) => {
        console.log(message);
      })
  }

  render() {
    let moviesToPass = this.state ? this.state.movies : [];
    let isLoaded = this.state ? this.state.isLoaded : true;
    return (
      <div className='App'>
        <div className="content-container">

          <div>
            <Jumbotron>
              <SearchField fetchForData={this.fetchForData} />
              <Gallery movies={moviesToPass} isLoading={isLoaded} />
            </Jumbotron>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
