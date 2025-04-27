import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Edit2, Trash2, Calendar, Clock, Loader } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useNotes } from '../../context/NotesContext';
import Button from '../../components/ui/Button';
import { format } from 'date-fns';

const ViewNotePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getNote, deleteNote } = useNotes();
  const navigate = useNavigate();
  
  const note = id ? getNote(id) : undefined;
  
  const handleDelete = async () => {
    if (!id) return;
    
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await deleteNote(id);
        navigate('/dashboard');
      } catch (error) {
        console.error('Failed to delete note:', error);
        alert('Failed to delete note. Please try again.');
      }
    }
  };
  
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

  // Format dates
  const createdDate = format(new Date(note.createdAt), 'MMM d, yyyy');
  const updatedDate = format(new Date(note.updatedAt), 'MMM d, yyyy h:mm a');
  
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
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">{note.title}</h1>
            
            <div className="flex space-x-2">
              <Link to={`/notes/edit/${note.id}`}>
                <Button 
                  variant="outline" 
                  leftIcon={<Edit2 className="h-4 w-4" />}
                  size="sm"
                >
                  Edit
                </Button>
              </Link>
              <Button 
                variant="outline" 
                leftIcon={<Trash2 className="h-4 w-4" />}
                size="sm"
                className="text-error-600 hover:text-error-700 border-error-300 hover:border-error-400 dark:text-error-400 dark:hover:text-error-300 dark:border-error-600 dark:hover:border-error-500"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {note.tags.map((tag, index) => (
              <Link 
                key={index} 
                to={`/tags/${tag}`}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Created on {createdDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>Updated {updatedDate}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <div className="prose dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {note.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNotePage;