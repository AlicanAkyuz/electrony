export function getGenres() {
  return ["Surprise me",
          "Electro",
          "Electronic-dance",
          "Techno",
          "Detroit-techno",
          "Minimal-techno",
          "House",
          "Chicago-house",
          "Deep-house",
          "Progressive-house",
          "Dubstep",
          "Post-dubstep",
          "Drum-and-bass",
          "Breakbeat",
          "Industrial",
          "Trance"
          ];
};

export function getDanceability() {
  return ["Nope, I want least danceable tracks",
          "I'm not sure, perhaps just a little danceable tracks",
          "Give me somewhat danceable tracks",
          "Oh yes, I wish to listen to pretty danceable tracks",
          "I was born dancing, give me the most danceable tracks",
          ];
};

export function getEnergy() {
  return ["I prefer slow and calm tracks",
          "I wouldn't say no to somewhat energetic tracks",
          "Neither energetic nor calm, but just in-between tracks please",
          "I would like to have some aural energy",
          "I want most energetic tracks ever",
          ];
};

export function getLoudnessOptions() {
  return [ "I'd like to listen to quite tracks",
           "Can I have something within the normal range?",
           "Give me tracks that are remarkably loud",
           "My ears can take the loudest tracks ever"
        ];
};

export function getBpmOptions() {
  return ["I prefer it slow",
          "I prefer it, like, normal...",
          "I prefer it fast",
          "I prefer it really fast"
        ];
};

export function getPositiveness() {
  return ["I prefer melancholic tracks",
          "I'm only slightly in a cheerful mood",
          "Give me something in the middle",
          "Are you kidding? Of course I want positive tracks",
          "Make me the happiest person on earth!",
          ];
};
