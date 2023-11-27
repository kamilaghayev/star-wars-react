import {BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import routesConfig from '@routes/routesConfig';
import Header from '@components/Header';
const App = () => {
    return (
      <>
      <BrowserRouter>
        <Header/>

        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact={route.exact}
            />
          ))}
        </Routes>
      </BrowserRouter>
      </>
    );
}

export default App;
