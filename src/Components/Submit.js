import React from 'react';
import Button from '@mui/material/Button';

const SubmitButton = ({ onSubmit }) => {
    return (
        <Button 
            variant="contained" 
            color="primary" 
            onClick={onSubmit}
            fullWidth
        >
            Send
        </Button>
    );
};

export default SubmitButton;
