const INITIAL_STATE = {
    poster_path: "",
    title: [],
  };
  export default function favoritsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
     
        case "SET_FAVOURITE":
            return {
              ...state,
            title:action.payload,
            };
      default:
        return state;
    }
  }