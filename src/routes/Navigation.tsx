import {
  BrowserRouter as Router, NavLink, Route, Routes
} from 'react-router-dom';
import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from '../03-forms/pages';
import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" end>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" end>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" end>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" end>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" end>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" end>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" end>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/formik-basic" element={ <FormikBasicPage /> } />
          <Route path="/formik-yup" element={ <FormikYupPage /> } />
          <Route path="/formik-components" element={ <FormikComponents /> } />
          <Route path="/formik-abstraction" element={ <FormikAbstraction /> } />
          <Route path="/formik-register" element={ <RegisterFormikPage /> } />
          <Route path="/dynamic-form" element={ <DynamicForm /> } />
          <Route path="/" element={ <h1>Home</h1> } />
        </Routes>
      </div>
    </Router>
  );
}
