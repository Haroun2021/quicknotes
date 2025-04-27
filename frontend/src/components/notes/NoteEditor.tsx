import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Save, Eye, Edit3, X, Plus } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface NoteEditorProps {
  initialTitle?: string;
  initialContent?: string;
  initialTags?: string[];
  onSave: (title: string, content: string, tags: string[]) => void;
  isLoading?: boolean;
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  initialTitle = '',
  initialContent = '',
  initialTags = [],
  onSave,
  isLoading = false
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState('');
  const [isPreview, setIsPreview] = useState(false);
  
  useEffect(() => {
    
    setTitle(prev => (prev !== initialTitle ? initialTitle : prev));
    setContent(prev => (prev !== initialContent ? initialContent : prev));
    setTags(prev => (JSON.stringify(prev) !== JSON.stringify(initialTags) ? initialTags : prev));
    
  }, []);
  

  const handleSave = () => {
    if (!title.trim()) {
      alert('Please enter a title for your note');
      return;
    }
    onSave(title, content, tags);
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="text-xl font-semibold"
          fullWidth
        />

        <div className="mt-4">
          <label className="form-label">Tags</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">#{tag}</span>
                <button
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-gray-500 hover:text-error-500 dark:text-gray-400"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            
            <div className="flex items-center">
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add tag..."
                className="form-input text-sm py-1 px-3"
              />
              <button
                onClick={handleAddTag}
                className="ml-2 p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <label className="form-label">Content</label>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsPreview(false)}
                className={`p-1.5 rounded ${!isPreview ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' : 'text-gray-600 dark:text-gray-400'}`}
                title="Edit"
              >
                <Edit3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsPreview(true)}
                className={`p-1.5 rounded ${isPreview ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300' : 'text-gray-600 dark:text-gray-400'}`}
                title="Preview"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
            {isPreview ? (
              <div className="markdown-preview p-4 h-80 overflow-y-auto bg-white dark:bg-gray-800">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content || 'Nothing to preview'}
                </ReactMarkdown>
              </div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your note in Markdown..."
                className="w-full h-80 p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none font-mono text-sm"
              />
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            variant="primary"
            onClick={handleSave}
            isLoading={isLoading}
            leftIcon={<Save className="h-4 w-4" />}
          >
            Save Note
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;