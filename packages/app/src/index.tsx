import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { initializeStore } from "./redux/store";

const Chakra = () => {
  const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        yellow: "#fed700",
      },
    },
  };

  return (
    <Provider store={initializeStore()}>
      <ChakraProvider theme={customTheme}>
        <CSSReset />
        <App />
      </ChakraProvider>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Chakra />
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
