import Form from 'react-bootstrap/Form';
import * as _ from 'underscore';
import './SearchField.css';

const SearchField = ({ fetchForData }) => {
  const handleInputThrottled = _.throttle(fetchForData, 1500);

  return (
    <div className={"searchBar"}>
      <Form.Group controlId="movieInput">
        <Form.Label column='lg'>Search Your favourite movie</Form.Label>
        <Form.Control
          type="text"
          name="movie"
          onChange={(event) => { handleInputThrottled(event.target.value); }}
        />
      </Form.Group>
    </div>

  )
}

export default SearchField;