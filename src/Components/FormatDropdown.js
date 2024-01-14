import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormatDropdown = ({ format, setFormat }) => {
            const contentTypes = {
                "application/json": "JSON",
                "application/xml": "XML",
                "text/plain": "Text",
                "text/html": "HTML",
                "text/javascript": "JavaScript",
                "multipart/form-data": "Form Data",
                "application/octet-stream": "Binary"
            };
        
            return (
                <FormControl variant="outlined" fullWidth>
                    <InputLabel>Format</InputLabel>
                    <Select
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}
                        label="Format"
                    >
                        {Object.entries(contentTypes).map(([value, label]) => (
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            );
};

export default FormatDropdown;
