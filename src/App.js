import React, { useState } from 'react';
import { Container, Grid, Box, Paper } from '@mui/material';
import AddressBar from './Components/AddressBar';
import MethodDropdown from './Components/MethodDropdown';
import FormatDropdown from './Components/FormatDropdown';
import Submit from './Components/Submit';
import DataTabs from './Components/DataTabs';
import ResponseTabs from './Components/ResponseTabs';
import HeaderForm from './Components/HeaderForm';
import ResponseDisplay from './Components/ResponseDisplay';
import ResponseHeaders from './Components/ResponseHeaders';
import TextField from '@mui/material/TextField';
import { Typography, CircularProgress } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  && {
    background: linear-gradient(to bottom, #ffffff, #f7f7f7);
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

const App = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [format, setFormat] = useState('application/json');
  const [headers, setHeaders] = useState([{ key: '', value: '' }]);
  const [data, setData] = useState('');
  const [tabValue, setTabValue] = useState(0);
  const [DataTabValue, setDataTabValue] = useState(0);
  const [apiResponse, setApiResponse] = useState('');
  const [responseHeaders, setResponseHeaders] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  // Convert headers array to object format
  const formatHeaders = () => {
    return headers.reduce((acc, { key, value }) => {
      if (key && value) acc[key] = value;
      return acc;
    }, {});
  };

  // Handle content-type header based on format
  const handleContentTypeHeader = (formattedHeaders) => {
    if (
      !['GET', 'HEAD'].includes(method) &&
      !formattedHeaders['Content-Type']
    ) {
      formattedHeaders['Content-Type'] =
        format === 'JSON' ? 'application/json' : 'text/plain';
    }
  };

  const parseResponse = async (response) => {
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text();
    }
  };

  // Updated requestBody to handle form data
  const requestBody = () => {
    if (!['GET', 'HEAD'].includes(method)) {
      return JSON.stringify(data);
    }
    return null;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setResponseStatus(null);
    try {
      const formattedHeaders = formatHeaders();
      handleContentTypeHeader(formattedHeaders);

      const response = await fetch(url, {
        method,
        headers: formattedHeaders,
        body: requestBody(),
      });

      setResponseStatus(`Status: ${response.status} ${response.statusText}`);

      const headers = {};
      response.headers.forEach((value, key) => {
        headers[key] = value;
      });
      setResponseHeaders(headers);

      const responseData = await parseResponse(response);
      setApiResponse(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiResponse(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StyledContainer maxWidth='lg'>
      <Paper
        elevation={6}
        sx={{ padding: 3, marginBottom: 3, backgroundColor: '#fafafa' }}>
        <Typography
          variant='h5'
          gutterBottom>
          HTTP Client
        </Typography>
        {isLoading && <CircularProgress />}

        {responseStatus && (
          <Typography
            variant='subtitle1'
            color='textSecondary'>
            {responseStatus}
          </Typography>
        )}
        <Grid
          container
          spacing={3}
          alignItems='flex-end'>
          <Grid
            item
            xs={12}
            md={6}>
            <AddressBar
              url={url}
              setUrl={setUrl}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}>
            <MethodDropdown
              method={method}
              setMethod={setMethod}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={3}>
            <FormatDropdown
              format={format}
              setFormat={setFormat}
            />
          </Grid>
          <Grid
            item
            xs={12}>
            <Submit onSubmit={handleSubmit} />
          </Grid>
        </Grid>
      </Paper>
      <Grid
        container
        spacing={3}>
        <Grid
          item
          xs={12}
          md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 2, height: '60vh', overflow: 'auto' }}>
            <DataTabs
              DataTabValue={DataTabValue}
              setDataTabValue={setDataTabValue}>
              {DataTabValue === 0 && (
                <TextField
                  label='Data'
                  multiline
                  rows={20}
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  variant='outlined'
                  fullWidth
                  margin='normal'
                />
              )}
              {DataTabValue === 1 && (
                <HeaderForm
                  headers={headers}
                  setHeaders={setHeaders}
                />
              )}
            </DataTabs>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}>
          <Paper
            elevation={3}
            sx={{ padding: 2, height: '60vh', overflow: 'auto' }}>
            <ResponseTabs
              tabValue={tabValue}
              setTabValue={setTabValue}>
              {tabValue === 0 && <ResponseDisplay response={apiResponse} />}
              {tabValue === 1 && <ResponseHeaders headers={responseHeaders} />}
            </ResponseTabs>
          </Paper>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default App;
