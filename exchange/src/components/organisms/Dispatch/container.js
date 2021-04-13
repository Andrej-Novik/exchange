import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../../redux/actions/people";
import Dispatch from "./component";

const DispatchContainer = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.people);
  const isOpen = useSelector((state) => state.people.isModalOpen);

	const onOpen = () => {
    dispatch(openModal());
  };
  const onClose = () => {
    dispatch(closeModal());
  };

  return (
    <Dispatch
      people={people}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    />
  );
};

export const container = DispatchContainer;
