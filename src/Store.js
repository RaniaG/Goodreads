import { createStore } from 'redux';
import { Reducer } from './reducers/user';
import React from 'react';

export const Store = createStore(Reducer, {
    user: {
        id: 1,
        name: 'Rania',
        email: 'raniagml12@gmail.com',
        photo: '',
        type: 'user'
        // type: 'admin'
    }
})

export const myContext = React.createContext();