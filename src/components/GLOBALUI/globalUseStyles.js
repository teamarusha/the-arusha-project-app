import { makeStyles } from '@material-ui/core';
const globalUseStyle = makeStyles((theme) => ({
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(2),
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
  h2 : {
    margin: theme.spacing(0, 45, 0, 45)
  },
  nav: {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: '2em',
    },
    // DROPDOWN MENU STYLING DEPENDENCIES
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
          
    },
    // REGISTRATION STYLING DEPENDENCIES
    register : {
      submit: {
        margin: theme.spacing(3, 1, 2, 1),
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      logo: {
        margin: theme.spacing(1)
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
    

    }

  }
}));

export default globalUseStyle;