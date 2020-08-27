import {
  ITransaction,
  TransactionActionTypes,
  ITransactionActions,
} from "../models/Transaction";

export const newTransactionAction = (
  transaction: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.NEW,
    payload: transaction,
  };
};

export const deleteTransactionAction = (id: number): ITransactionActions => {
  return {
    type: TransactionActionTypes.DELETE,
    payload: id,
  };
};

export const updateTransactionAction = (
  transaction: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.UPDATE,
    payload: transaction,
  };
};

export const showNewModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.SHOW_NEW_MODAL,
  };
};

export const hideNewModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.HIDE_NEW_MODAL,
  };
};

export const showDeleteModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.SHOW_DELETE_MODAL,
  };
};

export const hideDeleteModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.HIDE_DELETE_MODAL,
  };
};

export const showUpdateModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.SHOW_UPDATE_MODAL,
  };
};

export const hideUpdateModalAction = (): ITransactionActions => {
  return {
    type: TransactionActionTypes.HIDE_UPDATE_MODAL,
  };
};

export const setWillBeDeletedTransactionIdAction = (
  id: number | undefined,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.SET_WILL_BE_DELETED_TRANSACTION_ID,
    payload: id,
  };
};

export const setWillBeUpdatedTransactionIdAction = (
  id: number | undefined,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.SET_WILL_BE_UPDATED_TRANSACTION_ID,
    payload: id,
  };
};

export const onTransactionDraftChangedAction = (
  newDraft: ITransaction,
): ITransactionActions => {
  return {
    type: TransactionActionTypes.TRANSACTION_DRAFT_CHANGE,
    payload: newDraft,
  };
};
