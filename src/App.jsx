import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './Components/Counter';
import Todolist from './Components/Todolist';

function App() {
  return (
    <Provider store={store}>
          <div className='mybox'>
              <h1>Application</h1>
              <Todolist></Todolist>
              <Counter></Counter>
          </div>
    </Provider>
  );
}

export default App;
