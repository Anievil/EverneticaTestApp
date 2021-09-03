import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CountryPage from './Pages/CountryPage/CountryPage';
import Main from './Pages/Main/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/country/:name' component={CountryPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
