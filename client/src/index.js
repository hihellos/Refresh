import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme.js'
import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));
const rootElement = document.getElementById('root');
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    rootElement
)


