import axios from "axios";
import { backend_url } from '../../Routes/BackendURL';
import { ADD_TASK, PROJECT_ERROR, PROJECT_LOADING, PROJECT_SUCCESS } from "./task.type";

export const getTasks = () => async (dispatch) => {
    dispatch({ type: PROJECT_LOADING });
    try {
        let res = await axios.get(`${backend_url}/task/get`);
        console.log(res)
        dispatch({ type: PROJECT_SUCCESS, payload: res.data.projects });
    } catch (e) {
        dispatch({ type: PROJECT_ERROR, payload: e.message });
    }
};

export const addTask = (message) => async (dispatch) => {
    dispatch({ type: PROJECT_LOADING });
    try {
        let res = await axios.post(`${backend_url}/task/`, message);
        alert(`${res.data.msg}`);
        dispatch({ type: ADD_TASK, payload: res.data.project });
    } catch (e) {
        dispatch({ type: PROJECT_ERROR, payload: e.message });
    }
};