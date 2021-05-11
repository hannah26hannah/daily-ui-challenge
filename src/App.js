
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from "./views/Main";
import Code from './views/Code';

function App() {
  return (
    <Router basename='/daily-ui-challenge'>
      <Switch>
        <Route path='/code'>
          <Code />
        </Route>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
