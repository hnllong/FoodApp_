import { ActionType } from "../constrain";

const initState = {
  cart: [],
  count: 0,
  sumMoney: 0,
  listproduct: [],
  error: ""
};
export default function HomeReducers(state = initState, action) {
  switch (action.type) {

    case ActionType.ADDCART:

      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionType.SUMMONEY:
      return {
        ...state,
        sumMoney: state.cart.reduce(
          (previousValue, currentValue) => currentValue.priceKM + previousValue,
          0
        )
      };


    case ActionType.Decrease:
      console.log(action.payload)
      // const cart = state.cart.map((val) => {
      //   if (val.id === action.payload) {

      //     val.quatity = val.quatity - 1
      //     console.log (val.quatity)
      //   }
      // })
      return {
        ...state
      };


    case ActionType.DELETEPRODUCTCART:

      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== action.payload)
      };
    case ActionType.ERROR:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
}
