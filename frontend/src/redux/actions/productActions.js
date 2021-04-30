import { GET_ALL_PRODUCT } from "./type";
import api from "../../services/ProductAPI";

export const getAllProduct = () => async (dispatch) => {
  try {
    await api.getAllProduct().then((res) => {
      dispatch({
        type: GET_ALL_PRODUCT,
        payload: res.data,
      });
    });
  } catch (error) {
    console.error(error);
  }
};
