
import React, { createContext, useReducer } from 'react';

const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, { id: Date.now(), title: action.payload.title, content: action.payload.content }];
    case 'EDIT_NOTE':
      return state.map(note => note.id === action.payload.id ? action.payload : note);
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload.id);
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;