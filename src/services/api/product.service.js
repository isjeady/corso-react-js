import { http } from "../http";
import { productsUrl } from "../url";

export const getProducts = async () => {
    const { data } = await http.get(productsUrl);
    return data;
}