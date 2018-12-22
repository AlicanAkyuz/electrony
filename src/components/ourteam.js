import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '10% 3% 8% 5% 1% 19% 2% 2% 37% 13%',
    gridTemplateColumns: '3% 7% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 7% 3%',
    backgroundColor: '#0c0c0c'
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '2 / span 4',
    placeSelf: 'center',
    paddingTop: '8%'
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '14 / span 2',
    placeSelf: 'center',
    paddingTop: '17%',
    paddingLeft: '10%',
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '16 / span 2',
    placeSelf: 'center',
    paddingTop: '17%',
    paddingLeft: '10%',
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '18 / span 2',
    placeSelf: 'center',
    paddingTop: '15%',
    paddingLeft: '10%',
  },
  teamTitleItem: {
    gridRow: '3 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center',
  },
  hr: {
    gridRow: '4 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center'
  },
  firstAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdAvatarItem: {
    gridRow: '6 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },

  firstNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '3 / span 4',
    alignSelf: 'start',
    justifySelf: 'center'
  },
  secondNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '9 / span 4',
    alignSelf: 'start',
    justifySelf: 'center'
  },
  thirdNameItem: {
    gridRow: '7 / span 1',
    gridColumn: '15 / span 4',
    alignSelf: 'start',
    justifySelf: 'center'
  },
  firstBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '3 / span 4',
    textAlign: 'initial'
  },
  secondBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '9 / span 4',
    textAlign: 'initial'
  },
  thirdBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '15 / span 4',
    textAlign: 'initial'
  },
//////////////////////////////////////////
  logo: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '3.2vmax',
    fontWeight: '800',
    color: '#4A7023',
  },
  links: {
    fontFamily: 'Montserrat',
    fontSize: '1.2vmax',
    fontWeight: '800',
    textDecoration: 'none',
    textTransform: 'none',
    color: '#CFDBC5',
    '&:hover': {
      color: "#00611C",
    },
  },
  teamTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: '2.8vmax',
    color: '#C1CDC1',
  },
  avatar: {
    width: '10.5vmax',
    height: 'auto',
    borderRadius: '50%'
  },
  names: {
    fontFamily: 'Roboto',
    fontSize: '1.2vmax',
    fontWeight: '800',
    color: '#C1CDC1',
  },
  background: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '1.1vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function OurTeam(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.logoItem}>
        <p className={classes.logo}>Electrony</p>
      </div>
      <div className={classes.firstButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/">HOME</Link></Button>
      </div>
      <div className={classes.secondButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/about">ABOUT</Link></Button>
      </div>
      <div className={classes.thirdButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>

      <div className={classes.teamTitleItem}>
        <p className={classes.teamTitle}>Team</p>
      </div>
      <div className={classes.hr}>
        <hr style={{width: '11.5em'}} />
      </div>
      <div className={classes.firstAvatarItem}>
        <div class="animated fadeIn">
          <Avatar alt="tansu_pic" src="./tansupic.jpg" className={classes.avatar} />
        </div>
      </div>
      <div className={classes.secondAvatarItem}>
        <div class="animated fadeIn">
          <Avatar alt="alican_pic" src="./alican.jpg" className={classes.avatar} />
        </div>
      </div>
      <div className={classes.thirdAvatarItem}>
        <div class="animated fadeIn">
          <Avatar alt="tolga_pic" src="./tolga.jpg" className={classes.avatar} />
        </div>
      </div>
      <div className={classes.firstNameItem}>
        <div class="animated jackInTheBox delay-1s">
          <p className={classes.names}>Mehmet Tansu Isikli</p>
        </div>
      </div>
      <div className={classes.secondNameItem}>
        <div class="animated jackInTheBox delay-1s">
          <p className={classes.names}>Alican Akyuz</p>
        </div>
      </div>
      <div className={classes.thirdNameItem}>
        <div class="animated jackInTheBox delay-1s">
          <p className={classes.names}>Tolga Akyuz</p>
        </div>
      </div>
      <div className={classes.firstBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <p className={classes.background}>
            Tansu is a front-end Javascript developer. He likes using React.js because of its modular, scalable,
            and flexible structure. He enjoys creating responsive and interactive user interfaces. He
            studied and wrote his master thesis on twentieth-century electronic music. Tansu contributed to Electrony's
            project design and front-end development.
          </p>
        </div>
      </div>
      <div className={classes.secondBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <p className={classes.background}>
            Alican is a full-stack Javascript web developer currently based in Oregon, USA.
            He works primarily on front-end development with React.js and Material Design, and
            enjoys solving UX problems. Alican is also interested in the history of music and the social
            consequences that the birth of electronic music implies. He made contributions to the development
            of Electrony's philosophy, design, user interface, and RESTful API that works with Spotify Web API.
          </p>
        </div>
      </div>
      <div className={classes.thirdBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <p className={classes.background}>
            Tolga is a language-agnostic programmer based in Berlin, Germany.
            He has built several production-ready web and mobile apps, and worked as an infrastructure engineer.
            Tolga is also a sound artist who has composed electronic music in a variety of genres and occasionally
            performed among friends. Tolga contributed to Electrony as a back-end developer and product manager.

          </p>
        </div>
      </div>
    </div>
  )
};

OurTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurTeam);
