import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { projectReducer } from "./Project/project.reducer";
import { taskReducer } from "./Task/task.reducer";


const rootReducer = combineReducers({
    projectManager: projectReducer,
    taskManager : taskReducer
});

const composeEnhancer = Window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));