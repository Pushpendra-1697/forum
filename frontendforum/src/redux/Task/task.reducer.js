import { ADD_TASK, PROJECT_ERROR, PROJECT_LOADING, PROJECT_SUCCESS } from "./task.type";

const initialState = {
    tasks: [],
    error: false,
    loading: false
};
export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK: {
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, payload]
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
                tasks: payload
            }
        }
        default: {
            return state;
        }
    }
}