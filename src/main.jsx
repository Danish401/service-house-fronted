import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./i18n";
import { GoogleOAuthProvider } from "@react-oauth/google";

// Ensure React is available globally for Material-UI
if (typeof window !== 'undefined') {
  window.React = React;
}

// Get the container element
const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

// Create a root
const root = ReactDOM.createRoot(container);
const clientId = "471401185949-utp31ehr4tu0vldsi7p3i9s6bhotklte.apps.googleusercontent.com"

// Initial render
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
