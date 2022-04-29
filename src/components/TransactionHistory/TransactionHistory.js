import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr className={s.rowTable}>
          <th className={s.titleTable}>Type</th>
          <th className={s.titleTable}>Amount</th>
          <th className={s.titleTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={s.rowTable}>
              <td className={s.dataTable}>
                {type[0].toUpperCase() + type.slice(1)}
              </td>
              <td className={s.dataTable}>{amount}</td>
              <td className={s.dataTable}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};
export default TransactionHistory;
