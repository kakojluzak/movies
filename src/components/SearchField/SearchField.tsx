import React, { useRef } from 'react'

import Form from 'react-bootstrap/Form';
import * as _ from 'underscore';
import './SearchField.css';

const SearchField = ({ fetchForData }) => {
  const handleInputThrottled = useRef(_.throttle(fetchForData, 500)).current;

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