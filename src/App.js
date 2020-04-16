import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
//import Useritem from './components/users/Useritem';
import Home from './components/pages/Home';
import Not_found from './components/pages/Not_found';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import Githubstate from './context/github/Githubstate';
import Alertstate from './context/alert/Alertstate';
import './App.css';

const App =()=>{
 return (
   <Githubstate>
     <Alertstate>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path ='/'component={Home}/>

              <Route exact path='/about' component={About} />

              <Route
                exact
                path='/user/:login'
                component={User}
                
               ></Route>
               <Route component={Not_found}/>
            </Switch>
          </div>
        </div>
       </Router>
     </Alertstate>
    </Githubstate>
  );
    
  }
  


export default App;
