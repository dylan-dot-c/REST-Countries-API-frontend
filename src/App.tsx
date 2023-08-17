import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";

import CountryDetails from "./components/CountryDetails";
// import
import { HomePage } from "./HomePage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
