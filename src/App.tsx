import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import OnlyMobileProvider from "./components/Providers/OnlyMobileProvider/OnlyMobileProvider";
import NavbarProvider from "./components/Providers/NavbarProvider/NavbarProvider";
import TapPage from "./pages/TapPage/TapPage";

function App() {
  return (
    <BrowserRouter>
      <OnlyMobileProvider>
        <NavbarProvider>
          <Routes>
            <Route path="/tap" element={<TapPage />} />
            <Route path="*" element={<Navigate to="/tap" replace />} />
          </Routes>
        </NavbarProvider>
      </OnlyMobileProvider>
    </BrowserRouter>
  );
}

export default App;
