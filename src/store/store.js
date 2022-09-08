
import { compose,configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

import { rootReducer } from './root.reducer';

export const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})