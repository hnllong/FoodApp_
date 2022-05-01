import axios from "axios";

const instance = axios.create({
    baseURL: 'https://61a78c60387ab200171d2dad.mockapi.io',
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
  });
  export const getProducts= () => instance.get('/Products');