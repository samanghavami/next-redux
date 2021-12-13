import * as t from "../types";

const main = (
  state = {
    name: "Saman",
    posts: {},
  },
  action
) => {
  switch (action.type) {
    case t.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case t.SET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return { ...state };
  }
};

export default main;
