import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import { useSelector } from "react-redux";

const UserInterface = () => {
  const currentTheme = useSelector((state) => state.themeSlice.theme);

  return (
    <>
      <ThemeToggle theme={currentTheme} />
      <div className={`appWrapper ${currentTheme === "dark" ? null : "light"}`}>
        <Header />
        <Navbar theme={currentTheme} />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/dialogs/*"
              element={<Dialogs theme={currentTheme} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default UserInterface;
