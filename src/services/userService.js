import axios from "axios";
import authService from "./authService.js";

let currUserId;
let API_URL;
const setUserId = userId => {
    currUserId = userId;
    API_URL = "http://192.168.1.82:8080/api/"+currUserId+"/";
}
const getLatestBudget = async () => {
    return await axios.get(API_URL + "latestBudget", {withCredentials: true});
};
const getCurrentUserInfo= async () => {
    return await axios.get(API_URL + currUserId, {withCredentials: true})
}

const getAllAccounts = async () => {
    await setUserId(authService.getCurrentUser())
    return await axios.get(API_URL + "all-accounts", {withCredentials: true});
};

const getTransactionsPage = async (page) => {
    return await axios.get(API_URL + "transactions/" + page, {withCredentials: true});
};

const getTransactionSize = async () => {
    return await axios.get(API_URL + "transactions/size", {withCredentials: true});
};

const UserService = {
    getLatestBudget,
    getAllAccounts,
    getTransactionsPage,
    getTransactionSize,
    getCurrentUserInfo
}

export default UserService;