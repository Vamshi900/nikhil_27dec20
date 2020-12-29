import { configureStore } from '@reduxjs/toolkit';
import tableReducer from '../reducers/tableSlice';

export default configureStore({
    reducer: {
        tableData: tableReducer,
    },
});