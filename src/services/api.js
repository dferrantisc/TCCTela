import axios from "axios";
import { SERVER_IP } from "../config";

export const api = axios.create({
  baseURL: SERVER_IP,
});
