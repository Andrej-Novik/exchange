import Person from "../../moleculs/Person";
import BlockHeader from "../../moleculs/BlockHeader";
import styles from "./styles.module.scss";
import AddNewUserModal from "../AddNewUserModal";
import Button from "../../atoms/Button";

const Dispatch = ({ people, isOpen, onOpen, onClose }) => {
  return (
    <div className={styles.content}>
      <BlockHeader title={"New transaction"} />
      <div className={styles.peoples}>
        {people.slice(0, 6).map((person) => {
          return <Person person={person} key={person.id} />;
        })}
        <div onClick={onOpen} className={styles.add}>
          +
        </div>
      </div>
      <div className={styles.send}>
				<input className={styles.amount} type="text" placeholder="0" />
				<select className={styles.type}>
					<option>BTC</option>
					<option>ETH</option>
					<option>LIT</option>
					<option>BCH</option>
					<option>XRP</option>
				</select>
				<Button text={ "Send the transfer"}/>
      </div>
      <AddNewUserModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default Dispatch;
