import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
