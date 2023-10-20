import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import { HomePage } from "./HomePage";

// creating a client to be used
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <HashRouter>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<CountryDetails />} />
        </Routes>
      </HashRouter>
      {/* devtools to help in development */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
