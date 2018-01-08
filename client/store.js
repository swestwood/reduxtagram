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

if (module.hot) {
    module.hot.accept("./reducers/", () => {
        // Import syntax doesn't work unless at top level
        const nextRootReducer = require("./reducers/index").default;
        // Reducer gets hot-reloaded. Whenever there is a change, it replays back
        // all the state changes on top
        store.replaceReducer(nextRootReducer);
    })
}

export default store;
