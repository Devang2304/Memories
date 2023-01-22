import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Form from './components/Form/Form';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const Root = () => {
const theme = createTheme()
    return (
        <ThemeProvider theme={theme}>
            <Form/>
        </ThemeProvider>
 )}
export default Root