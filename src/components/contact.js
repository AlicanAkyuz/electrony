import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = contactTheme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 10vmin 50vmin 10vmin',
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
  formItem: {
    gridRow: '3 / span 1',
    gridColumn: '2 / span 9',
    width: '100%',
  },
  //////////////////////////////////// ITEMS ////////////////////////
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    marginBottom: '5%',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center'
  },
  button: {
    color: '#F0FFF0',
    marginTop: '3%',
    backgroundColor: '#00611C',
    borderRadius: '5px',
    width: '25%',
    border: 'none',
    '&:hover': {
      backgroundColor: "#4A7023",
    },
  }
});

class Contact extends React.Component {
  render() {
    const { classes } = this.props;

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
        <div className={classes.formItem}>
          <div class="animated fadeIn">
            <form className={classes.form} method="POST" action="https://formspree.io/alicakyz@gmail.com">
              <TextField className={classes.textField}
                         required
                         variant="filled"
                         type="name"
                         name="name"
                         label="Your Name" />
              <TextField className={classes.textField}
                         required
                         variant="filled"
                         type="email"
                         name="email"
                         label="Your Email" />
              <TextField className={classes.textField}
                         required
                         variant="filled"
                         multiline
                         rows="4"
                         name="message"
                         label="Your Message" />
              <Button className={classes.button} type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};


Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

const withstyles = withStyles(styles)(Contact);
export default withstyles;
