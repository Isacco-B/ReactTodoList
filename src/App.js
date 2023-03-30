import { useState } from "react";

function NoteListItem(props) {
  return <li>{props.note.description}</li>;
}

function NoteList(props) {
  return (
    <ul>
      {props.notes.map((note, i) => {
        return <NoteListItem note={note} key={i} />;
      })}
    </ul>
  );
}

function NoteForm(props) {
  const [description, setDescription] = useState("");
  const [errorMessage, setMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (description.length > 3) {
      props.addNote(description);
      setDescription("");
      setMessage(null);
    } else {
      setMessage("Please enter more than 3 characters");
    }
  }

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [notes, setNotes] = useState([
    { description: "Fai la spesa", complite: false },
    { description: "Lava la macchina", complite: false },
    { description: "Scrivi codice", complite: false },
    { description: "Lava i piatti", complite: false },
  ]);

  function addNote(description) {
    setNotes([...notes, { description: description, complite: false }]);
  }

  return (
    <div>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
