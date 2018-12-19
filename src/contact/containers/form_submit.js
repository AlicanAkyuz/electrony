import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
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
    height: '100vh',
    gridTemplateRows: '10% 5% 10% 5% 10% 5% 20% 10% 10% ',
    gridTemplateColumns: '5% 8% 2% 8% 2% 8% 34% 8% 2% 8% 2% 8% 5%',
    backgroundColor: '#cecece'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 3',
    placeSelf: 'center',
    paddingTop: '5%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '10 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '12 / span 1',
    placeSelf: 'center',
    paddingTop: '15%'
  },
  nameItem: {
    gridRow: '3 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center',
  },
  emailItem: {
    gridRow: '5 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center',
  },
  messageItem: {
    gridRow: '7 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center',
  },
  buttonItem: {
    gridRow: '9 / span 1',
    gridColumn: '4 / span 7',
    placeSelf: 'center',
  },
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3vmax',
    fontWeight: '800',
    color: '#0c0c0c',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.1vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#0c0c0c',
    '&:hover': {
      color: "#000",
    },
  },
  button: {
    height: '3.5em',
    width: '8em',
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
        <div className={classes.logoItem}>
          <p className={classes.logo}>Electronify</p>
        </div>
        <div className={classes.firstButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
        </div>
        <div className={classes.secondButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
        </div>
        <div className={classes.thirdButtonItem}>
          <Button position="center" size="medium"><Link className={classes.links} to="/ourteam">TEAM</Link></Button>
        </div>
        <div className={classes.nameItem}>
          <TextField name="name" label="Name" required margin="normal" value={this.props.name} onChange={this.handleChange} error={!!showNameError} />
          <FormHelperText error>{showNameError}</FormHelperText>
        </div>
        <div className={classes.emailItem}>
          <TextField name="email" label="Email" required margin="normal"value={this.props.email} onChange={this.handleChange} error={!!showEmailError} />
          <FormHelperText error>{showEmailError}</FormHelperText>
        </div>
        <div className={classes.messageItem}>
          <TextField name="message" label="Message" multiline required margin="normal" rows="8" value={this.props.message} onChange={this.handleChange} error={!!showMessageError} />
          <FormHelperText error>{showMessageError}</FormHelperText>
        </div>
        <div className={classes.buttonItem}>
          <Button onClick={this.handleSubmit} position="center" size="medium" className={classes.button}>Submit</Button>
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
