import React, { useEffect } from "react";
import "./App.css";
import "./style/main.scss";
import { TopNav } from "./components/navigation/TopNav";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { ModelState } from "@app/redux/models/index";
import { PopupLoginState } from "./redux/models/ui";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginModal } from "./components/modals/loginModal";
import { css, Global } from "@emotion/react";
import Lockr from "lockr";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router";
import { MyAccount, Homepage } from "./pages";

const history = createBrowserHistory();

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
  *,
  *:focus,
  *:hover {
    outline: none !important;
  }
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

function App() {
  const queryClient = new QueryClient();
  const isOpen = useSelector(({ ui }: ModelState) => ui.showLoginPopup);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch.app.setUser(Lockr.get("shop-user") || null);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyles} />
      <Router history={history}>
        <div className="App">
          <LoginModal isOpen={isOpen === PopupLoginState.Login} />
          <TopNav />

          <Switch>
            <Route path="/me" component={MyAccount} />
            <Route path="/" component={Homepage} />
          </Switch>

          <ReactQueryDevtools initialIsOpen={false} />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
