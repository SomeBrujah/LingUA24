import {createRoot} from "react-dom/client";
const container = document.querySelector('#root');
const root = createRoot(container as Element);

import App from './App';

root.render(<App />)