import { ActionType } from "../constrain/index"

export const LIST_DATA = (data) => {
    return {
      type: ActionType.GETDATA,
      payload: data
    };
  };

export const ADD_CART = (product) => {
  return {
    type: ActionType.ADDCART,
    payload: product
  };
};

export const SUM_MONEY = () => {
  return {
    type: ActionType.SUMMONEY
  };
};

export const DELETE_PRODUCT_CART = (ID) => {
  return {
    type: ActionType.DELETEPRODUCTCART,
    payload: ID
  };
};

export const INCREASE_PRODUCT_CART = (ID) => {
  return {
    type: ActionType.Increase,
    payload: ID
  };
};


export const DECREASE_PRODUCT_CART = (ID) => {
  return {
    type: ActionType.Decrease,
    payload: ID
  };
};
