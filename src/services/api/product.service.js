import { http } from "../http";

export const getProducts = async () => {
    const { data } = await http.get("/products");
    return data;
}