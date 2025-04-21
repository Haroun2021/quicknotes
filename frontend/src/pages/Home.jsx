import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>📝 QuickNotes</h1>
      {notes.map(note => (
        <div key={note._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h2>{note.title}</h2>
          <ReactMarkdown>{note.content}</ReactMarkdown>
          <small>{note.tags?.join(', ')}</small>
        </div>
      ))}
    </div>
  );
}

export default Home;
