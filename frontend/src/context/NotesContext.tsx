import React, { createContext, useContext, useState, useEffect } from 'react';
import { format } from 'date-fns';

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  userId: string;
}

interface NotesContextType {
  notes: Note[];
  isLoading: boolean;
  error: string | null;
  createNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => Promise<Note>;
  updateNote: (id: string, note: Partial<Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>) => Promise<Note>;
  deleteNote: (id: string) => Promise<void>;
  getNote: (id: string) => Note | undefined;
  getNotesByTag: (tag: string) => Note[];
  searchNotes: (query: string) => Note[];
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

// Mock data for demonstration
const generateMockNotes = (userId: string): Note[] => {
  return [
    {
      id: '1',
      title: 'Getting Started with QuickNotes',
      content: `# Welcome to QuickNotes!\n\nThis is your first note. QuickNotes supports Markdown formatting, so you can:\n\n- Create **bold** or *italic* text\n- Add [links](https://example.com)\n- Insert images ![alt text](https://via.placeholder.com/150)\n- Create lists like this one\n\nEnjoy taking notes!`,
      tags: ['welcome', 'tutorial'],
      createdAt: format(new Date(2023, 5, 15), 'yyyy-MM-dd HH:mm:ss'),
      updatedAt: format(new Date(2023, 5, 15), 'yyyy-MM-dd HH:mm:ss'),
      userId
    },
    {
      id: '2',
      title: 'Project Ideas',
      content: `## Future Project Ideas\n\n1. Mobile app for note-taking\n2. Chrome extension for quick notes\n3. API integration with other tools\n\n### Priority\nFocus on the mobile app first, then move to the extension.`,
      tags: ['projects', 'ideas', 'planning'],
      createdAt: format(new Date(2023, 6, 2), 'yyyy-MM-dd HH:mm:ss'),
      updatedAt: format(new Date(2023, 6, 10), 'yyyy-MM-dd HH:mm:ss'),
      userId
    },
    {
      id: '3',
      title: 'Meeting Notes - Team Sync',
      content: `# Team Sync - July 12\n\n## Attendees\n- John D.\n- Sarah M.\n- Michael T.\n\n## Topics Discussed\n- Q3 planning\n- New feature prioritization\n- Customer feedback review\n\n## Action Items\n- [ ] John to finalize roadmap\n- [ ] Sarah to prepare customer survey\n- [ ] Michael to update prototype`,
      tags: ['meeting', 'work', 'team'],
      createdAt: format(new Date(2023, 6, 12), 'yyyy-MM-dd HH:mm:ss'),
      updatedAt: format(new Date(2023, 6, 12), 'yyyy-MM-dd HH:mm:ss'),
      userId
    }
  ];
};

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Get stored notes or use mock data
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
          setNotes(JSON.parse(storedNotes));
        } else {
          const mockNotes = generateMockNotes('1');
          setNotes(mockNotes);
          localStorage.setItem('notes', JSON.stringify(mockNotes));
        }
      } catch (err) {
        setError('Failed to fetch notes');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    if (notes.length > 0 && !isLoading) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes, isLoading]);

  const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>): Promise<Note> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const now = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
      const newNote: Note = {
        ...note,
        id: Math.random().toString(36).substring(2, 9),
        createdAt: now,
        updatedAt: now,
        userId: '1', // Mock user ID
      };
      
      setNotes(prevNotes => [...prevNotes, newNote]);
      return newNote;
    } catch (err) {
      setError('Failed to create note');
      throw new Error('Failed to create note');
    }
  };

  const updateNote = async (id: string, noteUpdate: Partial<Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>>): Promise<Note> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedNotes = notes.map(note => {
        if (note.id === id) {
          return {
            ...note,
            ...noteUpdate,
            updatedAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
          };
        }
        return note;
      });
      
      setNotes(updatedNotes);
      const updatedNote = updatedNotes.find(note => note.id === id);
      
      if (!updatedNote) {
        throw new Error('Note not found');
      }
      
      return updatedNote;
    } catch (err) {
      setError('Failed to update note');
      throw new Error('Failed to update note');
    }
  };

  const deleteNote = async (id: string): Promise<void> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    } catch (err) {
      setError('Failed to delete note');
      throw new Error('Failed to delete note');
    }
  };

  const getNote = (id: string): Note | undefined => {
    return notes.find(note => note.id === id);
  };

  const getNotesByTag = (tag: string): Note[] => {
    return notes.filter(note => note.tags.includes(tag));
  };

  const searchNotes = (query: string): Note[] => {
    const lowercaseQuery = query.toLowerCase();
    return notes.filter(note => 
      note.title.toLowerCase().includes(lowercaseQuery) || 
      note.content.toLowerCase().includes(lowercaseQuery) ||
      note.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  return (
    <NotesContext.Provider value={{
      notes,
      isLoading,
      error,
      createNote,
      updateNote,
      deleteNote,
      getNote,
      getNotesByTag,
      searchNotes
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};