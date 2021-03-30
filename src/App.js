import { Provider as MobxProvider } from 'mobx-react';
import stores from "./stores";
import {Router, Route, Switch} from 'react-router-dom';
import routes from "./app/routes";
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import {Header} from "./components/Header";
import createBrowserHistory from 'history/createBrowserHistory';
import UserProvider from "./app/UserProvider";


const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

function App() {

  return (
      <MobxProvider stores = {stores}>
          <UserProvider>
              <Router history={history}>
                  <Header />
                  <Switch>
                      {routes.map((router) => (
                          <Route
                              path={router.path}
                              component={router.component}
                              exact={router.exact}
                              key={router.path}
                          />
                      ))}
                  </Switch>
              </Router>
          </UserProvider>
      </MobxProvider>
  );
}

export default App;
