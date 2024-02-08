import React from "react";
import "./componentsCss/App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeContext, themes } from "./contexts/ThemeContext";

function App(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <BrowserRouter>
          <ThemeToggle
            onChange={() => {
              if (theme === "dark") setTheme(themes.light);
              else setTheme(themes.dark);
            }}
            theme={theme}
          />
          <div className="app-wrapper">
            <Header theme={theme} />
            <Navbar theme={theme} />
            <div className="content">
              <Routes>
                <Route
                  path="/profile"
                  element={<Profile state={props.state.profilePage} />}
                />
                <Route
                  path="/dialogs/*"
                  element={
                    <Dialogs theme={theme} state={props.state.dialogsPage} />
                  }
                />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
