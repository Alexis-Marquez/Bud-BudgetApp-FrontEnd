import axios from "axios";
import authService from "./authService.js";

let currUserId;
let API_URL;
const instance = axios.create({
    baseURL: "http://192.168.1.82:8080/api/",
    withCredentials:true
});
const setUserId = userId => {
    currUserId = userId;
    API_URL = currUserId+"/";
}
const getLatestBudget = async () => {
    return await instance.get(API_URL+"latestBudget");
};
const getCurrentUserInfo= async () => {
    return await instance.get(currUserId)
}

const getAllAccounts = async () => {
    await setUserId(authService.getCurrentUser())
    return await instance.get(API_URL+"all-accounts");
};

const getTransactionsPage = async (page) => {
    return await instance.get(API_URL+"transactions/" + page);
};

const getTransactionSize = async () => {
    return await instance.get(API_URL+"transactions/size");
};


const createAccount = async (account) => {
    return await instance.post(API_URL+"new-account", account);
}


instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/auth/log-in" && originalConfig.url !== "/auth/refresh-token" && err.response) {
            if (!originalConfig._retry) {
                originalConfig._retry = false;
            }
            // Access Token was expired
            if (err.response.status === 403 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const response = await instance.post("/auth/refresh-token", {
                    });
                    return instance(originalConfig);
                } catch (_error) {
                    await authService.logout();
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err);
    }
);

const UserService = {
    getLatestBudget,
    getAllAccounts,
    getTransactionsPage,
    getTransactionSize,
    getCurrentUserInfo,
    createAccount
}

export default UserService;