// import SignIn from "./pages/SignIn/SignIn.jsx";
// import FormReset from "./pages/FormReset/FormReset.jsx";

import { SignIn } from 'react-router-dom';
import { FormReset } from 'react-router-dom';
import { 
  BrowserRouter as Router, Switch, Route
 } from 'react-router-dom';

import styles from "./style/App.module.css";

function App() {

  return (
    <Router>
      <div className={styles.app}>

        <Switch>
          <Route path="signin">
            <SignIn />
          </Route>
          <Route path="reset">
            <FormReset />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
