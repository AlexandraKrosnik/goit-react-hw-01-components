import s from "./TransactionHistory.module.css"

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
                {items.map(item => {
                    return (
                        <tr key = {item.id} className={s.rowTable}>
                            <td className={s.dataTable}>{item.type[0].toUpperCase() + item.type.slice(1)}</td>
                            <td className={s.dataTable}>{item.amount}</td>
                            <td className={s.dataTable}>{item.currency}</td>
                        </tr>
                    );
                })}               
                
            </tbody>
        </table>
    );
}
export default TransactionHistory;