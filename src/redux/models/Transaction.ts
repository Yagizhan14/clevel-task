import { Currencies } from "./Currencies";

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

export type ITransactionActions =
  | INewTransactionAction
  | IDeleteTransactionAction
  | IUpdateTransactionAction;
