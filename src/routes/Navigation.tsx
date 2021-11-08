import { Suspense } from 'react';
import {
  BrowserRouter as Router, Navigate, NavLink, Route, Routes
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';



export const Navigation = () => {
  return (
    <Suspense fallback={ null }>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({ name, path }) => (
                  <li key={ path }>
                    <NavLink 
                      end 
                      to={ path }
                      style={({ isActive }) => ({ color: isActive ? "grey" : "white" })}
                    >
                      { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map(({ path, component:Component }) => (
                <Route 
                  key={ path }
                  path={ path } 
                  element={ <Component /> } />
              ))
            }
            <Route path='*' element={<Navigate replace to={routes[0].path} />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}
