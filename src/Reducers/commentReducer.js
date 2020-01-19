import * as type from "../Actions/constant.js";

const initialState = {
  comments: []
};

const commentReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case type.LOAD_COMMENTS:
      return { comments: action.comments };

    default:
      return state;
  }
};

export default commentReducer;
