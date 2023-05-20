import App from "./src/App";
const createRoot = window.ReactDOM.createRoot;
const container = document.getElementById("app");
const root = createRoot(container);

root.render(<App />);