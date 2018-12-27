import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { onNameUpdated,
         onEmailUpdated,
         onMessageUpdated,
         validateForm } from '../../actions/contact_actions/actions';

const styles = submitTheme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 7vmin 15vmin 1vmin 15vmin 1vmin 35vmin 2vmin 10vmin 3vmin',
    gridTemplateColumns: '10% 10% 5% 10% 10% 10% 10% 10% 5% 10% 10% ',
    backgroundColor: '#0c0c0c',
  },
  firstRow: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 11',
    backgroundColor: '#0f0f0f',
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 3',
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '4 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '5 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fourthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '7 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fifthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    marginTop: '17%',
    justifySelf: 'center'
  },
  nameItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 9',
    width: '100%',
    textAlign: 'center'
  },
  emailItem: {
    gridRow: '5 / span 1',
    gridColumn: '2 / span 9',
    width: '100%',
    textAlign: 'center',
  },
  messageItem: {
    gridRow: '7 / span 1',
    gridColumn: '2 / span 9',
    width: '100%',
    textAlign: 'center',
  },
  buttonItem: {
    gridRow: '9 / span 1',
    gridColumn: '2 / span 9',
    placeSelf: 'center',
  },
  logo: {
    fontFamily: 'Roboto',
    fontSize: '2.4vmax',
    fontWeight: '800',
    marginTop: '4%',
    marginLeft: '15%'
  },
  logoLink: {
    textDecoration: 'none',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  selectedLink: {
    fontFamily: 'Roboto',
    fontSize: '1vmax',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#00611C',
    '&:hover': {
      color: "#CFDBC5",
    },
  },
  textField: {
    backgroundColor: '#F0FFF0',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center'
  },
  errorText: {
    borderRadius: '5px',
    textAlign: 'center'
  },
  button: {
    color: '#F0FFF0',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
  }
});

class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (event) {
    let value = event.target.value;
    if (event.target.name === 'name') {
      this.props.dispatch(onNameUpdated(value));
    };
    if (event.target.name === 'email') {
      this.props.dispatch(onEmailUpdated(value));
    };
    if (event.target.name === 'message') {
      this.props.dispatch(onMessageUpdated(value));
    };
  };

  handleSubmit() {
    this.props.dispatch(validateForm());
  };

  render() {
    const { classes } = this.props;
    let showNameError;
    let showEmailError;
    let showMessageError;
    if (this.props.errorFound) {
      this.props.errorArray.forEach(error => {
        if (error === 1) {
          showNameError = "Name field can't be empty."
        } else if (error === 2) {
          showEmailError = "Email address is not valid."
        } else if (error === 3) {
          showEmailError = "Email field can't be empty."
        } else if (error === 4) {
          showMessageError = "Message field can't be empty."
        }
      })
    };

    return (
      <div className={classes.container}>
        <div className={classes.firstRow}></div>
        <div className={classes.logoItem}>
          <Typography className={classes.logo}>
            <Link className={classes.logoLink} to="/">Electrony</Link>
          </Typography>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/steps">PLAYLIST</Link></Button>
        </div>
        <div className={classes.thirdButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
        </div>
        <div className={classes.fourthButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
        </div>
        <div className={classes.fifthButtonItem}>
          <Button disabled position="center" size="medium"><Link className={classes.selectedLink} to="/contact">CONTACT</Link></Button>
        </div>
        <div className={classes.nameItem}>
          <div class="animated fadeIn">
            <TextField className={classes.textField}
                       name="name"
                       label="Name"
                       required
                       margin="normal"
                       variant="filled"
                       value={this.props.name}
                       onChange={this.handleChange}
                       error={!!showNameError} />
            <FormHelperText className={classes.errorText} error>{showNameError}</FormHelperText>
          </div>
        </div>
        <div className={classes.emailItem}>
          <div class="animated fadeIn">
            <TextField className={classes.textField}
                       name="email"
                       label="Email"
                       required
                       margin="normal"
                       variant="filled"
                       value={this.props.email}
                       onChange={this.handleChange}
                       error={!!showEmailError} />
            <FormHelperText className={classes.errorText} error>{showEmailError}</FormHelperText>
          </div>
        </div>
        <div className={classes.messageItem}>
          <div class="animated fadeIn">
            <TextField className={classes.textField}
                       name="message"
                       label="Message"
                       multiline
                       required
                       margin="normal"
                       variant="filled"
                       rows="4"
                       value={this.props.message}
                       onChange={this.handleChange}
                       error={!!showMessageError} />
            <FormHelperText className={classes.errorText} error>{showMessageError}</FormHelperText>
          </div>
        </div>
        <div className={classes.buttonItem}>
          <div class="animated fadeInUpBig delay-1s">
            <Button onClick={this.handleSubmit} position="center" size="large" className={classes.button}>Submit</Button>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  state = state.ContactReducer;
  return {
    name: state.form.name,
    email: state.form.email,
    message: state.form.message,
    errorArray: state.errorArray
  };
};

FormSubmit.propTypes = {
  classes: PropTypes.object.isRequired,
};


const withstyles = withStyles(styles)(FormSubmit);
const connected = connect(mapStateToProps)(withstyles);
export default connected;
