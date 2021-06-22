import { createMuiTheme } from '@material-ui/core/styles';

const KOPIWhite ="#FFF"
const KOPITeal ="#5BC6CC"
const KOPIOrange= "#FFBA60"

export default createMuiTheme({

    palette:{
        common: {
            main: `${KOPIOrange}`,
        },
        primary: {
            main: `${KOPITeal}`,
        },
        secondary: {
            main: `${KOPIWhite}`
        }
    },
    typography: {
        h5: {
            color:'white'
        }
    }
    
})