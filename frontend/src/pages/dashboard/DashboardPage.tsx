import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Filter, Search, Loader } from 'lucide-react';
import NoteCard from '../../components/notes/NoteCard';
import Button from '../../components/ui/Button';
import { useNotes } from '../../context/NotesContext';

const DashboardPage: React.FC = () => {
  const { notes, isLoading, deleteNote } = useNotes();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredNotes, setFilteredNotes] = useState(notes);
  
  const allTags = [...new Set(notes.flatMap(note => note.tags))].sort();
  
  useEffect(() => {
    let result = notes;
    
    if (activeFilter) {
      result = result.filter(note => note.tags.includes(activeFilter));
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(note => 
        note.title.toLowerCase().includes(query) || 
        note.content.toLowerCase().includes(query)
      );
    }
    
    setFilteredNotes(result);
  }, [notes, searchQuery, activeFilter]);
  
  const handleDeleteNote = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      await deleteNote(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Notes</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'} found
          </p>
        </div>
        
        <Link to="/notes/new" className="mt-4 sm:mt-0">
          <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
            New Note
          </Button>
        </Link>
      </div>
      
      <div className="mb-6">
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-10 py-2 w-full"
          />
        </div>
        
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          <div className="flex items-center">
            <Filter className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Filter:</span>
          </div>
          
          <button
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === null
                ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${
                activeFilter === tag
                  ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300'
                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveFilter(activeFilter === tag ? null : tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader className="h-8 w-8 text-primary-500 animate-spin mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading your notes...</p>
        </div>
      ) : filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map(note => (
            <NoteCard 
              key={note.id} 
              note={note} 
              onDelete={handleDeleteNote} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <Search className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notes found</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {searchQuery || activeFilter ? 
              'Try adjusting your search or filters to find what you\'re looking for.' : 
              'Get started by creating your first note.'}
          </p>
          {!searchQuery && !activeFilter && (
            <Link to="/notes/new">
              <Button variant="primary" leftIcon={<Plus className="h-4 w-4" />}>
                Create First Note
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;