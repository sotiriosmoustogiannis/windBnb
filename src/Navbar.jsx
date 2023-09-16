import * as React from 'react';
import './App';
import BnbLogo from './BnbLogo';
import StaySearchForm from './StaySearchForm';

export default function SearchAppBar({ formData, handleChange, handleSubmit }) {
  return (
    <div className='navbar'>
      <BnbLogo />
      <div>
        <StaySearchForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
