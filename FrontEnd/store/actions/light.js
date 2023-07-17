export const FETCH_LIGHTS_REQUEST = 'FETCH_LIGHTS_REQUEST';
export const FETCH_LIGHTS_SUCCESS = 'FETCH_LIGHTS_SUCCESS';
export const FETCH_LIGHTS_FAILURE = 'FETCH_LIGHTS_FAILURE';

export const fetchLightsRequest = () => ({
  type: FETCH_LIGHTS_REQUEST,
});

export const fetchLightsSuccess = (lightsData) => ({
  type: FETCH_LIGHTS_SUCCESS,
  payload: lightsData,
});

export const fetchLightsFailure = (error) => ({
  type: FETCH_LIGHTS_FAILURE,
  payload: error,
});
