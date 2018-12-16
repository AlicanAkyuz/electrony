export function getSteps() {
  return ['Genre',
          'Danceability',
          'Energy',
          'Key',
          'Loudness',
          'Mode',
          'Tempo',
          'Positiveness'
        ];
};

export function getStepContent(step) {
  switch (step) {
    case 0:
      return `First, let's start with how you would categorize your vibes. Select an electronic music genre that
              describes best the kind of tune you are looking for.`;
    case 1:
      return `Nice! Now it's time to specify your tune. Danceability here describes how suitable a track is for
              dancing based on a combination of musical elements including rhythm stability, beat strength, and regularity.
              A value of 0 is least danceable and 1.0 is most danceable.`;
    case 2:
      return `Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and
              activity. Typically, energetic tracks feel fast, loud, and noisy.
              Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre,
              onset rate, and general entropy.`;
    case 3:
      return `The key the track is in. Integers map to pitches using standard Pitch Class notation.
              E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. The key the track is in. Integers map to pitches
              using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.`;
    case 4:
      return `The overall loudness of a track in decibels (dB). Loudness values are averaged across
              the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of
              a sound that is the primary psychological correlate of physical strength (amplitude).
              Values typical range between -60 and 0 db.`;
    case 5:
      return `Mode indicates the modality (major or minor) of a track, the type of scale from which
              its melodic content is derived. Major is represented by 1 and minor is 0. Major is
              represented by 1 and minor is 0.`;
    case 6:
      return `The overall estimated tempo of a track in beats per minute (BPM). In musical terminology,
              tempo is the speed or pace of a given piece and derives directly from the average beat duration.
              Hence tracks with high BPM will be fast and bombastic, and tracks with low BPM will be calming`;
    case 7:
      return `A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.
              Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with
              low valence sound more negative (e.g. sad, depressed, angry).`;
    default:
      return 'Unknown step';
  }
};
