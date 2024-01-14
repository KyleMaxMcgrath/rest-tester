import React from 'react';
import TextField from '@mui/material/TextField';

const AddressBar = ({ url, setUrl }) => {
    return (
        <TextField
            label="URL"
            variant="outlined"
            fullWidth
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
    );
};

export default AddressBar;
