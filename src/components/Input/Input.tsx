// @flow

import { KeyboardEvent, ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoListActions } from '../../redux/slices/todolist-slice';

type Input = {};
export const Input = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const setInputValueHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      dispatch(todoListActions.addTodo({ title: inputValue.trim() }));
      setInputValue('');
    }
  };
  return (
    <div className="input-container">
      <input
        className="input rounded-md border-2 border-blue-950 m-1 p-2 w-80"
        placeholder="Add new todo..."
        type="text"
        onChange={inputValueHandler}
        onKeyDown={setInputValueHandler}
        value={inputValue}
      />
    </div>
  );
};
