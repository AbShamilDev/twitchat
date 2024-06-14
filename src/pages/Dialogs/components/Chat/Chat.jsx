import MessagesHeader from "../MessagesHeader/MessagesHeader";
import s from "../../Dialogs.module.css";
import MessageInput from "../MessageInput/MessageInput";
import { useEffect, useState } from "react";
import Message from "../Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDialogId } from "../../../../redux/dialogSlice/dialogSlice";

let oldMessageId;
let loaded = false;
const Months = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

const debounce = (fn, ms) => {
  let TimeOut;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(TimeOut);
    TimeOut = setTimeout(fnCall, ms);
  };
};

const Chat = ({ theme }) => {
  const [message, setMessage] = useState([]);
  const { activeDialogId, messages } = useSelector(
    (state) => state.dialogSlice
  );
  const receiverUser = useSelector((state) => state.dataSlice.usersList).find(
    (user) => user.id === activeDialogId
  );
  const selfId = useSelector((state) => state.dataSlice.id);
  const socket = useSelector((state) => state.socket);

  const dispatch = useDispatch();

  const CleanDateSpans = (element) => {
    if (!element) return;
    element.classList.remove(s.Hide);
    element.classList.remove(s.Show);
  };

  const scrollToBottom = () =>
    document.getElementById(`message-${oldMessageId}`).scrollIntoView();

  // проверка на новый чат

  const hideDate = debounce((element) => {
    if (element) {
      element.classList.remove(s.Show);
      element.classList.add(s.Hide);
    }
  }, 1000);

  const onScrollChat = (event) => {
    const messages = document.getElementsByClassName(s.messages)[0].children;
    const offset = messages[0].offsetTop;
    let visElement;
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].children[0].classList[1] !== s.Show)
        messages[i].children[0].classList.add(s.Show);
      if (event.target.scrollTop > messages[i].offsetTop - offset + 35)
        visElement = messages[i].children[0];
    }

    visElement && visElement.classList.remove(s.Hide);
    hideDate(visElement);
  };

  const sendMessage = async (message) => {
    await socket.send(JSON.stringify({ message: message }));
  };

  return activeDialogId ? (
    <div className={s.chat}>
      <MessagesHeader
        cancelChat={() => dispatch(setActiveDialogId(0))}
        name={receiverUser.fullName}
      />
      <div className={s.messagesWrapper} onScroll={onScrollChat}>
        {messages.length ? (
          <div className={s.messages}>
            {messages.map((message) => (
              <Message />
            ))}
          </div>
        ) : (
          <h1>Нет сообщений</h1>
        )}
      </div>
      <MessageInput
        theme={theme}
        sendMessage={(message) => sendMessage(message)}
      />
    </div>
  ) : null;
};

export default Chat;
