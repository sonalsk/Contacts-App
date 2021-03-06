import NavBar from "./Components/navbar";
import Home from "./Components/home";
import AllContacts from "./Components/allcontacts";
import NewContact from "./Components/addcontacts";
import NotFound from "./Components/notfound";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditUser from "./Components/editcontact";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllContacts} />
        <Route exact path="/add" component={NewContact} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
