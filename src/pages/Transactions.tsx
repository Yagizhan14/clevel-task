import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../components/layout";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { RootState } from "../redux";
import { connect } from "react-redux";
import {
  ITransaction,
  ITransactionActions,
  ITransactionsState,
} from "../redux/models/Transaction";
import { IconButton } from "../components/IconButton";
import { ToLocalDate } from "../utils/dateFormat";
import { Dispatch } from "redux";
import {
  deleteTransaction,
  newTransaction,
  updateTransaction,
  showNewModal,
  hideNewModal,
  showDeleteModal,
  hideDeleteModal,
  setWillBeDeletedTransactionId,
  onTransactionDraftChanged,
  setWillBeUpdatedTransactionId,
} from "../redux/actions/Transactions";
import { Modal } from "../components/Modal";
import { TextInput } from "../components/TextInput";
import { Currencies } from "../redux/models/Currencies";
import { TextArea } from "../components/TextArea";
import { DatePicker } from "../components/DatePicker";
import { Label } from "../components/Label";
import Datatable, { IDatatableColumn } from "../components/Datatable";

interface ITransactionsProps extends RouteComponentProps {
  transactionState: ITransactionsState;
  createTransaction: (transaction: ITransaction) => ITransactionActions;
  updateTransaction: (transaction: ITransaction) => ITransactionActions;
  deleteTransaction: (id: number) => ITransactionActions;
  showNewModal: () => ITransactionActions;
  hideNewModal: () => ITransactionActions;
  showDeleteModal: () => ITransactionActions;
  hideDeleteModal: () => ITransactionActions;
  setWillBeDeletedTransactionId: (
    id: number | undefined,
  ) => ITransactionActions;
  onTransactionDraftChange: (newDraft: ITransaction) => ITransactionActions;
  setWillBeUpdatedTransactionId: (
    id: number | undefined,
  ) => ITransactionActions;
}

