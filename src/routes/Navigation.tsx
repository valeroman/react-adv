import {
  BrowserRouter as Router, NavLink, Route, Routes
} from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" end style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" end style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" end style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={ <h1>About</h1> } />
          <Route path="/users" element={ <h1>Users</h1> } />
          <Route path="/" element={ <ShoppingPage /> } />
        </Routes>
      </div>
    </Router>
  );
}
