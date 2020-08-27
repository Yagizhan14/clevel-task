import { Currencies } from "./Currencies";

export interface ITransactionsState {
  transactionDraft: ITransaction;
  transactions: ITransaction[];
  deleteTransactionModalVisible: boolean;
  newTransactionModalVisible: boolean;
  updateTransactionModalVisible: boolean;
  willBeDeletedTransactionId: number | undefined;
}
export interface ITransaction {
  id: number;
  name: string;
  description?: string;
  date?: Date;
  amount: number;
  currency: Currencies;
}

export enum TransactionActionTypes {
  NEW,
  UPDATE,
  DELETE,
  SHOW_NEW_MODAL,
  HIDE_NEW_MODAL,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  SHOW_UPDATE_MODAL,
  HIDE_UPDATE_MODAL,
  SET_WILL_BE_DELETED_TRANSACTION_ID,
  SET_WILL_BE_UPDATED_TRANSACTION_ID,
  TRANSACTION_DRAFT_CHANGE,
}

export interface INewTransactionAction {
  type: TransactionActionTypes.NEW;
  payload: ITransaction;
}

export interface IDeleteTransactionAction {
  type: TransactionActionTypes.DELETE;
  payload: number;
}

export interface IUpdateTransactionAction {
  type: TransactionActionTypes.UPDATE;
  payload: ITransaction;
}

export interface IShowNewModalAction {
  type: TransactionActionTypes.SHOW_NEW_MODAL;
}
export interface IHideNewModalAction {
  type: TransactionActionTypes.HIDE_NEW_MODAL;
}
export interface IShowDeleteModalAction {
  type: TransactionActionTypes.SHOW_DELETE_MODAL;
}
export interface IHideDeleteModalAction {
  type: TransactionActionTypes.HIDE_DELETE_MODAL;
}

export interface IShowUpdateModalAction {
  type: TransactionActionTypes.SHOW_UPDATE_MODAL;
}

export interface IHideUpdateModalAction {
  type: TransactionActionTypes.HIDE_UPDATE_MODAL;
}

export interface ISetWillBeDeletedTransactionIdAction {
  type: TransactionActionTypes.SET_WILL_BE_DELETED_TRANSACTION_ID;
  payload: number | undefined;
}

export interface ITransactionDraftChangeAction {
  type: TransactionActionTypes.TRANSACTION_DRAFT_CHANGE;
  payload: ITransaction;
}

export interface ISetWillBeUpdatedTransactionIdAction {
  type: TransactionActionTypes.SET_WILL_BE_UPDATED_TRANSACTION_ID;
  payload: number | undefined;
}

export type ITransactionActions =
  | INewTransactionAction
  | IDeleteTransactionAction
  | IUpdateTransactionAction
  | IShowDeleteModalAction
  | IHideDeleteModalAction
  | IShowNewModalAction
  | IHideNewModalAction
  | ISetWillBeDeletedTransactionIdAction
  | ITransactionDraftChangeAction
  | ISetWillBeUpdatedTransactionIdAction
  | IHideUpdateModalAction
  | IShowUpdateModalAction;
