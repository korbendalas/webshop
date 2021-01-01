import React, { useEffect } from "react";
import "./App.css";
import "./style/main.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { ModelState } from "@oss/redux/models/index";
import { PopupLoginState } from "./redux/models/ui";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginModal } from "./components/modals/loginModal";
import { css, Global } from "@emotion/react";
import Lockr from "lockr";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import { MainMenu } from "@oss/pages";
import CssBaseline from "@material-ui/core/CssBaseline";

const history = createBrowserHistory();

function App() {
  const queryClient = new QueryClient();
  const isOpen = useSelector(({ ui }: ModelState) => ui.showLoginPopup);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch.app.setUser(Lockr.get("shop-user") || null);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Router history={history}>
        <div className="App">
          {/*<LoginModal isOpen={isOpen === PopupLoginState.Login} />*/}
          {/*<TopNav />*/}

          <Switch>
            <Route path="/" component={MainMenu} />
          </Switch>

          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
