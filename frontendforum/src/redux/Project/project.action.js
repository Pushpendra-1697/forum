import axios from "axios";
import { backend_url } from '../../Routes/BackendURL';
import { ADD_PROJECT, PROJECT_ERROR, PROJECT_LOADING, PROJECT_SUCCESS } from "./project.type";

export const getProjects = () => async (dispatch) => {
    dispatch({ type: PROJECT_LOADING });
    try {
        let res = await axios.get(`${backend_url}/project/get`);
        dispatch({ type: PROJECT_SUCCESS, payload: res.data.projects });
    } catch (e) {
        dispatch({ type: PROJECT_ERROR, payload: e.message });
    }
};

export const addProject = (message) => async (dispatch) => {
    dispatch({ type: PROJECT_LOADING });
    try {
        let res = await axios.post(`${backend_url}/project/`, message);
        alert(`${res.data.msg}`);
        dispatch({ type: ADD_PROJECT, payload: res.data.project });
        localStorage.setItem('project_id', res.data.project._id);
    } catch (e) {
        dispatch({ type: PROJECT_ERROR, payload: e.message });
    }
};