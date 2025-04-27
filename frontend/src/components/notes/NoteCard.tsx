import React from 'react';
import { Link } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import { Note } from '../../context/NotesContext';
import { formatDistanceToNow } from 'date-fns';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => {
  // Get the first 150 characters of content without markdown
  const previewContent = note.content
    .replace(/[#*_~`]/g, '') // Remove markdown symbols
    .substring(0, 150) + (note.content.length > 150 ? '...' : '');
  
  // Format the date
  const updatedTime = formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true });
  
  return (
    <div className="card p-5 hover:shadow-md transition-all duration-200 h-full flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-start mb-2">
          <Link to={`/notes/${note.id}`} className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">
            {note.title}
          </Link>
          
          <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Link
              to={`/notes/edit/${note.id}`}
              className="p-1 text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              title="Edit"
            >
              <Edit2 className="h-4 w-4" />
            </Link>
            <button
              onClick={() => onDelete(note.id)}
              className="p-1 text-gray-500 hover:text-error-600 dark:text-gray-400 dark:hover:text-error-400"
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-3">
          {previewContent}
        </p>
      </div>
      
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-2">
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
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Updated {updatedTime}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;