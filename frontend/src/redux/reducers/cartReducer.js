import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, INCREASE_QUANTITY_ITEM_CART, DECREASE_QUANTITY_ITEM_CART, RESET_QUANTITY_ITEM_CART } from "../../redux/actions/type";

const initiaData = {
    carItems : []
}

const cartReducer = (state=initiaData,action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            let valueItemToAdd = action.payload
            let findItem = state.carItems.find(item => item.id === valueItemToAdd.id);
            // console.log('findItem:',findItem);
            if (findItem) {
                findItem.quantity++;
            return state;
            
            } else {
                valueItemToAdd.quantity = 1;
                return {...state,
                    carItems : [...state.carItems,valueItemToAdd]
                }
            }

        case DELETE_ITEM_FROM_CART :
            return {
                ...state,
                carItems : state.carItems.filter(item => item.id !== action.payload.id)
            }
        case INCREASE_QUANTITY_ITEM_CART : {
            let findItem = state.carItems.find(item => item.id === action.payload.id);
            findItem.quantity++
            return {...state }
        }
        case DECREASE_QUANTITY_ITEM_CART : {
            let findItem = state.carItems.find(item => item.id === action.payload.id);
            findItem.quantity--
            return {...state }
        }
        case RESET_QUANTITY_ITEM_CART : 
        return initiaData;

        default: return state
    }
}

export default cartReducer