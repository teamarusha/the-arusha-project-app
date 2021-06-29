import { makeStyles } from "@material-ui/core/styles";

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
  }));

  export default useStyles;