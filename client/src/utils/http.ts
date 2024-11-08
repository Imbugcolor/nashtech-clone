import axios from 'axios';
import { SERVER_URL } from './config';

export const getDataAPI = async<T>(endpoint: string) => {
  const response = await axios.get(`${SERVER_URL}/${endpoint}`, {
    headers: { 'Content-Type': 'application/json' }
  });
  const data: T = response.data 
  return data;
};

export const postDataAPI = async<T>(endpoint: string, body: any) => {
  const response = await axios.post(`${SERVER_URL}/${endpoint}`, body, {
    headers: { 'Content-Type': 'application/json' }
  });
  const data: T = response.data 
  return data;
};

export const putDataAPI = async<T>(endpoint: string, body: any) => {
  const response = await axios.put(`${SERVER_URL}/${endpoint}`, body, {
    headers: { 'Content-Type': 'application/json' }
  });
  const data: T = response.data 
  return data;
};

export const patchDataAPI = async<T>(endpoint: string, body: any) => {
  const response = await axios.patch(`${SERVER_URL}/${endpoint}`, body, {
    headers: { 'Content-Type': 'application/json' }
  });
  const data: T = response.data 
  return data;
};

export const deleteDataAPI = async<T>(endpoint: string) => {
  const response = await axios.delete(`${SERVER_URL}/${endpoint}`, {
    headers: { 'Content-Type': 'application/json' }
  });
  const data: T = response.data 
  return data;
};