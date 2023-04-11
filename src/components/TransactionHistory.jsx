import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
  return (
     <table className={css.transaction_history}>
      <thead>
        <tr className={css.transaction_table}>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} >
              <td className={css.table_item}>{type}</td>
              <td className={css.table_item}>{amount}</td>
              <td className={css.table_item}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired ,
    type: PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
};