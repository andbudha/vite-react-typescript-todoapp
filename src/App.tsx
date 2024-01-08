import './App.css';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className={'main-container flex justify-center items-start'}>
      <div className={'app-box p-2 rounded-md mt-20'}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
