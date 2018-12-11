const initialState = {
  pageTitle: {
    sound: "SounD",
    iversify: "iversify",
    subTitle: "Music Beyond Genres. A Spotify App."
  },
  about: {
    title: "About",
    topText: "Soundiversify is an app that curates music according to the complexities that informs human aural perception.",
    secondText: "We believe that classifying music according to genres is archaic.",
    thirdText: "Genres do not address the multifaceted aesthetic connection we establish with sound and music.",
    fourthText: "Hence we want to help those who, when asked what kind of music they like, answers 'pretty much anything!'",
    fifthText: "Make your choices in 10 steps to specify the tunes you love.",
    sixthText: "We will curate a playlist that will surprise your ears."
  },
  workWith: {
    title: "We Work With",
  },
  team: {
    title: "Our Team",
    teamMemberOne: "Alican Akyuz",
    teamMemberOneBack: "Background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background",
    teamMemberTwo: "Tolga Akyuz",
    teamMemberTwoBack: "Background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background background",
  }
};

function AppReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  return initialState;
};

export default AppReducer;
