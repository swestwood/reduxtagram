// Reducer takes in 1) the action (what happened) and 2) copy of current state
// action, store => new copy of store

// Default params
function posts(state = [], action) {
    // EVERY reducer runs every time there is an action!
    // Must be a pure function -- does the same thing no matter how many
    // times it runs on its input
    console.log("the post will change");
    console.log(state, action);
    // Changes here don't get live-reloaded (only react components do)
    // return the updated state
    switch(action.type) {
        case "INCREMENT_LIKES":
            console.log("incrementing likes")
            const i = action.index;
            return [
                ...state.slice(0, i),  // before the updated one
                {...state[i], likes: state[i].likes + 1},  // update the one we want
                ...state.slice(i + 1), // everything after
            ]
        default:
            return state;
    }
}
export default posts;
