export function getSteps() {
  return ['Genre',
          'Danceability',
          'Energy',
          'Loudness',
          'Tempo',
          'Positiveness'
        ];
};

export function getStepContent(step) {
  switch (step) {
    case 0:
      return `First, let's start with choosing an electronic music genre. Select the genre that
              describes best the kind of tune you are looking for.`;
    case 1:
      return `Nice! Now it's time to specify your what you are looking for.
              Danceability here describes how suitable a track is for
              dancing based on a combination of musical elements including rhythm stability, beat strength,
              and regularity. So, do you feel like taking the floor and dancing?`;
    case 2:
      return `Good! You know, some songs are more energizing than energy drinks!
              In musical terms, energy represents a perceptual measure of intensity and
              activity including dynamic range, perceived loudness, timbre,
              onset rate and general entropy. Typically, energetic tracks feel fast and noisy.`;
    case 3:
      return `Loudness is the quality of sound that is the primary psychological correlate of physical
              strength (amplitude). The overall loudness of a track is represented in decibels (dB) and
              averaged across the entire track. dB values typically range from -60dB to 0db.`;
    case 4:
      return `The tempo of a track is represented by BPM (beats per minute). In musical terminology,
              tempo is the speed or pace of a given piece and derives directly from the average beat duration.
              Hence tracks with high BPM are fast and bombastic, and tracks with low BPM are slow and calming.`;
    case 5:
      return `It is no doubt that music has a significant effect on one's mood.
              Musical positiveness, or valence, represents how happy or sad a track is.
              Tracks with high positiviness are cheerful and euphoric, while tracks with low positiveness
              sound more depressed or angry.`;
    default:
      return 'Unknown step';
  }
};
