import { UserAction } from "../action/UserAction";

export const reducer = (state, action) => {
    if (action.type === UserAction.Add) {
      return [...action.payload];
    }
    if (action.type === UserAction.Post) {
      return [...state ,action.payload];
    }
    return [...state];
  };