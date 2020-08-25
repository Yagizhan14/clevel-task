import { createStore, combineReducers } from "redux";
import { TransactionsReducer } from "./reducers";

const rootReducer = combineReducers({
  transactions: TransactionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
