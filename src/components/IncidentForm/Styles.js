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
      // backgroundColor: "#5BC6CC",
      flexDirection: 'column'
    },
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
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
    }
  }));



  // const useStyles = makeStyles((theme) => ({
  //   paper: {
  //     marginTop: theme.spacing(4),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   header: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   divider: {
  //     height: '2px',
  //     marginTop: '1rem',
  //     flexShrink: 0,
  //     backgroundColor: 'rgba(0, 0, 0, 1)'
  //   },
  //   mobileIcon: {
  //     margin: theme.spacing(1),
  //     marginLeft: 'auto',
  //     marginRight: 'auto',
      
  //   },
  //   form: {
  //     width: '100%',
  //     marginTop: theme.spacing(1),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //     marginLeft: 'auto',
  //     marginRight: 'auto'
  //   },
  // }));
  export default useStyles;