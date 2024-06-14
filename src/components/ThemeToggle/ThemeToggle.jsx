import { useEffect } from "react";
import "./ThemeToggle.scss";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/themeSlice/themeSlice";

const ThemeToggle = ({ theme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      if (theme !== savedTheme) dispatch(setTheme(savedTheme));
    } else localStorage.setItem("theme", theme);
  }, []);

  return (
    <div
      onClick={() => {
        dispatch(setTheme(theme === "dark" ? "light" : "dark"));
      }}
      className={`toggleWrapper ${theme === "dark" ? null : "light"}`}
    >
      <div className="toggleContainer">
        <div className="circleWrapper">
          <div className="circle"></div>
        </div>
        <svg
          className="moonSvg"
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="null"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.7607 -0.000854492C7.80342 1.83268 5.03987 5.82649 5.03987 10.4582C5.03987 16.8261 10.2636 21.9883 16.6315 21.9883C19.9098 21.9883 22.8848 20.6201 25 18.4237C22.9146 22.8957 18.353 25.9989 13.1036 25.9989C5.90513 25.9989 0 20.1634 0 12.9649C0 6.21956 5.18507 0.670981 11.7607 -0.000854492Z"
            fill="null"
          />
        </svg>
        <svg
          className="sunSvg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="null"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.59273 5.68082L5.22 3.3105L3.36136 5.17763L5.72091 7.54794L7.59273 5.68082ZM3.95455 13.1758H0V15.8242H3.95455V13.1758ZM15.8182 0H13.1818V3.90639H15.8182V0ZM25.6386 5.17763L23.78 3.3105L21.4205 5.68082L23.2791 7.54794L25.6386 5.17763ZM21.4073 23.3192L23.7668 25.7027L25.6255 23.8356L23.2527 21.4653L21.4073 23.3192ZM25.0455 13.1758V15.8242H29V13.1758H25.0455ZM14.5 6.55479C10.1368 6.55479 6.59091 10.1169 6.59091 14.5C6.59091 18.8831 10.1368 22.4452 14.5 22.4452C18.8632 22.4452 22.4091 18.8831 22.4091 14.5C22.4091 10.1169 18.8632 6.55479 14.5 6.55479ZM13.1818 29H15.8182V25.0936H13.1818V29ZM3.36136 23.8224L5.22 25.6895L7.57955 23.3059L5.72091 21.4388L3.36136 23.8224Z"
            fill="null"
          />
        </svg>
      </div>
    </div>
  );
};

export default ThemeToggle;
