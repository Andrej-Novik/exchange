import BlockHeader from "../../moleculs/BlockHeader";
import Button from "../../atoms/Button";
import Note from "../../moleculs/Note";
import styles from "./styles.module.scss";
import { useState } from "react";

const Notes = ({ notes, addNote }) => {
  const [newNote, setNewNote] = useState("");

  const onAddNote = () => {
    addNote(newNote);
    setNewNote("");
  };

  return (
    <div className={styles.notes}>
      <BlockHeader title={"Notes"} />
      <div className={styles.content}>
        {notes.map((note, index) => {
          return <Note note={note} key={note.id} index={index} />;
        })}
      </div>
      <div className={styles.input}>
        <textarea
          type="text"
          value={newNote}
          onChange={(e) => {
            setNewNote(e.target.value);
          }}
        />
      </div>
      <button className={styles.button} onClick={onAddNote} disabled={!newNote}>
        Add
      </button>
    </div>
  );
};
export default Notes;
