import { addMessage } from "../dataSlice/dataSlice";
import { setIsConnected, addSocketMessage } from "./websocketActions";

const websocketMiddleware = (store) => {
  let socket = null;

  return (next) => (action) => {
    switch (action.type) {
      case "websocket/connect":
        if (socket !== null) {
          socket.close();
        }
        socket = new WebSocket(
          `${action.payload.url}?userId=${action.payload.userId}`
        );
        console.log(`${action.payload.url}?userId=${action.payload.userId}`);

        socket.onopen = () => {
          store.dispatch(setIsConnected(true));
        };

        socket.onclose = () => {
          store.dispatch(setIsConnected(false));
        };

        socket.onmessage = (event) => {
          store.dispatch(addSocketMessage(event.data));
          const data = JSON.parse(event.data);
          switch (data.type) {
            case "get_message":
              store.dispatch(addMessage(data.message));
              break;

            default:
              break;
          }
        };

        break;
      case "websocket/disconnect":
        if (socket !== null) {
          socket.close();
          socket = null;
          store.dispatch(setIsConnected(false));
        }
        break;
      case "websocket/send":
        if (socket !== null) {
          socket.send(action.payload);
        }
        break;
      default:
        break;
    }

    return next(action);
  };
};

export default websocketMiddleware;
