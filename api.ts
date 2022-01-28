import axios from 'axios';
import { API_URL } from './constants';

export const get = async (url: string) => {
  try {
    const response = await axios.get(`${API_URL}/${url}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
