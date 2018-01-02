// Reducer takes in 1) the action (what happened) and 2) copy of current state
// action, store => new copy of store

// Default params
function comments(state = [], action) {
    console.log(state, action);
    return state;
}
export default comments;