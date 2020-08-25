import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../components/layout";
import { Box } from "../components/Box";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { RootState } from "../redux";
import { connect } from "react-redux";
import { ITransaction, ITransactionActions } from "../redux/models/Transaction";
import { IconButton } from "../components/IconButton";
import { ToLocalDate } from "../utils/dateFormat";
import { Dispatch } from "redux";
import { deleteTransaction } from "../redux/actions/Transactions";

interface ITransactionsProps extends RouteComponentProps {
  transactions: ITransaction[];
}

const Transactions: React.FC<ITransactionsProps> = ({ transactions }) => {
  return (
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
        {transactions.length <= 0 ? (
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
                {transactions.map((item) => (
                  <tr key={item.id} className="datatable__row">
                    <td className="datatable__cell datatable__cell--centered">
                      {item.id}
                    </td>
                    <td className="datatable__cell datatable__cell--centered">
                      {item.name}
                    </td>
                    <td className="datatable__cell">{item.description}</td>
                    <td className="datatable__cell  datatable__cell--centered">
                      {ToLocalDate(item.date!.toISOString())}
                    </td>
                    <td className="datatable__cell datatable__cell--centered">
                      {item.currency} {item.amount}
                    </td>
                    <td className="datatable__cell  datatable__cell--centered">
                      <Box display="flex" justifyContent="evenly">
                        <IconButton
                          icon="Edit"
                          onClick={() => {}}
                          bgColor="transparent"
                        />
                        <IconButton
                          icon="Trash2"
                          iconColor="red"
                          onClick={() => {}}
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
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    transactions: state.transactions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deleteTransaction: (id: number) =>
      dispatch<ITransactionActions>(deleteTransaction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
