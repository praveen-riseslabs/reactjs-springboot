import axios from "axios";

 export const BASE_URL = "http://localhost:8080";

 export const signupForm = axios.create({
   baseURL: BASE_URL,
 });

 export const signinForm = axios.create({
   baseURL: BASE_URL,
 })

 export const forgotPasswordForm = axios.create({
  baseURL: BASE_URL,
})

export const restPasswordForm = axios.create({
  baseURL: BASE_URL,
})

