import { makeStyles } from '@material-ui/core';
const globalUseStyle = makeStyles((theme) => ({
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(1),
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
      nested: {
        paddingLeft: theme.spacing(4),
      },
    }
  }
}));

export default globalUseStyle;

