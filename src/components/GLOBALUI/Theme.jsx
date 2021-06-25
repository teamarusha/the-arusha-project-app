import { createMuiTheme } from '@material-ui/core/styles';

const KOPIWhite ="#FFF"
const KOPITeal ="#5BC6CC"
const KOPIOrange= "#FF900E"

export default createMuiTheme({

    palette:{
        common: {
            main: `${KOPIOrange}`,
        },
        primary: {
            main: `${KOPITeal}`,
        },
        secondary: {
            main: `${KOPIOrange}`
        }
    },
    typography: {
        h5: {
            color:'white'
        },
        h4: {
            fontSize: 30,
            fontFamily: 'Red Hat Display',
            fontWeight: 600
        },
        h3: {
            fontFamily: 'Red Hat Display',
            fontWeight: 600
        },
        h2: {
            fontFamily: 'Red Hat Display',
            fontWeight: 600,
        },
        body1: {
            color:'black'
        }
    }
    
})