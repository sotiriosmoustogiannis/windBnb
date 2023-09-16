import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
function StaySearchForm({ formData, handleChange, handleSubmit }) {

  return (
    <>
      <TextField id="location" value={formData.location} name="location" type="text" onChange={handleChange} size="small" label="Location" variant="outlined" />
      <TextField id="guests" value={formData.guests} name="guests" type="number" onChange={handleChange} size="small" label="Guests" variant="outlined" />
      <IconButton aria-label="search" onClick={handleSubmit} sx={{ color: "red" }}>
        <SearchIcon />
      </IconButton>
    </>
  )
}

export default StaySearchForm