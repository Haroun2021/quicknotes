import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  PlusCircle, 
  Tag, 
  Bookmark, 
  Clock, 
  Trash, 
  Settings, 
  HelpCircle, 
  ChevronRight, 
  ChevronDown 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;  
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [expandedSections, setExpandedSections] = React.useState({
    tags: true,
    quickAccess: false
  });
  
  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Mock tags for demonstration
  const tags = [
    { id: '1', name: 'work' },
    { id: '2', name: 'personal' },
    { id: '3', name: 'ideas' },
    { id: '4', name: 'todo' },
    { id: '5', name: 'meeting' },
  ];
  
  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 
        transition-transform duration-300 ease-in-out pt-16
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
    >
      <div className="h-full overflow-y-auto py-4 px-4">
        <div className="space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) => `
              flex items-center px-3 py-2 rounded-lg text-sm font-medium
              ${isActive 
                ? 'bg-primary-50 text-primary-700 dark:bg-gray-700 dark:text-primary-400' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
            `}
          >
            <Home className="h-4 w-4 mr-3" />
            Dashboard
          </NavLink>
          
          <NavLink
            to="/notes/new"
            className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30"
          >
            <PlusCircle className="h-4 w-4 mr-3" />
            New Note
          </NavLink>
        </div>
        
        <div className="mt-6">
          <button
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-white"
            onClick={() => toggleSection('tags')}
          >
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-3" />
              Tags
            </div>
            {expandedSections.tags ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          
          {expandedSections.tags && (
            <div className="ml-4 mt-1 space-y-1">
              {tags.map(tag => (
                <NavLink
                  key={tag.id}
                  to={`/tags/${tag.name}`}
                  className={({ isActive }) => `
                    flex items-center px-3 py-1.5 rounded-lg text-sm
                    ${isActive 
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
                  `}
                >
                  <span className="w-2 h-2 mr-3 rounded-full bg-primary-500"></span>
                  {tag.name}
                </NavLink>
              ))}
              <button className="flex items-center px-3 py-1.5 rounded-lg text-sm text-primary-600 hover:bg-gray-100 dark:text-primary-400 dark:hover:bg-gray-700 w-full text-left">
                <PlusCircle className="h-3 w-3 mr-3" />
                Add new tag
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-2">
          <button
            className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-white"
            onClick={() => toggleSection('quickAccess')}
          >
            <div className="flex items-center">
              <Bookmark className="h-4 w-4 mr-3" />
              Quick Access
            </div>
            {expandedSections.quickAccess ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          
          {expandedSections.quickAccess && (
            <div className="ml-4 mt-1 space-y-1">
              <NavLink
                to="/recent"
                className={({ isActive }) => `
                  flex items-center px-3 py-1.5 rounded-lg text-sm
                  ${isActive 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
                `}
              >
                <Clock className="h-3 w-3 mr-3" />
                Recent
              </NavLink>
              <NavLink
                to="/trash"
                className={({ isActive }) => `
                  flex items-center px-3 py-1.5 rounded-lg text-sm
                  ${isActive 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
                `}
              >
                <Trash className="h-3 w-3 mr-3" />
                Trash
              </NavLink>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 space-y-1">
          <NavLink
            to="/settings"
            className={({ isActive }) => `
              flex items-center px-3 py-2 rounded-lg text-sm font-medium
              ${isActive 
                ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
            `}
          >
            <Settings className="h-4 w-4 mr-3" />
            Settings
          </NavLink>
          <NavLink
            to="/help"
            className={({ isActive }) => `
              flex items-center px-3 py-2 rounded-lg text-sm font-medium
              ${isActive 
                ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white' 
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
            `}
          >
            <HelpCircle className="h-4 w-4 mr-3" />
            Help & Support
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;