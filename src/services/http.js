import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    'Accept-Language': 'it'
};

export const LOCAL_STORAGE_TOKEN_PROPS = 'token';

const injectToken = (config) => {
    try {
        const token = localStorage.getItem(LOCAL_STORAGE_TOKEN_PROPS);
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        //console.log(error)
        return config;
    }
};

class Http {
    instance = null;

    constructor() {
        return this.instance != null ? this.instance : this.initHttp();
    }

    initHttp() {

        const http = axios.create({
            baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000',
            headers,
            withCredentials: true,
        });

        http.interceptors.request.use(
            (config) => injectToken(config), 
            (error) => Promise.reject(error)
        );

        http.interceptors.response.use(
            (response) => response,
            (error) => {
                const { response } = error;
                this.handleError(response);
                return Promise.reject(response);
            }
        );

        this.instance = http;
        return http;
    }

    request(config){
        return this.http.request(config);
    }
    get(url,config){
        return this.http.get(url, config);
    }
    post(url,data,config){
        return this.http.post(url, data, config);
    }
    put(url,data,config){
        return this.http.put(url, data, config);
    }
    delete(url, config){
        return this.http.delete<T, R>(url, config);
    }

    handleError(error) {
        console.log("handleError");
        if (error) {
            const { status } = error;
            
            switch (status) {
                case 500: {
                    // Handle InternalServerError
                    break;
                }
                case 403: {
                    // Handle Forbidden
                    break;
                }
                case 401: {
                    // Handle Unauthorized
                    handleSessionExpiration()
                    break;
                }
                case 429: {
                    // Handle TooManyRequests
                    break;
                }
            }
        } else {
            /* toast.error('🆘 No internet connection found. App is running in offline mode.', {
                toastId: "no_internet_connection"
            }); */
        }
    }
}

export const http = new Http();