import { CHARGING,
         NO_RETURN,
         PLAYLIST_FAILURE,
         FETCH_SUCCESS,
         PLAYLIST_SUCCESS,
         DETAILS_BOX_OPEN,
         NAME_CHANGED,
         DESCRIPTION_CHANGED,
         CHECK_BOX,
         DETAILS_BOX_CLOSE,
         UPLOADING,
         USER_INFO,
         PLAYLIST_INFO,
         UPLOAD_FAILURE,
         PLAYLIST_CREATED,
         FINAL_DETAILS,
         PLAYLIST_RESET
       } from './action_types';

export function handleSelectionSubmit() {
  return function (dispatch, getState) {
    dispatch(playlist_charging());

    const token = getState().SelectionReducer.user_data.user_token;
    const state = getState().SelectionReducer.user_selection;
    const data = {
      genre: state.genre.toLowerCase(),
      danceability: state.danceability,
      energy: state.energy,
      loudness: state.loudness,
      tempo: state.tempo,
      positiveness: state.positiveness,
    };

    let genreParam;
    if (data.genre === "Surprise me") {
      genreParam = "&seed_genres=detroit-techno"
    } else if (data.genre === "electronic-dance") {
      genreParam = "&seed_genres=edm"
    } else {
      genreParam = `&seed_genres=${data.genre}`
    }

    let danceParam;
    if (data.danceability === "Nope, I want least danceable tracks") {
      danceParam = "&target_danceability=0.2"
    } else if (data.danceability === "I'm not sure, perhaps just a little danceable tracks") {
      danceParam = "&target_danceability=0.4"
    } else if (data.danceability === "Give me somewhat danceable tracks") {
      danceParam = "&target_danceability=0.6"
    } else if (data.danceability === "Oh yes, I wish to listen to pretty danceable tracks") {
      danceParam = "&target_danceability=0.8"
    } else if (data.danceability === "I was born dancing, give me the most danceable tracks") {
      danceParam = "&target_danceability=1"
    }

    let energyParam;
    if (data.energy === "I prefer slow and calm tracks") {
      energyParam = "&target_energy=0.2"
    } else if (data.energy === "I wouldn't say no to somewhat energetic tracks") {
      energyParam = "&target_energy=0.4"
    } else if (data.energy === "Neither energetic nor calm, but just in-between tracks please") {
      energyParam = "&target_energy=0.6"
    } else if (data.energy === "I would like to have some aural energy") {
      energyParam = "&target_energy=0.8"
    } else if (data.energy === "I want most energetic tracks ever") {
      energyParam = "&min_energy=1"
    }

    let loudnessParam;
    if (data.loudness === "I'd like to listen to quite tracks") {
      loudnessParam = "&target_loudness=-40"
    } else if (data.loudness === "Can I have something within the normal range?") {
      loudnessParam = "&target_loudness=-20"
    } else if (data.loudness === "Give me tracks that are remarkably loud") {
      loudnessParam = "&target_loudness=-10"
    } else if (data.loudness === "My ears can take the loudest tracks ever") {
      loudnessParam = "&target_loudness=0"
    };

    let tempoParam;
    if (data.tempo === "I prefer it slow") {
      tempoParam = "&target_tempo=70"
    } else if (data.tempo === "I prefer it, like, normal...") {
      tempoParam = "&target_tempo=90"
    } else if (data.tempo === "I prefer it fast") {
      tempoParam = "&target_tempo=125"
    } else if (data.tempo === "I prefer it really fast") {
      tempoParam = "&min_tempo=150"
    };

    let positivenessParam;
    if (data.positiveness === "I prefer melancholic tracks") {
      positivenessParam = "&target_valence=0.2"
    } else if (data.positiveness === "I'm only slightly in a cheerful mood") {
      positivenessParam = "&target_valence=0.4"
    } else if (data.positiveness === "Give me something in the middle") {
      positivenessParam = "&target_valence=0.6"
    } else if (data.positiveness === "Are you kidding? Of course I want positive tracks") {
      positivenessParam = "&target_valence=0.8"
    } else if (data.positiveness === "Make me the happiest person on earth!") {
      positivenessParam = "&target_valence=1"
    };

    const setParams = {
      acousticness: "&max_acousticness=0.4",
      instrumentalness: "&min_instrumentalness=0.6"
    };

    const root_endpoint = 'https://api.spotify.com/v1/recommendations?limit=21';
    const final_endpoint = `${root_endpoint}${genreParam}${danceParam}${setParams.acousticness}${setParams.instrumentalness}${energyParam}${loudnessParam}${tempoParam}${positivenessParam}`
    console.log(final_endpoint);
    fetch(final_endpoint, {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(spotifyData) {
      console.log(spotifyData);
      spotifyData.tracks.length === 0 ? dispatch(onNoReturn()) : dispatch(fetch_success(spotifyData));
    })
    .catch(function(error) {
      dispatch(playlist_failure());
      console.error('Error:', error);
    });
  };
};

export function playlist_charging() {
  return function (dispatch) {
    dispatch({
        type: CHARGING,
        payload: true,
    })
  }
};

export function onNoReturn() {
  return function (dispatch) {
    dispatch({
        type: NO_RETURN,
        payload: true,
    })
  }
};

export function playlist_failure() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_FAILURE,
        payload: true,
    })
  }
};

