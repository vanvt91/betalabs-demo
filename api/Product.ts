import axios from "axios";
import { API_BASE_URL } from "../constant/urls.js";

export function getProductList() {
  return axios({
    method: "GET",
    url: `${API_BASE_URL}/test-site-qa/products.json`,
  });
}
