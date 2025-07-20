/*import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
//import theme from '../theme';
//import { hot } from 'react-hot-loader'
const App = () => {
 return (
 <Router>
 
 <MainRouter />

 </Router>
 );
};
export default App;
*/

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MainRouter from './MainRouter'; // Adjust the import path as necessary

const theme = createTheme(); // Create a default theme

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainRouter />
        </ThemeProvider>
    );
}

export default App;

