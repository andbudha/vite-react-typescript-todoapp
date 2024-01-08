import { MdDeleteOutline } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import styles from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import { todoListActions } from '../../redux/slices/todolist-slice';

type TodoItem = {
  title: string;
  status: boolean;
  id: number;
};
export const TodoItem = ({ title, status, id }: TodoItem) => {
  const dispatch = useDispatch();

  const deleteTodoHandler = (id: number) => {
    dispatch(todoListActions.removeTodo({ todoId: id }));
    console.log('removed', id);
  };

  const customCheckBoxHandler = () => {
    dispatch(
      todoListActions.changeTodoStatus({
        id: id,
        status: status,
      })
    );
  };
  return (
    <div
      className={
        'bg-[#f87171] rounded-md border-2 border-blue-950 m-1 p-2 w-80 flex justify-between'
      }
    >
      <div className="flex justify-center items-center">
        <div className={styles.custom_checkbox} onClick={customCheckBoxHandler}>
          {status && <FaCheck className={styles.check_icon} />}
        </div>
        <h3 className={`${status && styles.title_blurred}`}>{title}</h3>
      </div>
      <div className="delete-icon flex justify-center items-center">
        <MdDeleteOutline
          className={`${styles.delte_icon}`}
          onClick={() => deleteTodoHandler(id)}
        />
      </div>
    </div>
  );
};
