import {
  ITransaction,
  TransactionActionTypes,
  ITransactionActions,
} from "../models/Transaction";

export const newTransaction = (
  transaction: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.NEW,
    payload: transaction,
  };
};

export const deleteTransaction = (id: number): ITransactionActions => {
  return {
    type: TransactionActionTypes.DELETE,
    payload: id,
  };
};

export const updateTransaction = (
  transaction: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.UPDATE,
    payload: transaction,
  };
};
