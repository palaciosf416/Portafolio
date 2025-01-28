import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";
import LanguageContextProvider from "./context/language-context";

function App() {
  return (
    <HashRouter>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <ActiveSectionContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ActiveSectionContextProvider>
        </LanguageContextProvider>
      </ThemeContextProvider>
    </HashRouter>
  );
}

export default App;