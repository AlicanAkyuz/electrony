import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = aboutTheme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    gridTemplateRows: '10vmin 10vmin 2vmin 2vmin 20vmin 4vmin 1vmin 11vmin 39vmin ',
    gridTemplateColumns: '5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%',
    backgroundColor: '#0c0c0c'
  },
  firstRow: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 20',
    backgroundColor: '#0f0f0f',
  },
  logoItem: {
    gridRow: '1 / span 1',
    gridColumn: '1 / span 5',
  },
  firstButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '6 / span 2',
    marginTop: '17%',
    justifySelf: 'center'
  },
  secondButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '8 / span 2',
    marginTop: '17%',
    justifySelf: 'center'
  },
  thirdButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '10 / span 2',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fourthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '12 / span 2',
    marginTop: '17%',
    justifySelf: 'center'
  },
  fifthButtonItem: {
    gridRow: '1 / span 1',
    gridColumn: '14 / span 2',
    marginTop: '17%',
    justifySelf: 'center'
  },
  teamTitleItem: {
    gridRow: '2 / span 1',
    gridColumn: '8 / span 6',
  },
  hr: {
    gridRow: '3 / span 1',
    gridColumn: '8 / span 6',
    placeSelf: 'center'
  },
  firstAvatarItem: {
    gridRow: '5 / span 1',
    gridColumn: '3 / span 4',
    placeSelf: 'center'
  },
  secondAvatarItem: {
    gridRow: '5 / span 1',
    gridColumn: '9 / span 4',
    placeSelf: 'center'
  },
  thirdAvatarItem: {
    gridRow: '5 / span 1',
    gridColumn: '15 / span 4',
    placeSelf: 'center'
  },
  firstNameItem: {
    gridRow: '6 / span 1',
    gridColumn: '3 / span 4',
    textAlign: 'center'
  },
  secondNameItem: {
    gridRow: '6 / span 1',
    gridColumn: '9 / span 4',
    textAlign: 'center'
  },
  thirdNameItem: {
    gridRow: '6 / span 1',
    gridColumn: '15 / span 4',
    textAlign: 'center'
  },
  firstLogoItem: {
    gridRow: '8 / span 1',
    gridColumn: '3 / span 4',
    textAlign: 'center'
  },
  secondLogoItem: {
    gridRow: '8 / span 1',
    gridColumn: '9 / span 4',
    textAlign: 'center'
  },
  thirdLogoItem: {
    gridRow: '8 / span 1',
    gridColumn: '15 / span 4',
    textAlign: 'center'
  },
  firstBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '3 / span 4',
    textAlign: 'center'
  },
  secondBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '9 / span 4',
    textAlign: 'center'
  },
  thirdBackgroundItem: {
    gridRow: '9 / span 1',
    gridColumn: '15 / span 4',
    textAlign: 'center'
  },
//////////////////////////////  ITEMs  ///////////////////////////////////////
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
  teamTitle: {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.5vmax',
    fontWeight: '800',
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
    fontSize: '1.15vmax',
    fontWeight: '400',
    color: '#C1CDC1',
  }
});

export function OurTeam(props) {
  const { classes } = props;
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
        <Button disabled position="center" size="medium"><Link className={classes.selectedLink} to="/ourteam">TEAM</Link></Button>
      </div>
      <div className={classes.fifthButtonItem}>
        <Button position="center" size="medium"><Link className={classes.links} to="/contact">CONTACT</Link></Button>
      </div>
      <div className={classes.teamTitleItem}>
        <p className={classes.teamTitle}>Our Team</p>
      </div>
      <div className={classes.hr}>
        <hr style={{width: '23vmin'}} />
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
        <div class="animated fadeIn delay-1s">
          <Typography className={classes.names}>Mehmet Tansu Isikli</Typography>
        </div>
      </div>
      <div className={classes.secondNameItem}>
        <div class="animated fadeIn delay-1s">
          <Typography className={classes.names}>Alican Akyuz</Typography>
        </div>
      </div>
      <div className={classes.thirdNameItem}>
        <div class="animated fadeIn delay-1s">
          <Typography className={classes.names}>Tolga Akyuz</Typography>
        </div>
      </div>
      <div className={classes.firstLogoItem}>
        <div class="animated fadeIn delay-1s">
          <a href="https://github.com/mtisikli" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="github" height="6%" width="26%" />
          </a>
          <br />
          <a href="https://tr.linkedin.com/in/mehmet-tansu-i%C5%9F%C4%B1kl%C4%B1-5a27b114b" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="linkedin" height="12%" width="29%" />
          </a>
        </div>
      </div>
      <div className={classes.secondLogoItem}>
        <div class="animated fadeIn delay-1s">
          <a href="https://github.com/AlicanAkyuz" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="github" height="6%" width="26%" />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/alican-akyuz-80b67416b/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="linkedin" height="12%" width="29%" />
          </a>
        </div>
      </div>
      <div className={classes.thirdLogoItem}>
        <div class="animated fadeIn delay-1s">
          <a href="https://github.com/tolgaakyuz" target="_blank" rel="noopener noreferrer">
            <img src="github.png" alt="github" height="6%" width="26%" />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/tolgaakyuz" target="_blank" rel="noopener noreferrer">
            <img src="linkedin.png" alt="linkedin" height="12%" width="29%" />
          </a>
        </div>
      </div>
      <div className={classes.firstBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <Typography className={classes.background}>
            Tansu is a full-stack Javascript developer based in Izmir, Turkey. He likes using React.js because of its modular, scalable,
            and flexible structure. He enjoys creating responsive and interactive user interfaces. Tansu
            studied and wrote his master thesis on twentieth-century electronic music and contributed to Electrony's
            project design and front-end development.
          </Typography>
        </div>
      </div>
      <div className={classes.secondBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <Typography className={classes.background}>
            Alican is a full-stack developer currently based in Oregon, USA.
            He works primarily on front-end development with React.js and Material Design, and
            enjoys solving UX problems. Alican is also interested in the history of electronic music.
            He made contributions to the development
            of Electrony's philosophy, design, user interface, and RESTful API that works with Spotify Web API.
          </Typography>
        </div>
      </div>
      <div className={classes.thirdBackgroundItem}>
        <div class="animated fadeInUp delay-1s">
          <Typography className={classes.background}>
            Tolga is a language-agnostic programmer based in Berlin, Germany.
            He has built several production-ready web and mobile apps, and worked as an infrastructure engineer.
            Tolga is also a sound artist who has composed electronic music in a variety of genres and occasionally
            performed among friends. Tolga contributed to Electrony as a back-end developer and product manager.
          </Typography>
        </div>
      </div>
    </div>
  )
};

OurTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OurTeam);
