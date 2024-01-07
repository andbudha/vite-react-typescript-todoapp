import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState, Todo } from '../../assets/types/types';

const initialState: InitialState = [
  { id: Math.random(), title: 'Learn JS', status: true },
  { id: Math.random(), title: 'Learn React', status: false },
  { id: Math.random(), title: 'Learn Redux', status: true },
];
export const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ newTodo: Todo }>) => {
      state.unshift(action.payload.newTodo);
    },
    removeTodo: (state, action: PayloadAction<{ todoId: number }>) => {
      state.filter((todo) => todo.id !== action.payload.todoId);
    },
    changeTodoStatus: (
      state,
      action: PayloadAction<{ id: number; status: boolean }>
    ) => {
      state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    },
  },
});

export const todolist = slice.reducer;
