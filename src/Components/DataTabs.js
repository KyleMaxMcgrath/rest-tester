import React from 'react';
import { Card, CardContent,  Tabs, Tab, Box } from '@mui/material';

const DataTabs = ({ DataTabValue, setDataTabValue, children }) => {
    const handleChange = (event, newValue) => {
        setDataTabValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={DataTabValue} onChange={handleChange}>
                <Tab label="Data" />
                <Tab label="Headers" />
            </Tabs>
    <Card variant="outlined">
      <CardContent>
            {children}
            </CardContent>
            </Card>
        </Box>
    );
};

export default DataTabs;
