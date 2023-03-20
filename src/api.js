import axios from "axios";

const API_URL = "https://admin.wegrow.uz/admin/";

const getMenues = async () => {
  const res = await axios.get(API_URL + "menues");
  return await res;
};

const getCategories = async () => {
  const res = await axios.get(API_URL + "categories");
  return await res;
};

const getCategoriesById = async (id) => {
  const res = await axios.get(API_URL + "categories/" + id);
  return await res;
};

const getProducts = async () => {
  const res = await axios.get(API_URL + "clothes");
  return await res;
};

const getProductsById = async (id) => {
  const res = await axios.get(API_URL + "clothes/" + id);
  return await res;
};

const getAboutById = async (id) => {
  const res = await axios.get(API_URL + "abouts/" + id);
  return await res;
};

export {
  getMenues,
  getCategories,
  getCategoriesById,
  getProducts,
  getProductsById,
  getAboutById,
  API_URL,
};
