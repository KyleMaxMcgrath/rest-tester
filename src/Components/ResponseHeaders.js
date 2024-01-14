import React from 'react';
import { Typography, Box } from '@mui/material';

const ResponseHeaders = ({ headers }) => {
  return (
    <Box sx={{ padding: 2 }}>
      {Object.entries(headers).map(([key, value], index) => (
        <Typography key={index} variant="body1">
          {key}: {value}
        </Typography>
      ))}
    </Box>
  );
};

export default ResponseHeaders;
