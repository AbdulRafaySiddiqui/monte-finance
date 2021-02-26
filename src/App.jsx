import './App.css';
import {Route, Switch } from "react-router"
import Stake from './Pages/Stake/Stake';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"   component = {Home}/>
        <Route path="/stake"   component = {Stake}/>
      </Switch>
    
    </div>
  );
}

export default App;
