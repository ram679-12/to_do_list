import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { INITIAL_TODOS } from '../utils/constants';

const TodoContext = createContext(null);
const STORAGE_KEY = 'taskdash_todos';

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_TODOS;
    } catch {
      return INITIAL_TODOS;
    }
  });

  const [activeNav, setActiveNav] = useState('dashboard');

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); }
    catch (e) { console.error(e); }
  }, [todos]);

  const addTodo = (text, category = 'Work') => {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    setTodos(prev => [{
      id: Date.now(), text: text.trim(), time: now,
      completed: false, flagged: false, category, progress: 0,
    }, ...prev]);
  };

  const toggleComplete = (id) => setTodos(prev =>
    prev.map(t => t.id === id ? { ...t, completed: !t.completed, progress: !t.completed ? 100 : t.progress } : t)
  );

  const toggleFlag   = (id) => setTodos(prev => prev.map(t => t.id === id ? { ...t, flagged: !t.flagged } : t));
  const deleteTodo   = (id) => setTodos(prev => prev.filter(t => t.id !== id));

  const stats = useMemo(() => {
    const total     = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const active    = todos.filter(t => !t.completed).length;
    const flagged   = todos.filter(t => t.flagged).length;
    const inProgress= todos.filter(t => !t.completed && t.progress > 0).length;
    const pct       = total ? Math.round((completed / total) * 100) : 0;
    return { total, completed, active, flagged, inProgress, pct };
  }, [todos]);

  const visibleTodos = useMemo(() => {
    if (activeNav === 'active')    return todos.filter(t => !t.completed);
    if (activeNav === 'progress')  return todos.filter(t => !t.completed && t.progress > 0);
    if (activeNav === 'completed') return todos.filter(t => t.completed);
    if (activeNav === 'flagged')   return todos.filter(t => t.flagged);
    return todos; // dashboard — show all
  }, [todos, activeNav]);

  return (
    <TodoContext.Provider value={{
      todos, visibleTodos, stats, activeNav, setActiveNav,
      addTodo, toggleComplete, toggleFlag, deleteTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodos must be inside TodoProvider');
  return ctx;
};
