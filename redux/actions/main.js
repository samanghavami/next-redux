import * as t from "../types";
import axios from "axios";

export const setInfo = (name) => ({
  type: t.SET_NAME,
  payload: name,
});

export const setPosts = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(data);

  dispatch({
    type: t.SET_POST,
    payload: data,
  });
};
