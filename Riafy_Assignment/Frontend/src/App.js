import React from 'react';
import Login from './Login';
import UserHome from './UserHome';
import './App.css';
import{
  BrowserRouter,
  Switch,
  Route,
}
from 'react-router-dom';



class App extends React.Component {
  render(){
  return (
   <div className="App">
      <div class="container-fluid homepage-bgimage">
    <BrowserRouter>
      <div>
          
      </div>
      <div>
        <Switch>
          <Route path="/" exact={true}>
              <Login />
          </Route>
          
          <Route path="/home" >
              <UserHome />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
   </div></div>
  );
}
}
export default App;
