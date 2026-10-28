import { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_TODOS } from '../utils/constants';

const TodoContext = createContext(null);

const STORAGE_KEY = 'mytasks_todos';

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : INITIAL_TODOS;
    } catch {
      return INITIAL_TODOS;
    }
  });

  const [filter, setFilter] = useState('All');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error(e);
    }
  }, [todos]);

  const addTodo = (text, time) => {
    if (!text.trim()) return;
    setTodos(prev => [
      ...prev,
      {
        id: Date.now(),
        text: text.trim(),
        time: time || '',
        completed: false,
        flagged: false,
        status: 'To Do',
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id
          ? { ...t, completed: !t.completed, status: !t.completed ? 'Done' : 'To Do' }
          : t
      )
    );
  };

  const toggleFlag = (id) => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, flagged: !t.flagged } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'All') return true;
    if (filter === 'Done') return t.completed;
    return t.status === filter && !t.completed;
  });

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        toggleComplete,
        toggleFlag,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error('useTodos must be used within TodoProvider');
  return ctx;
};
