import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4cbb17', //green
      contrastText: '#ffffff', //white
    },
    secondary: {
      main: '#ff6f5b', //salmon
      contrastText: '#ffffff', //white
    },
    error: {
        light: '#ffb74d', //muted tangerine
        main: '#ff9800', //tangerine
        dark: 'f57c00', //dark tangerine
        contrastText: '#fffff', //white
    },
    initial: {
        main: '#cccccc', //light grey
        contrastText: '#000000', //black
    }
  },
  contrastThreshold: 3,
  tonalOffset: 0.2
});

export default theme;