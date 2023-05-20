import App from "./App.js";
const createRoot = window.ReactDOM.createRoot;
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);