
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#d36b99',
        main: '#c94780',
        dark: '#8c3159',
        contrastText: '#fff',
      },
      buttonPrimary: { 
        backgroundColor: '#c94780', 
        color: '#fff' 
      },
      accent: {
        color: '#c94780'
      },
      success: {
        color: 'green',
        backgroundColor: 'white', 
      },
      accentSecondary: {
        color: '#867f7f'
      },
      typography: {
        // Tell Material-UI what's the font-size on the html element is.
        htmlFontSize: 24,
      },
    }
  });

  export default theme;