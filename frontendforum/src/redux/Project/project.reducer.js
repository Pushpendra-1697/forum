import { ADD_PROJECT, PROJECT_ERROR, PROJECT_LOADING, PROJECT_SUCCESS } from "./project.type";

const initialState = {
    projects: [],
    error: false,
    loading: false
};
export const projectReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PROJECT: {
            return {
                ...state,
                loading: false,
                projects: [...state.projects, payload]
            }
        }
        case PROJECT_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case PROJECT_ERROR: {
            return {
                ...state,
                loading: false,
                error: payload || true
            }
        }
        case PROJECT_SUCCESS: {
            return {
                ...state,
                loading: false,
                projects: payload
            }
        }
        default: {
            return state;
        }
    }
}