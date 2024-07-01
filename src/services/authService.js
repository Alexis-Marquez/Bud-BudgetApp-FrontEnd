import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, name, password) => {
    return axios.post(API_URL + "new-user", {
        name,
        username,
        password,
    }, { withCredentials: true });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "log-in", {
            username,
            password,
        }, { withCredentials: true })
        .then((response) => {
            localStorage.setItem("userId", response.data);
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("userId");
    return axios.post(API_URL + "sign-out", { withCredentials: true }).then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return localStorage.getItem("userId");
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
}

export default AuthService;