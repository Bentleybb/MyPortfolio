import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MainRouter from '../MainRouter';
//import Contact from './contact'
import theme from '../theme';
//import { hot } from 'react-hot-loader'

//const theme = createTheme(); // Create a default theme
function App() {
 return (
 <Router>
 
 <ThemeProvider theme={theme}>
            <MainRouter />
        </ThemeProvider>

 </Router>
 );
};
export default App;

