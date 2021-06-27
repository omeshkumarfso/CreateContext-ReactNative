import React, { createContext, useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NotesReducer, initialState } from '../reducer/NotesReducer';

export const NotesContext = createContext();



export const NotesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(NotesReducer, initialState)
    return (
        <NotesContext.Provider value={{ state: state, dispatch: dispatch }}>
            {children}
        </NotesContext.Provider>
    );
}