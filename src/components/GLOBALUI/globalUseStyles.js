import { makeStyles } from '@material-ui/core';

// STYLING DEPENDENCY FOR GLOBAL COMPONENTS THROUGHOUT THE APPLICATION

const globalUseStyle = makeStyles((theme) => ({

  btnArea: {
    display: 'flex',
    justifyContentContent: 'space-around',
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
  h2: {
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
    register: {
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
        marginTop: theme.spacing(3)
      },

      // NAVIGATION DEPENDENCIES
      toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '2em',
      },
      slidingDrawerNav: {
        width: '78%',
        backgroundColor: '#E8E7E7',
        boxShadow: '8px 8px 10px 3px rgba(0,0,0,0.56)',
      },
      item: {
        textAlign: 'center',
        maxHeight: 'inherit'
      },
      text: {
        fontFamily: 'Red Hat Display',
        fontWeight: 400,
        fontSize: '1.5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'common'
      },
      root: {
        backgroundColor: '#5BC6CC',
      },
      adminButton: {
        marginLeft: 'auto',
        position: 'static'
      }

    }

  }
}));

export default globalUseStyle;