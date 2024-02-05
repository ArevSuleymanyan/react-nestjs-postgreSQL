import { SERVER_URL } from "../config";

export class BaseService {
  async getItems(item) {
    const url = `${SERVER_URL}/${item}`;
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, requestOption);
    return await response.json();
  }
  async getItemById(item, id) {
    const url = `${SERVER_URL}/${item}/${id}`;
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch(url, requestOption);
    return await response.json();
  }

  async updateItem(item, id, data) {
    const url = `${SERVER_URL}/${item}/${id}`;
    const requestOption = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, requestOption);
    return await response.json();
  }
}
