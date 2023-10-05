
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';


function App() {
  return (
    <div className='myBox'>
         <h1>APP</h1>
         <Counter></Counter>
         <Todolist></Todolist>
    </div>
  );
}

export default App;
