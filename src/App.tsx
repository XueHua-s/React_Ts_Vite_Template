import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/login/login'
import MainLayout from './layout/MainLayout'
import RouterBeforeEach from "./components/RouterBeforeEach";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}>
        </Route>
        <Route exact path="/">
          {/*路由拦截器*/}
          <RouterBeforeEach
          redireUrl={'/login'}
          verify={true}
          >
            <MainLayout>
              <Route exact path="/" component={Home}>
              </Route>
            </MainLayout>
          </RouterBeforeEach>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
