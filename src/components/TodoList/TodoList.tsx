import { useSelector } from 'react-redux';
import { AppRootState } from '../../redux/store';
import { Todo } from '../../assets/types/types';
import { TodoItem } from '../Todo/TodoItem';
import { Input } from '../Input/Input';

type TodoList = {};
export const TodoList = () => {
  const todoList = useSelector<AppRootState, Todo[]>((state) => state.todolist);
  const list = todoList.map((todo) => {
    return <TodoItem key={todo.id} title={todo.title} status={todo.status} />;
  });
  return (
    <div className="container sm flex flex-col justify-center items-center">
      <h2>Todo List</h2>
      <Input />
      {list}
    </div>
  );
};
