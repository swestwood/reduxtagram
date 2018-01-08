## Redux notes

- One giant central store that holds the state
- Update the state with actions (actionCreators creates actions via exported functions)
    - Actions have a type and then any extra data
- Dispatched actions get handled by reducers. Reducers update the state.
    - Reducers must be pure functions that return immediately. Not supposed to have anything async.
    - Can use a Redux thunk or saga to do async calls to an external API and dispatch an action when the data comes back from the API.
- React components get the state and action functions as props (define the mapping)
- Normalizr: to normalize deeply nested JSON structures (i.e. that come back from the API and you want to be able to update it via Redux)
- Webpack does hot reloading