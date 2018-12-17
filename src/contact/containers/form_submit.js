import React from 'react';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { onNameUpdated,
         onEmailUpdated,
         onMessageUpdated,
         validateForm } from '../../actions/contact_actions/actions';

const styles = submitTheme => ({
  root: {
    flexGrow: 1,
    height: '720px',
    backgroundColor: '#C1CDC1'
  },
  containerGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  navBarHolder: {
    width: '100%',
    position: 'fixed'
  },
  textGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '10%',
    paddingRight: '15%',
    paddingLeft: '15%',
    paddingBottom: '5%',
  },
  buttonHolder: {
    marginBottom: '5%'
  },
  button: {
    height: '45px',
    width: '150px',
    color: '#F0FFF0',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
  },
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
          showNameError = "Name field can't be empty!"
        } else if (error === 2) {
          showEmailError = "Email address is not valid!"
        } else if (error === 3) {
          showEmailError = "Email field can't be empty! "
        } else if (error === 4) {
          showMessageError = "Message field can't be empty!"
        }
      });
    };

    return (
      <div className={classes.root}>
        <Grid className={classes.containerGrid} container >



          <Grid className={classes.textGrid} item xs={12}>
            <TextField name="name"
                       label="Name"
                       required
                       margin="normal"
                       value={this.props.name}
                       onChange={this.handleChange}
                       error={!!showNameError} />
            <FormHelperText error>{showNameError}</FormHelperText>

            <TextField name="email"
                       label="Email"
                       required
                       margin="normal"
                       value={this.props.email}
                       onChange={this.handleChange}
                       error={!!showEmailError} />
            <FormHelperText error>{showEmailError}</FormHelperText>

            <TextField name="message"
                       label="Message"
                       multiline
                       required
                       margin="normal"
                       rows="8"
                       value={this.props.message}
                       onChange={this.handleChange}
                       error={!!showMessageError} />
            <FormHelperText error>{showMessageError}</FormHelperText>
          </Grid>

          <Grid className={classes.buttonHolder} item xs={12}>
            <Button onClick={this.handleSubmit} position="center" size="medium" className={classes.button}>
              Submit
            </Button>
          </Grid>

        </Grid>
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
