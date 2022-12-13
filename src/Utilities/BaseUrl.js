import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://gw-dev-api.medtransdigital.com",
  // baseURL: "http://172.17.221.140:3005",
});

export default axiosInstance;
