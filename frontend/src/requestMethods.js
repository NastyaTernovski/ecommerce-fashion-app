import axios from "axios";

const BASE_URL = "http://localhost:8000/backend/";
 const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODQ5YzNkZTEzM2FhZDA4Mzg5ZWVhOCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Njk2MzU0MzQsImV4cCI6MTY2OTg5NDYzNH0.cwLwnlEfyumdfTCOGQlyEKPVco4b1v-MSnOr4nKojP8"

/*const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;*/

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});