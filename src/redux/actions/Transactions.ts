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

export const showNewModal = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.SHOW_NEW_MODAL,
  };
};

export const hideNewModal = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.HIDE_NEW_MODAL,
  };
};

export const showDeleteModal = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.SHOW_DELETE_MODAL,
  };
};

export const hideDeleteModal = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.HIDE_DELETE_MODAL,
  };
};

export const setWillBeDeletedTransactionId = (
  id: number | undefined,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.SET_WILL_BE_DELETED_TRANSACTION_ID,
    payload: id,
  };
};

export const setWillBeUpdatedTransactionId = (
  id: number | undefined,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.SET_WILL_BE_UPDATED_TRANSACTION_ID,
    payload: id,
  };
};

export const onTransactionDraftChanged = (
  newDraft: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.TRANSACTION_DRAFT_CHANGE,
    payload: newDraft,
  };
};
