import { http } from "../http";
import { loginUrl, meUrl } from "../url";

export const postLoginService = async (loginPayload) => {
    const { data } = await http.post(loginUrl, loginPayload);
    return data;
}

export const getMe = async () => {
    const { data } = await http.get(meUrl);
    return data;
}