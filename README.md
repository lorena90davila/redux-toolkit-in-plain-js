# Using redux-toolkit in plain js

## Commands to run the project
npm i  
node index

## Notes
When using react-redux, all of the reducers evaluate an action dispatch, and the ones that match an action type are going to make changes to the state.
In this project, because we are using redux-toolkit, to be able to dispatch an action that affects more than one reducer, we would need to use the extra reducers functionality (due to the slices structure, that doesn't allow for changes in a different feature).
Immer and redux-thunk dependencies are also being added under the hood when installing @reduxjs/toolkit
