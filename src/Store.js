import { createStore } from 'redux';
import { Reducer } from './reducers/user';
import React from 'react';

export const Store = createStore(Reducer, {
    user: {
        id: 1,
        name: 'Rania',
        email: 'raniagml12@gmail.com',
        photo: 'https://cdn3.vectorstock.com/i/1000x1000/27/92/cartoon-bookworm-vector-5102792.jpg',
        // type: 'user'
        type: 'admin'
    }
})

export const myContext = React.createContext();