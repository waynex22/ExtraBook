import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Layout';
import { privateRoutes } from './Routes';
import { AdminLayout } from './Layout';
import { AuthContext } from './Contexts/authContext';
const App = () => {
  const { user } = useContext(AuthContext)
  const hasRole = (role) => {
    if (!user) {
      return <p>Check role</p>
    } else {
      const userRole = user.data.role;
      return userRole === role;
    }
  };

  const PrivateRoute = ({ element, role }) => {
    return hasRole(role) ? element : <Navigate to="/" />;
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout
            const Page = route.component
            return <Route
              key={index}
              path={route.path}
              element=
              {<Layout>
                <Page />
              </Layout>}
            />
          })}
          {privateRoutes.map((route, index) => {
            const Layout = AdminLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={<PrivateRoute element={<Layout><Page /></Layout>} role={route.role} />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>

  );
}
export default App;
