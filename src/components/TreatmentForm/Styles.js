import { makeStyles } from "@material-ui/core/styles";

// ADJUSTS STYLING FOR MUI COMPONENTS WITH THESE CLASSES GLOBALLY IN APP
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
      // textAlign: 'center',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      // color: theme.palette.text.secondary,
    },

    text: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    select: {
      whiteSpace: 'normal',
    },
    menuItem: {
      whiteSpace: 'normal',
    },
  
  }));

  export default useStyles;