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
  deleteTransactionAction,
  newTransactionAction,
  updateTransactionAction,
  showNewModalAction,
  hideNewModalAction,
  showDeleteModalAction,
  hideDeleteModalAction,
  setWillBeDeletedTransactionIdAction,
  onTransactionDraftChangedAction,
  setWillBeUpdatedTransactionIdAction,
  showUpdateModalAction,
  hideUpdateModalAction,
} from "../redux/actions/Transactions";
import { Modal } from "../components/Modal";
import { TextInput } from "../components/TextInput";
import { Currencies } from "../redux/models/Currencies";
import { TextArea } from "../components/TextArea";
import { DatePicker } from "../components/DatePicker";
import { Label } from "../components/Label";
import Datatable, { IDatatableColumn } from "../components/Datatable";

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
  hideUpdateModal,
  setWillBeUpdatedTransactionId,
  showUpdateModal,
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

  const columns: IDatatableColumn<ITransaction>[] = [
    {
      key: "id",
      label: "ID",
      centered: true,
      render: (item) => <span>{item.id}</span>,
    },
    {
      key: "name",
      label: "Name",
      centered: true,
      render: (item) => <span>{item.name}</span>,
    },
    {
      key: "description",
      label: "Description",
      centered: false,
      render: (item) => <span>{item.description}</span>,
    },
    {
      key: "date",
      label: "Date",
      centered: true,
      render: (item) => (
        <span>{item.date && ToLocalDate(item.date.toISOString())}</span>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      centered: true,
      render: (item) => (
        <span>
          {item.currency} {item.amount}
        </span>
      ),
    },
    {
      key: "editDelete",
      label: "Edit / Delete",
      centered: true,
      render: (item) => {
        console.log("executed");
        return (
          <Box display="flex" justifyContent="evenly">
            <IconButton
              icon="Edit"
              onClick={() => {
                setWillBeUpdatedTransactionId(item.id);
                showUpdateModal();
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
        );
      },
    },
  ];

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
          <Datatable columns={columns} data={transactionState.transactions} />
        </Box>
      </Layout>

      <Modal
        isVisible={transactionState.newTransactionModalVisible}
        accessibilityModalLabel="new transaction"
        onDismiss={() => hideNewModal()}
        header="New Transaction"
        footer={
          <Box display="flex" alignItems="center" justifyContent="end">
            <Box>
              <Button
                disabled={!!nameError || !!amountError}
                text="Save"
                onClick={() => {
                  validate();
                  if (!nameError && !amountError) {
                    if (
                      transactionState.transactions.some((item) => item.id > 0)
                    ) {
                      createTransaction({
                        ...transactionState.transactionDraft,
                        id:
                          Math.max(
                            ...transactionState.transactions.map(
                              (item) => item.id,
                            ),
                          ) + 1,
                      });
                    } else {
                      createTransaction({
                        ...transactionState.transactionDraft,
                        id: 1,
                      });
                    }
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
              value={transactionState.transactionDraft.amount.toString() || "0"}
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
            <Box marginTop={1}>
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
        </Box>
      </Modal>

      <Modal
        isVisible={transactionState.updateTransactionModalVisible}
        accessibilityModalLabel="update transaction"
        onDismiss={() => hideUpdateModal()}
        header="Update Transaction"
        footer={
          <Box display="flex" alignItems="center" justifyContent="end">
            <Box>
              <Button
                disabled={!!nameError || !!amountError}
                text="Save"
                onClick={() => {
                  validate();
                  if (!nameError && !amountError) {
                    updateTransaction({
                      ...transactionState.transactionDraft,
                    });
                    hideUpdateModal();
                  }
                }}
              />
            </Box>
            <Box marginLeft={3}>
              <Button
                text="Cancel"
                bgColor="transparent"
                onClick={() => hideUpdateModal()}
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
              value={transactionState.transactionDraft.amount.toString() || "0"}
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
            <Box marginTop={1}>
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

interface ITransactionsProps extends RouteComponentProps {
  transactionState: ITransactionsState;
  createTransaction: (transaction: ITransaction) => ITransactionActions;
  updateTransaction: (transaction: ITransaction) => ITransactionActions;
  deleteTransaction: (id: number) => ITransactionActions;
  showNewModal: () => ITransactionActions;
  hideNewModal: () => ITransactionActions;
  showDeleteModal: () => ITransactionActions;
  hideDeleteModal: () => ITransactionActions;
  showUpdateModal: () => ITransactionActions;
  hideUpdateModal: () => ITransactionActions;
  setWillBeDeletedTransactionId: (
    id: number | undefined,
  ) => ITransactionActions;
  onTransactionDraftChange: (newDraft: ITransaction) => ITransactionActions;
  setWillBeUpdatedTransactionId: (
    id: number | undefined,
  ) => ITransactionActions;
}

const mapStateToProps = (state: RootState) => {
  return {
    transactionState: state.transactions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTransaction: (id: number) => {
      return dispatch<ITransactionActions>(deleteTransactionAction(id));
    },
    createTransaction: (transaction: ITransaction) => {
      return dispatch<ITransactionActions>(newTransactionAction(transaction));
    },
    updateTransaction: (transaction: ITransaction) => {
      return dispatch<ITransactionActions>(
        updateTransactionAction(transaction),
      );
    },
    showNewModal: () => {
      return dispatch<ITransactionActions>(showNewModalAction());
    },
    hideNewModal: () => {
      return dispatch<ITransactionActions>(hideNewModalAction());
    },
    showDeleteModal: () => {
      return dispatch<ITransactionActions>(showDeleteModalAction());
    },
    hideDeleteModal: () => {
      return dispatch<ITransactionActions>(hideDeleteModalAction());
    },
    showUpdateModal: () => {
      return dispatch<ITransactionActions>(showUpdateModalAction());
    },
    hideUpdateModal: () => {
      return dispatch<ITransactionActions>(hideUpdateModalAction());
    },
    setWillBeDeletedTransactionId: (id: number | undefined) => {
      return dispatch<ITransactionActions>(
        setWillBeDeletedTransactionIdAction(id),
      );
    },
    setWillBeUpdatedTransactionId: (id: number | undefined) => {
      return dispatch<ITransactionActions>(
        setWillBeUpdatedTransactionIdAction(id),
      );
    },
    onTransactionDraftChange: (newDraft: ITransaction) => {
      return dispatch<ITransactionActions>(
        onTransactionDraftChangedAction(newDraft),
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
