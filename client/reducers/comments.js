// Reducer takes in 1) the action (what happened) and 2) copy of current state
// action, store => new copy of store

function postComments(state = [], action) {
    switch(action.type) {
        case "ADD_COMMENT":
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case "REMOVE_COMMENT":
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ]
        default:
            return state;
    }
    console.log(state, action);
    return state;
}

// Default params
function comments(state = [], action) {
    if (typeof action.postId !== "undefined") {
        return {
            // Take the current state
            ...state,
            // Overwrite this post with a new one
            // bracket notation lets us use a dynamic var as an object key
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}
export default comments;
