import { createStore } from "redux";
import store from "./store";

function containsObject(obj, list) {
  console.log("list", list);
  console.log("obj ", obj);
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].id === obj.id) {
      return true;
    }
  }

  return false;
}

const reducer = (state = { count: 0, data: [] }, action) => {
  if (action.type == "ADDFAV") {
    // console.log("ADDFAV", "called");
    // console.log(state);
    // console.log("condation ", containsObject(action.payload, state.data));
    if (containsObject(action.payload, state.data)) {
      console.log("exit movie ");
      const updateArry = state.data.filter((movie) => {
        return movie.id != action.payload.id;
      });
      return {
        count: state.count - 1,
        data: [...updateArry],
      };
    }

    const updatedArr = [...state.data, action.payload];
    return {
      count: state.count + 1,
      data: [...updatedArr],
      // data: state.data.push(action.payload),
    };
  }

  return state;
};

const myStore = createStore(reducer);
export default myStore;
