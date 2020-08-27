import { ITransaction, ITransactionsState } from "../models/Transaction";
import {
  ITransactionActions,
  TransactionActionTypes,
} from "../models/Transaction";
import data from "../../data/transactions.json";
import { Currencies } from "../models/Currencies";

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

const initialState: ITransactionsState = {
  transactionDraft: {
    id: 0,
    amount: 0,
    currency: Currencies.TRY,
    name: "",
    date: undefined,
    description: "",
  },
  willBeDeletedTransactionId: undefined,
  transactions: mapJsonToTransaction(data),
  newTransactionModalVisible: false,
  updateTransactionModalVisible: false,
  deleteTransactionModalVisible: false,
};

export const TransactionsReducer = (
  state: ITransactionsState = initialState,
  action: ITransactionActions,
): ITransactionsState => {
  switch (action.type) {
    case TransactionActionTypes.NEW:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case TransactionActionTypes.DELETE:
      return {
        ...state,
        transactions: [
          ...state.transactions.filter((item) => item.id !== action.payload),
        ],
      };
    case TransactionActionTypes.UPDATE:
      return {
        ...state,
        transactions: [
          ...state.transactions.map((item) =>
            item.id === action.payload.id ? { ...action.payload } : item,
          ),
        ],
      };
    case TransactionActionTypes.SHOW_NEW_MODAL:
      return {
        ...state,
        transactionDraft: {
          id: 0,
          amount: 0,
          currency: Currencies.TRY,
          name: "",
          date: undefined,
          description: "",
        },
        newTransactionModalVisible: true,
      };
    case TransactionActionTypes.HIDE_NEW_MODAL:
      return {
        ...state,
        newTransactionModalVisible: false,
      };
    case TransactionActionTypes.SHOW_DELETE_MODAL:
      return {
        ...state,
        deleteTransactionModalVisible: true,
      };
    case TransactionActionTypes.HIDE_DELETE_MODAL:
      return {
        ...state,
        deleteTransactionModalVisible: false,
      };
    case TransactionActionTypes.SHOW_UPDATE_MODAL:
      return {
        ...state,
        updateTransactionModalVisible: true,
      };
    case TransactionActionTypes.HIDE_UPDATE_MODAL:
      return {
        ...state,
        updateTransactionModalVisible: false,
      };
    case TransactionActionTypes.SET_WILL_BE_DELETED_TRANSACTION_ID:
      return {
        ...state,
        willBeDeletedTransactionId: action.payload,
      };
    case TransactionActionTypes.SET_WILL_BE_UPDATED_TRANSACTION_ID:
      return {
        ...state,
        transactionDraft: {
          ...state.transactions.find((item) => item.id === action.payload)!,
        },
      };
    case TransactionActionTypes.TRANSACTION_DRAFT_CHANGE:
      return {
        ...state,
        transactionDraft: { ...action.payload },
      };
    default:
      return state;
  }
};
