import App from "./App.js";
import { TitleProvider } from "./TitleContext";
const createRoot = window.ReactDOM.createRoot;
const container = document.getElementById("app");
const root = createRoot(container);

root.render(
    <TitleProvider>
        <App />
    </TitleProvider>
);