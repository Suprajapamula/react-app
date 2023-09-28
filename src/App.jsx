import Counter from './Counter';
import './App.css';
import Todolist from './Todolist';
import Countries from './Countries';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className='myBox'>
         <h1>ReactJS application by Suprajapamula</h1>
         <p>Hello edupoly</p>
         <Link to="/counter">Counter</Link>&nbsp;
         <Link to="/todolist">Todolist</Link>&nbsp;
         <Link to="/countries">Countries</Link>&nbsp;
         
         <Outlet></Outlet>
    </div>
  );
}

export default App;