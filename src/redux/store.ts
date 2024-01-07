import { configureStore } from '@reduxjs/toolkit';
import { todolist } from './slices/todolist-slice';

export const store = configureStore({
  reducer: {
    todolist,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
