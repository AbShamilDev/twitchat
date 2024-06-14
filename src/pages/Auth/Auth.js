import { useEffect, useRef, useState } from "react";
import s from "./Auth.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../redux/userSlice/userSlice";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("logged_in"));
  const formRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    formRef.current.reset();
  }, [isLogin]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const successAuth = (data) => {
      localStorage.setItem("logged_in", true);
      localStorage.setItem("token", data.token);
      dispatch(setUserInfo(data.data));
      navigate("/main");
    };

    if (isLogin) {
      await axios({
        method: "post",
        url: "https://b17d444024b5fb33.mokky.dev/auth",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      })
        .then((res) => {
          successAuth(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      await axios({
        method: "post",
        url: "https://b17d444024b5fb33.mokky.dev/register",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({
          fullName: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      })
        .then((res) => successAuth(res.data))
        .catch((err) => console.error(err));
    }
  };

  const makeButton = (bool) => {
    return (
      <button
        type={isLogin !== bool ? "submit" : "button"}
        onClick={
          isLogin !== bool
            ? () => {}
            : () => {
                setIsLogin(!isLogin);
              }
        }
      >
        {bool ? "Зарегистрироваться" : "Войти"}
      </button>
    );
  };

  return (
    <div className={`${s.container} ${s.flexCol}`}>
      <div className={`${s.formWrapper} ${s.flexCol}`}>
        <h1 className={s.title}>{isLogin ? "Вход" : "Регистрация"}</h1>
        <form
          ref={formRef}
          className={`${s.form} ${s.flexCol}`}
          onSubmit={onSubmit}
        >
          {!isLogin && (
            <>
              <label htmlFor="fio">ФИО</label>
              <input type="text" name="name" />
            </>
          )}

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="password">Пароль</label>
          <input type="password" name="password" />

          <div className={`${s.buttonsContainer} ${s.flexCol}`}>
            {makeButton(!isLogin)}
            {makeButton(isLogin)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
