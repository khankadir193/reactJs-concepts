import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './Reducer/counterSlice';

const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
});

export default store;