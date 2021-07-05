import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: "10rem",
    },
    header: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },  
    rootExpanded: {
     
      flexDirection: 'column'
    },
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    textfield: {
      margin: theme.spacing(1)
    },
    text: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    AccordionDetails: {
      alignItems: 'center'
    },
    menuItem: {
      whiteSpace: 'normal'
    }
  }));


  export default useStyles;