const Transactions: React.FC<ITransactionsProps> = ({
  transactionState,
  createTransaction,
  deleteTransaction,
  updateTransaction,
  hideDeleteModal,
  showDeleteModal,
  showNewModal,
  hideNewModal,
  setWillBeDeletedTransactionId,
  onTransactionDraftChange,
}) => {
  const [nameError, setNameError] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");

  const validate = () => {
    if (!transactionState.transactionDraft.name) {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
    if (transactionState.transactionDraft.amount === undefined) {
      setAmountError("This field is required");
    } else {
      setAmountError("");
    }
  };

  return (
    <React.Fragment>
      <Layout>
        <Box display="flex" direction="column">
          <Box
            position="sticky"
            top="0"
            display="flex"
            justifyContent="end"
            marginBottom={2}
            bgColor="white"
            zIndex={999}
            paddingY={2}
          >
            <Button
              bgColor="white"
              inline
              onClick={() => {
                validate();
                showNewModal();
              }}
              iconStart={
                <Icon
                  icon="Plus"
                  accessibilityLabel="New Transaction"
                  color="currentColor"
                  size={16}
                />
              }
              text="New Transaction"
            />
          </Box>
          {transactionState.transactions.length <= 0 ? (
            <p>No Record Found!</p>
          ) : (
            <Box>
              <table className="datatable">
                <thead className="datatable__header datatable__header--sticky">
                  <th className="datatable__header-item">ID</th>
                  <th className="datatable__header-item">Name</th>
                  <th className="datatable__header-item">Description</th>
                  <th className="datatable__header-item">Transaction Date</th>
                  <th className="datatable__header-item">Amount</th>
                  <th className="datatable__header-item"></th>
                </thead>
                <tbody className="datatable__body">
                  {transactionState.transactions.map((item) => (
                    <tr key={item.id} className="datatable__row">
                      <td className="datatable__cell datatable__cell--centered">
                        {item.id}
                      </td>
                      <td className="datatable__cell datatable__cell--centered">
                        {item.name}
                      </td>
                      <td className="datatable__cell">{item.description}</td>
                      <td className="datatable__cell  datatable__cell--centered">
                        {item.date && ToLocalDate(item.date.toISOString())}
                      </td>
                      <td className="datatable__cell datatable__cell--centered">
                        {item.currency} {item.amount}
                      </td>
                      <td className="datatable__cell  datatable__cell--centered">
                        <Box display="flex" justifyContent="evenly">
                          <IconButton
                            icon="Edit"
                            onClick={() => {
                              setWillBeUpdatedTransactionId(item.id);
                              showNewModal();
                            }}
                            bgColor="transparent"
                          />
                          <IconButton
                            icon="Trash2"
                            iconColor="red"
                            onClick={() => {
                              setWillBeDeletedTransactionId(item.id);
                              showDeleteModal();
                            }}
                            bgColor="transparent"
                          />
                        </Box>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          )}
        </Box>
      </Layout>

      <Modal
        isVisible={transactionState.newAndUpdateTransactionModalVisible}
        accessibilityModalLabel="new transaction"
        onDismiss={() => hideNewModal()}
        header={`${
          transactionState.transactionDraft.id !== undefined
            ? "Update Transaction"
            : "New Transaction"
        }`}
        footer={
          <Box display="flex" alignItems="center" justifyContent="end">
            <Box>
              <Button
                disabled={!!nameError || !!amountError}
                text="Save"
                onClick={() => {
                  validate();
                  if (!nameError && !amountError) {
                    createTransaction({
                      ...transactionState.transactionDraft,
                      id:
                        Math.max(
                          ...transactionState.transactions.map(
                            (item) => item.id,
                          ),
                        ) + 1,
                    });
                    hideNewModal();
                  }
                }}
              />
            </Box>
            <Box marginLeft={3}>
              <Button
                text="Cancel"
                bgColor="transparent"
                onClick={() => hideNewModal()}
              />
            </Box>
          </Box>
        }
      >
        <Box display="flex" direction="column">
          <Box>
            <TextInput
              id="name"
              name="name"
              label="Transaction Name"
              value={transactionState.transactionDraft.name}
              onChange={(v) => {
                onTransactionDraftChange({
                  ...transactionState.transactionDraft,
                  name: v,
                });
                validate();
              }}
              required
              errorMessage={nameError}
              hasError={!!nameError}
            />
          </Box>
          <Box>
            <TextArea
              rows={3}
              id="description"
              name="description"
              label="Transaction Description"
              value={transactionState.transactionDraft.description}
              onChange={(v) => {
                onTransactionDraftChange({
                  ...transactionState.transactionDraft,
                  description: v,
                });
                validate();
              }}
            />
          </Box>
          <Box>
            <DatePicker
              id="date"
              label="Transaction Date"
              value={transactionState.transactionDraft.date}
              onChange={(v) => {
                onTransactionDraftChange({
                  ...transactionState.transactionDraft,
                  date: v,
                });
                validate();
              }}
            />
          </Box>
          <Box>
            <TextInput
              type="number"
              id="amount"
              name="amount"
              label="Transaction Amount"
              value={transactionState.transactionDraft.amount.toString()}
              onChange={(v) => {
                onTransactionDraftChange({
                  ...transactionState.transactionDraft,
                  amount: parseInt(v),
                });
                validate();
              }}
              required
              errorMessage={amountError}
              hasError={!!amountError}
            />
          </Box>
          <Box marginTop={1}>
            <Label htmlFor="currency" required>
              Transaction Currency
            </Label>
            <select
              value={transactionState.transactionDraft.currency}
              onChange={(e) => {
                onTransactionDraftChange({
                  ...transactionState.transactionDraft,
                  currency: e.target.value as Currencies,
                });
                validate();
              }}
              id="currency"
              name="currency"
            >
              <option value={Currencies.TRY}>{Currencies.TRY}</option>
              <option value={Currencies.USD}>{Currencies.USD}</option>
              <option value={Currencies.EUR}>{Currencies.EUR}</option>
            </select>
          </Box>
        </Box>
      </Modal>

      <Modal
        isVisible={transactionState.deleteTransactionModalVisible}
        accessibilityModalLabel="delete transaction"
        onDismiss={() => hideDeleteModal()}
        header="Delete Transaction"
        footer={
          <Box display="flex" alignItems="center" justifyContent="end">
            <Box>
              <Button
                text="Delete"
                bgColor="red"
                onClick={() => {
                  deleteTransaction(
                    transactionState.willBeDeletedTransactionId!,
                  );
                  hideDeleteModal();
                }}
              />
            </Box>
            <Box marginLeft={3}>
              <Button
                text="Cancel"
                bgColor="transparent"
                onClick={() => hideDeleteModal()}
              />
            </Box>
          </Box>
        }
      >
        <p>This transaction will be deleted. Are you sure?</p>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    transactionState: state.transactions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTransaction: (id: number) => {
      return dispatch<ITransactionActions>(deleteTransaction(id));
    },
    createTransaction: (transaction: ITransaction) => {
      return dispatch<ITransactionActions>(newTransaction(transaction));
    },
    updateTransaction: (transaction: ITransaction) => {
      return dispatch<ITransactionActions>(updateTransaction(transaction));
    },
    showNewModal: () => {
      return dispatch<ITransactionActions>(showNewModal());
    },
    hideNewModal: () => {
      return dispatch<ITransactionActions>(hideNewModal());
    },
    showDeleteModal: () => {
      return dispatch<ITransactionActions>(showDeleteModal());
    },
    hideDeleteModal: () => {
      return dispatch<ITransactionActions>(hideDeleteModal());
    },
    setWillBeDeletedTransactionId: (id: number | undefined) => {
      return dispatch<ITransactionActions>(setWillBeDeletedTransactionId(id));
    },
    setWillBeUpdatedTransactionId: (id: number | undefined) => {
      return dispatch<ITransactionActions>(setWillBeUpdatedTransactionId(id));
    },
    onTransactionDraftChange: (newDraft: ITransaction) => {
      return dispatch<ITransactionActions>(onTransactionDraftChanged(newDraft));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
