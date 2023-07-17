import axios from 'axios';
import { API_PUBLIC_URL, API_URL } from '../config';

/**
 * Fetches the public data from the API
 * @returns {Promise} Promise object represents the data from the API
 * @throws {Error} Error object represents the error from the API
 */
export const fetchLightsData = async () => {
  try {
    const url = API_URL + "lights";
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching lights data');
  }
};