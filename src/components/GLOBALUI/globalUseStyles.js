import { makeStyles } from '@material-ui/core';
const globalUseStyle = makeStyles((theme) => ({
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(1),
  },
  button: {
    backgroundColor: !'orange',
  },
  input: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  
  },
  form: {
    width: '55%',
    marginTop: theme.spacing(1),
  },
  nav: {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '2em',
    },
    dropdown: {
      root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
      },
    }
  }
}));

export default globalUseStyle;

