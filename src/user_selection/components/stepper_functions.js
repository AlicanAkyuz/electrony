export function getSteps() {
  return ['Danceability',
          'Acousticness',
          'Energy',
          'Instrumentalness',
          'Key',
          'Loudness',
          'Mode',
          'Popularity',
          'Tempo',
          'Valence'
        ];
};

export function getStepContent(step) {
  switch (step) {
    case 0:
      return `Danceability describes how suitable a track is for dancing based on a combination of
              musical elements including tempo, rhythm stability, beat strength, and overall regularity.
              A value of 0.0 is least danceable and 1.0 is most danceable.`;
    case 1:
      return `A confidence measure from 0.0 to 1.0 of whether the track is acoustic.
              1.0 represents high confidence the track is acoustic.A confidence measure from 0.0 to 1.0
              of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.`;
    case 2:
      return `Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and
              activity. Typically, energetic tracks feel fast, loud, and noisy.
              Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre,
              onset rate, and general entropy.`;
    case 3:
      return `Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental
              in this context. Rap or spoken word tracks are clearly “vocal”. The closer the instrumentalness value is to 1.0,
              the greater likelihood the track contains no vocal content.`;
    case 4:
      return `The key the track is in. Integers map to pitches using standard Pitch Class notation.
              E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. The key the track is in. Integers map to pitches
              using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.`;
    case 5:
      return `The overall loudness of a track in decibels (dB). Loudness values are averaged across
              the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of
              a sound that is the primary psychological correlate of physical strength (amplitude).
              Values typical range between -60 and 0 db.`;
    case 6:
      return `Mode indicates the modality (major or minor) of a track, the type of scale from which
              its melodic content is derived. Major is represented by 1 and minor is 0. Major is
              represented by 1 and minor is 0.`;
    case 7:
      return `The popularity of the track. The value will be between 0 and 100, with 100 being
              the most popular. The popularity is calculated by algorithm and is based, in the most part,
              on the total number of plays the track has had and how recent those plays are.`;
    case 8:
      return `The overall estimated tempo of a track in beats per minute (BPM). In musical terminology,
              tempo is the speed or pace of a given piece and derives directly from the average beat duration.
              Hence tracks with high BPM will be fast and bombastic, and tracks with low BPM will be calming`;
    case 9:
      return `A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track.
              Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with
              low valence sound more negative (e.g. sad, depressed, angry).`;
    default:
      return 'Unknown step';
  }
};
