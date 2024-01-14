import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const MethodDropdown = ({ method, setMethod }) => {
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel>Method</InputLabel>
            <Select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                label="Method"
            >
            <MenuItem value="GET">GET</MenuItem>
            <MenuItem value="POST">POST</MenuItem>
            <MenuItem value="PUT">PUT</MenuItem>
            <MenuItem value="DELETE">DELETE</MenuItem>
            <MenuItem value="PATCH">PATCH</MenuItem>
            <MenuItem value="OPTIONS">OPTIONS</MenuItem>
            <MenuItem value="HEAD">HEAD</MenuItem>
            <MenuItem value="TRACE">TRACE</MenuItem>
            <MenuItem value="CONNECT">CONNECT</MenuItem>
            </Select>
        </FormControl>
    );
};

export default MethodDropdown;
