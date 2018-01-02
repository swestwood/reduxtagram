// Reducer takes in 1) the action (what happened) and 2) copy of current state
// action, store => new copy of store

// Default params
function posts(state = [], action) {
    // EVERY reducer runs every time there is an action!
    console.log("the post will change");
    console.log(state, action);
    return state;
}
export default posts;