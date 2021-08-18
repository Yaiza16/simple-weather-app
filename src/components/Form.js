import React from 'react';
import './Form.scss';
import { IconLocation } from './helpers/Icons';

const Form = () => (
  <form className="form-location">
    <label htmlFor="location">Location</label>
    <div className="input-container">
      <input
        className="input-location"
        type="text"
        placeholder="e.g. London"
        id="location"
        required
      />

      <IconLocation />
    </div>
    <button type="submit" className="form-button">
      Search
    </button>
  </form>
);

export default Form;
