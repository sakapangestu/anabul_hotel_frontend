import axios from "axios";
import jwtService from "./jwt.service";

const token = jwtService.getToken();

export default axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    "Authorization": `${token}`
  }
});