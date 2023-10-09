
import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div className='myBox'>
         <Link to="/countries">Countries</Link>&nbsp;&nbsp;
         <Link to="/products">Products</Link>&nbsp;&nbsp;
         <Outlet></Outlet>
    </div>
  );
}

export default App;
