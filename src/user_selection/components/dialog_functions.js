export function getFractionNumbers() {
  return [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, "No Choice"];
};

export function getKeyOptions() {
  return ["C", "C#","D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "No Choice"];
};

export function getModeOptions() {
  return ["Major", "Minor", "No Choice" ];
};

export function getLoudnessOptions() {
  return ["Very Low (-60 to -40 dB)",
          "Low (-40 to -30 dB)",
          "Average (-30 to -20 dB)",
          "Loud (-20 to -10 dB)",
          "Really Loud (-10 to 0 dB)",
          "No Choice"];
};

export function getPopularityNumbers() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "No Choice"];
};

export function getBpmOptions() {
  return ["60-80 BPM",
          "81-90 BPM",
          "91-110 BPM",
          "111-130 BPM",
          "131-150",
          "151-170",
          "171-180",
          "No Choice"];
};
