import { createStore, compse } from "redux";
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from "react-router";

// Import the root reducer
import rootReducer from "./reducers/index";

import comments from "./data/comments";
import posts from "./data/posts";

// Create an obj for the default data
const defaultState = {
    posts, comments
};

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;