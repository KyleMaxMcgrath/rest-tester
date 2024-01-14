import React from 'react';
import { Card, CardContent,  Tabs, Tab, Box } from '@mui/material';

const ResponseTabs = ({ tabValue, setTabValue, children }) => {
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleChange}>
                <Tab label="Response" />
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

export default ResponseTabs;