export function fetch_success(spotifyData) {
  return function (dispatch) {
    String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
    };

    let first_artist;
    let second_artist;

    if (spotifyData.tracks.length > 5) {
      if (spotifyData.tracks[0].artists[0].name !== "Various Artists") {
        first_artist = spotifyData.tracks[0].artists[0].name.capitalize()
      } else if (spotifyData.tracks[1].artists[0].name !== "Various Artists") {
        first_artist = spotifyData.tracks[1].artists[0].name.capitalize()
      } else if (spotifyData.tracks[2].artists[0].name !== "Various Artists") {
        first_artist = spotifyData.tracks[2].artists[0].name.capitalize()
      };

      if (spotifyData.tracks[3].artists[0].name !== "Various Artists") {
        second_artist = spotifyData.tracks[3].artists[0].name.capitalize()
      } else if (spotifyData.tracks[4].artists[0].name !== "Various Artists") {
        second_artist = spotifyData.tracks[4].artists[0].name.capitalize()
      } else if (spotifyData.tracks[5].artists[0].name !== "Various Artists") {
        second_artist = spotifyData.tracks[5].artists[0].name.capitalize()
      };
    };

    dispatch({
        type: FETCH_SUCCESS,
        payload: spotifyData.tracks,
        first_artist: first_artist,
        second_artist: second_artist
    })
    dispatch(playlist_success());
  }
};

export function playlist_success(spotifyData) {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_SUCCESS,
        payload: true
    })
  }
};

export function details_box_open() {
  return function (dispatch) {
    dispatch({
        type: DETAILS_BOX_OPEN,
        payload: true,
    })
  }
};

export function handleNameChange(value) {
  return function (dispatch) {
    dispatch({
        type: NAME_CHANGED,
        payload: value,
    })
  }
};

export function handleDescriptionChange(value) {
  return function (dispatch) {
    dispatch({
        type: DESCRIPTION_CHANGED,
        payload: value,
    })
  }
};

export function handleClickBox() {
  return function (dispatch, getState) {
    let value = !getState().PlaylistReducer.check_box_state;
    dispatch({
        type: CHECK_BOX,
        payload: value,
    })
  }
};

export function handleDetailsSubmit() {
  return function (dispatch) {
    dispatch({
        type: DETAILS_BOX_CLOSE,
        payload: false,
    })
    dispatch(playlist_uploading());
  }
};

export function playlist_uploading() {
  return function (dispatch) {
    dispatch({
        type: UPLOADING,
        payload: true,
    })
    dispatch(getUserID());
  }
};

export function getUserID() {
  return function (dispatch, getState) {
    const token = getState().SelectionReducer.user_data.user_token;
    fetch("https://api.spotify.com/v1/me", {
      headers: {'Authorization': "Bearer " + token}
    })
    .then(response => response.json())
    .then(function(user_info) {
      dispatch({
          type: USER_INFO,
          payload: user_info.display_name,
          payload_id: user_info.id
      })
      dispatch(playlistCreate());
    })
    .catch(function(error) {
      dispatch(playlist_upload_failure());
      console.error('Error:', error);
    });
  };
};

export function playlistCreate() {
  return function (dispatch, getState) {
    const token = getState().SelectionReducer.user_data.user_token;
    const info = getState().PlaylistReducer;
    const playlist_state = !info.check_box_state;
    const user_id = info.user_id;

    let playlist_name;
    info.playlist_name ? playlist_name = info.playlist_name : playlist_name = `My Awesome ${getState().SelectionReducer.user_selection.genre} Playlist`;

    let playlist_description;
    info.playlist_description ? playlist_description = `${info.playlist_description} @Created by Electronify.` : playlist_description = '@Created by Electronify.'

    dispatch({
        type: FINAL_DETAILS,
        payload: playlist_name,
        payload_des: playlist_description
    })

    const root_endpoint = "https://api.spotify.com/v1/users/";
    const params = `${user_id}/playlists`;
    const final_endpoint = `${root_endpoint}${params}`;
    const body_data = {
      name: playlist_name,
      public: playlist_state,
      description: playlist_description
    };

    fetch(final_endpoint, {
      method: 'POST',
      body: JSON.stringify(body_data),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(function(data) {
      dispatch({
          type: PLAYLIST_INFO,
          payload: data.id,
          playlist_uri: data.uri,
          playlist_url: data.external_urls.spotify
      });
      dispatch(pushTracks());
    })
    .catch(function(error) {
      dispatch(playlist_upload_failure());
      console.error('Error:', error);
    });
  };
};

export function pushTracks() {
  return function (dispatch, getState) {
    const token = getState().SelectionReducer.user_data.user_token;
    const playlist_id = getState().PlaylistReducer.playlist_id;
    const tracks_object = {
      "uris": getState().PlaylistReducer.tracks.map(element => element.uri)
    };
    fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks?`, {
      method: 'POST',
      body: JSON.stringify(tracks_object),
      headers: {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        dispatch(playlist_upload_success())
      }
    })
    .catch(function(error) {
      dispatch(playlist_upload_failure());
      console.error('Error:', error);
    });
  };
};

export function playlist_upload_failure() {
  return function (dispatch) {
    dispatch({
        type: UPLOAD_FAILURE,
        payload: true,
    })
  }
};

export function playlist_upload_success() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_CREATED,
        payload: true,
    })
  }
};

export function onPlaylistReset() {
  return function (dispatch) {
    dispatch({
        type: PLAYLIST_RESET,
        payload: false
    })
  }
};
