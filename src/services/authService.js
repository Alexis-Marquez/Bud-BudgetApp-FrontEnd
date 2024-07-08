import axios from "axios";

const API_URL = "http://192.168.1.82:8080/api/auth/";

const register = (username, name, password) => {
    return axios.post(API_URL + "new-user", {
        name,
        username,
        password,
    }, { withCredentials: true });
};

const login = async (username, password) => {
    return axios
        .post(API_URL + "log-in", {
            username,
            password,
        }, { withCredentials: true })
        .then(async (response) => {
            await localStorage.setItem("userId", response.data);
            return response.data;
        });
};

const logout = async () => {
    await localStorage.removeItem("userId");
    axios.post(API_URL + "sign-out", { withCredentials: true }, { withCredentials: true }).then((response) => {
        return response.data;
    });
};

const getCurrentUser = () => {
    return localStorage.getItem("userId");
};

const refreshToken = ()=>{
  return axios.post(API_URL + "refresh-token", {
  }, { withCredentials: true });
};
const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    refreshToken
}

export default AuthService;