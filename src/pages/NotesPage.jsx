import React, { useEffect, useState } from "react";
// import { fakeData as notes } from "../assets/fakeData.js";
import { databases } from "../appWrite/config.js";
import { db } from "../appWrite/databases.js";
import NoteCard from "../components/NoteCard.jsx";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const response = await db.notes.list();
    // const response = await databases.listDocuments(
    //   import.meta.env.VITE_DATABASE_ID,
    //   import.meta.env.VITE_COLLECTION_NOTES_ID
    // );
    setNotes(response.documents);
    console.log(response);
  };
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.$id} note={note} />
      ))}
    </div>
  );
};

export default NotesPage;
