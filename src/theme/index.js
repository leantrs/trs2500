import { createTheme } from '@material-ui/core/styles';
import {colors} from "@material-ui/core";

const theme = createTheme({

    palette: {
        primary:{
            dark: colors.indigo['A700'],
            main: colors.indigo['A400'],
            light: colors.indigo['A200']
        },

        secondary: {
            dark: colors.orange['A700'],
            main: colors.orange['A700'],
            light: colors.orange['A200']
        }
        
    },

    typography: {

        h1:{
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: '-0.24px'
        },

        h2:{
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0.24px'
        },
        h3:{
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0.06px'
        },
        h4:{
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0.05px'
        },
       h6:{ 
           fontWeight: 500,
           fontSize: 16,
           letterSpacing: '-0.05px'
       }
    }
});

export default theme;