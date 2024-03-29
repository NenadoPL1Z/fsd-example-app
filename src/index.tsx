import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import ThemeProvider from "./styles/themes/context/ThemeProvider";


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);