import "./App.css";

import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import {BatchProvider} from "./Context/BatchContext";

function App() {
  return (
    <BrowserRouter>
    <BatchProvider>
      <AppRoutes />
      </BatchProvider>
    </BrowserRouter>
  );
}

export default App;
