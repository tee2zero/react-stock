import { GET_ALL_PRODUCT } from "../../redux/actions/type";

const initialData = {
  items: [],
};
const productReducer = (state = initialData, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
