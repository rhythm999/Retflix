import LoginPage from "./Components/loginPage"
import Login from "./Components/login"
import HomePage from "./Components/homePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AuthProvider from "./AuthProvider";
import Avatar from "./Components/Avatar"

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
          <Route path="/avatar">
              <Avatar />
            </Route>
            <Route path="/homePage">
              <HomePage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
