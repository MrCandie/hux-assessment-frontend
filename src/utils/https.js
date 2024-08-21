import axios from "axios";

const API_URL = `https://hux-assessment-backend-wkbr.onrender.com/api/v1`;

export async function login(data) {
  const response = await axios.post(`${API_URL}/auth/login`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "",
    },
  });

  return response.data;
}

export async function signup(data) {
  const response = await axios.post(`${API_URL}/auth/register`, data, {
    headers: {
      "Content-Type": "application/json",
      Accept: "",
    },
  });

  return response.data;
}

export async function listContact(token) {
  const response = await axios.get(`${API_URL}/contact`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createContact(token, data) {
  const response = await axios.post(`${API_URL}/contact`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getContact(token, id) {
  const response = await axios.get(`${API_URL}/contact/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
