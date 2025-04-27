import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NoteEditor from '../../components/notes/NoteEditor';
import { useNotes } from '../../context/NotesContext';
import { Link } from 'react-router-dom';

const CreateNotePage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createNote } = useNotes();
  const navigate = useNavigate();
  
  const handleSave = async (title: string, content: string, tags: string[]) => {
    setIsSubmitting(true);
    
    try {
      const newNote = await createNote({ title, content, tags });
      navigate(`/notes/${newNote.id}`);
    } catch (error) {
      console.error('Failed to create note:', error);
      alert('Failed to create note. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to dashboard
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create New Note</h1>
      
      <NoteEditor
        onSave={handleSave}
        isLoading={isSubmitting}
      />
    </div>
  );
};

export default CreateNotePage;