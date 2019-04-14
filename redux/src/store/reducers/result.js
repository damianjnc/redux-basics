import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const inititialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return {
    ...state,
    results: updatedArray
  };
};

const reducer = (state = inititialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2
        })
      });
    case actionTypes.DELETE_RESULT:
      //const id = 2;
      //const newArray = [...state.results];
      //newArray.slice(id, 1);

      return deleteResult(state, action);
  }
  return state;
};

export default reducer;
