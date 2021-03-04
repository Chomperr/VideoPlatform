import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Form from "./pages/form";
import Login from "./pages/login";
import Page404 from "./pages/404";

const MENU_LIST = [
  { id: 'login', title: 'Login', form: Login, link: '/signin' },
  { id: 'videoList', title: 'Lista de Videos', form: Home, link: '/'  },
  { id: 'newVideo', title: 'Novo Video', form: Form, link: '/new'  },
]

function App() {

  return (
    <Router>
      <div className="container">
        <Menu list={MENU_LIST}/>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/new" exact>
            <Form />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;