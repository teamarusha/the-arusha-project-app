import { createMuiTheme } from '@material-ui/core/styles';

const KOPIWhite ="#FFF"
const KOPITeal ="#5BC6CC"
const KOPIOrange= "#FF900E"

export default createMuiTheme({

    palette:{
        common: {
            main: `${KOPIWhite}`,
        },
        primary: {
            main: `${KOPITeal}`,
        },
        secondary: {
            main: `${KOPIOrange}`
        }
    },
    typography: {
        h1: {
            fontSize: '3rem',
            fontFamily: 'Red Hat Display',
            fontWeight: 600
        },
        h2: {
            fontFamily: 'Red Hat Display',
            fontWeight: 600,
        },
        h3: {
            fontFamily: 'Red Hat Display',
            fontWeight: 600
        },
        h4: {
            fontSize: 30,
            fontFamily: 'Red Hat Display',
            fontWeight: 600
        },
        h5: {
            color:'white'
        },
        body1: {
            fontFamily: 'Red Hat Display',
            color:'black'
        },
        caption: {
            fontFamily: 'Red Hat Display'
        }
    }
    
})