import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-13-232-186-28.ap-south-1.compute.amazonaws.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain"
  }
});
