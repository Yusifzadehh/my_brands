import axios from "axios";

export interface IClothes {
  id: number;
  brand: { id: number; logo: string; name: string };
  categories: { id: number; image: string; name: string };
  gender: { id: number; type: string };
  images: [{ id: number; image: string }];
  name: string;
  number_of_views: number;
  parent_category: { categories: []; id: number; name: string };
  price: string;
  product_code: string;
  size: string;
  stock: number;
  subcategories: { id: number; name: string };
  collection: string;
  color: string;
}
export interface IResults {
  results: IClothes[];
}

const BASE_URL = "http://138.68.79.157";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllClothes = async () => {
  // console.log("Fetching clothes...");
  const response = await axiosInstance.get<IResults>("product");
  // console.log("Response:", response.data);
  return response.data;
};

export const getCloById = async (id: number) => {
  return (await axiosInstance.get<IClothes>(`product/${id}`)).data;
};
