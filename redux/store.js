import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducers";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const middleware = [thunk];

const makeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export const wrapper = createWrapper(makeStore);
