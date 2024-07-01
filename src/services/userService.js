import axios from "axios";
import authService from "./authService.js";

const currUserId = authService.getCurrentUser();
const API_URL = "http://localhost:8080/api/"+currUserId+"/";

const getLatestBudget = () => {
    return axios.get(API_URL + "latestBudget", { withCredentials: true });
};

const getAllAccounts = () => {
    return axios.get(API_URL + "all-accounts", { withCredentials: true });
};

const getTransactionsPage = (page) => {
    return axios.get(API_URL + "transactions/"+ page, { withCredentials: true });
};

const getTransactionSize = () => {
    return axios.get(API_URL + "transactions/size", { withCredentials: true });
};

const UserService = {
    getLatestBudget,
    getAllAccounts,
    getTransactionsPage,
    getTransactionSize,
}

export default UserService;