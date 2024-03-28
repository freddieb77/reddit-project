import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import searchReducer from './searchReducer';

const store = configureStore({ 
    reducer: rootReducer,
    search: searchReducer,
});

export default store;

