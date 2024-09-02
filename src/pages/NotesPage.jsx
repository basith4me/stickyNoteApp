import React, { useContext } from "react";
import NoteCard from "../components/NoteCard.jsx";
import Controls from "../components/Controls.jsx";
import { NoteContext } from "../context/NoteContext.jsx";

const NotesPage = () => {
  const { notes, setNotes } = useContext(NoteContext);

  // useEffect(() => {
  //   init();
  // }, []);

  // const init = async () => {
  //   const response = await db.notes.list();
  // const response = await databases.listDocuments(
  // import.meta.env.VITE_DATABASE_ID,
  // import.meta.env.VITE_COLLECTION_NOTES_ID
  // );
  // setNotes(response.documents);
  // console.log(response);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} setNotes={setNotes} />
      ))}
      <Controls />
    </div>
  );
};

export default NotesPage;
