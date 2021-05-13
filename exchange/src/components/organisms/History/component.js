import Transaction from "../../moleculs/Transaction";
import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./style.module.scss";

const History = ({ transactions, transactionsAmount, header }) => {
  return (
    <div className={styles.content}>
			{header && (<BlockHeader
				link={"View all"}
				path={"/history"}
				title={"Last transactions"}
			/>)}
      {transactions.slice(0, transactionsAmount).reverse().map((transaction) => {
        return <Transaction transaction={transaction} key={transaction.id} />;
      })}
    </div>
  );
};

export default History;
