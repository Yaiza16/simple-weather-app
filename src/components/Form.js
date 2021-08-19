import React, { useState } from 'react';
import './Form.scss';
import { IconLocation } from './helpers/Icons';

const Form = ({ submitRequest }) => {
  const [location, setLocation] = useState('');

  const submitForm = (e) => {
    e.preventDefault();

    submitRequest(location);
  };

  return (
    <form className="form-location" onSubmit={submitForm}>
      <label htmlFor="location">Location</label>
      <div className="input-container">
        <input
          className="input-location"
          type="text"
          placeholder="e.g. London"
          id="location"
          required
          value={location}
          autoComplete="off"
          onChange={(e) => setLocation(e.target.value)}
        />

        <IconLocation />
      </div>
      <button type="submit" className="form-button" onClick={submitForm}>
        Search
      </button>
    </form>
  );
};

export default Form;
