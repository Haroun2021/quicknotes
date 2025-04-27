import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Loader } from 'lucide-react';
import NoteEditor from '../../components/notes/NoteEditor';
import { useNotes } from '../../context/NotesContext';

const EditNotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getNote, updateNote } = useNotes();
  const navigate = useNavigate();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [note, setNote] = useState<{
    title: string;
    content: string;
    tags: string[];
  } | null>(null);
  
  useEffect(() => {
    if (id) {
      const foundNote = getNote(id);
      if (foundNote) {
        setNote({
          title: foundNote.title,
          content: foundNote.content,
          tags: foundNote.tags
        });
      } else {
        navigate('/not-found');
      }
    }
    setIsLoading(false);
  }, [id, getNote, navigate]);
  
  const handleSave = async (title: string, content: string, tags: string[]) => {
    if (!id) return;
    
    setIsSubmitting(true);
    
    try {
      await updateNote(id, { title, content, tags });
      navigate(`/notes/${id}`);
    } catch (error) {
      console.error('Failed to update note:', error);
      alert('Failed to update note. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center py-12">
        <Loader className="h-8 w-8 text-primary-500 animate-spin mb-4" />
        <p className="text-gray-600 dark:text-gray-400">Loading note...</p>
      </div>
    );
  }
  
  if (!note) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Note not found</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            The note you're looking for doesn't exist or has been deleted.
          </p>
          <Link 
            to="/dashboard" 
            className="text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
          >
            Return to dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <Link 
          to={`/notes/${id}`} 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to note
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Edit Note</h1>
      
      <NoteEditor
        initialTitle={note.title}
        initialContent={note.content}
        initialTags={note.tags}
        onSave={handleSave}
        isLoading={isSubmitting}
      />
    </div>
  );
};

export default EditNotePage;