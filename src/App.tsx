import './App.css';
import { TodoList } from './components/TodoList/TodoList';

function App() {
  return (
    <div className={'main-container flex justify-center items-center'}>
      <div className={'app-box container border border-blue-950 '}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
