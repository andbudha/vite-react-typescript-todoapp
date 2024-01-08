import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState, Todo } from '../../assets/types/types';
import { getLocalStorageItems } from '../../assets/localStorageItems/getLocalStorageItems';

const initialState: InitialState = getLocalStorageItems();
export const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: Todo = {
        id: Math.random(),
        title: action.payload.title,
        status: false,
      };
      state.unshift(newTodo);
    },
    removeTodo: (state, action: PayloadAction<{ todoId: number }>) => {
      return state.filter((todo) => todo.id !== action.payload.todoId);
    },
    changeTodoStatus: (
      state,
      action: PayloadAction<{ id: number; status: boolean }>
    ) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: !action.payload.status }
          : todo
      );
    },
  },
});

export const todolist = slice.reducer;
export const todoListActions = slice.actions;
