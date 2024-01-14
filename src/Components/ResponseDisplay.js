import React from 'react';
import { TextField } from '@mui/material';

const ResponseDisplay = ({ response }) => {
  console.log(response);
  return (
    <TextField
      multiline
      rows={20}
      value={
        response ? JSON.stringify(response) : 'No response data available.'
      }
      variant='outlined'
      fullWidth
      margin='normal'
      readOnly
    />
  );
};

export default ResponseDisplay;
