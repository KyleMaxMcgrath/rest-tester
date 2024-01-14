import React from 'react';
import { TextField, IconButton, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const HeaderForm = ({ headers, setHeaders }) => {
    const handleAddHeader = () => {
        setHeaders([...headers, { key: '', value: '' }]);
    };

    const handleRemoveHeader = index => {
        const newHeaders = headers.filter((_, i) => i !== index);
        setHeaders(newHeaders);
    };

    const handleChange = (index, event) => {
        const newHeaders = headers.map((header, i) => {
            if (i === index) {
                return { ...header, [event.target.name]: event.target.value };
            }
            return header;
        });
        setHeaders(newHeaders);
    };

    return (
        <Box>
            {headers.map((header, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
                    <TextField
                        label="Key"
                        name="key"
                        value={header.key}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        label="Value"
                        name="value"
                        value={header.value}
                        onChange={(e) => handleChange(index, e)}
                        variant="outlined"
                        fullWidth
                    />
                    <IconButton onClick={() => handleRemoveHeader(index)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            ))}
            <IconButton onClick={handleAddHeader}>
                <AddCircleOutlineIcon />
            </IconButton>
        </Box>
    );
};

export default HeaderForm;
