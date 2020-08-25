import { ITransaction } from "../models/Transaction";
import {
  ITransactionActions,
  TransactionActionTypes,
} from "../models/Transaction";
import data from "../../data/transactions.json";

const mapJsonToTransaction = (data: any): ITransaction[] => {
  return data.transactions.map((item: any) => ({
    id: parseInt(item.id),
    name: item.name,
    description: item.description,
    date: new Date(item.date),
    amount: parseFloat(item.amount),
    currency: item.currency,
  }));
};

const initialState: ITransaction[] = mapJsonToTransaction(data);

export const TransactionsReducer = (
  state: ITransaction[] = initialState,
  action: ITransactionActions,
) => {
  switch (action.type) {
    case TransactionActionTypes.NEW:
      return [...state, action.payload];
    case TransactionActionTypes.DELETE:
      return state.filter((item) => item.id === action.payload);
    case TransactionActionTypes.UPDATE:
      return state.map((item) =>
        item.id === action.payload.id ? { ...action.payload } : item,
      );
    default:
      return state;
  }
};
