import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import { Todo } from '../../assets/types/types';
import { TodoItem } from '../Todo/TodoItem';
import { Input } from '../Input/Input';
import { useEffect, useState } from 'react';
import { getLocalStorageItems } from '../../assets/localStorageItems/getLocalStorageItems';

type TodoList = {};
export const TodoList = () => {
  const [isMounted, setIsMounted] = useState(false);
  const todoList = useSelector<AppRootState, Todo[]>((state) => state.todolist);
  console.log(getLocalStorageItems());

  useEffect(() => {
    console.log('rendered');
    if (isMounted) {
      localStorage.setItem('todolist', JSON.stringify(todoList));
    }
    setIsMounted(true);
  }, [todoList]);
  const list = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        title={todo.title}
        status={todo.status}
        id={todo.id}
      />
    );
  });
  return (
    <div className="container sm flex flex-col justify-center items-center">
      <h1 className="text-lg font-bold	tracking-wide my-1 text-neutral-100">
        Todo List
      </h1>
      <Input />
      {list}
    </div>
  );
};
