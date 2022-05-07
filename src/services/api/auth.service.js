import { http } from "../http";

export const postLoginService = async (loginPayload) => {
    const { data } = await http.post("/login", loginPayload);
    return data;
}

export const getMe = async () => {
    const { data } = await http.get("/660/users/1");
    return data;
}