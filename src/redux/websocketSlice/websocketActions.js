import { createAction } from "@reduxjs/toolkit";

// Action Creators
export const connectWebSocket = createAction(
  "websocket/connect",
  (url, userId) => {
    return {
      payload: { url, userId },
    };
  }
);

export const disconnectWebSocket = createAction("websocket/disconnect");

export const sendWebSocketMessage = createAction(
  "websocket/send",
  (message) => ({
    payload: message,
  })
);

export const setIsConnected = createAction(
  "websocket/setIsConnected",
  (isConnected) => ({
    payload: isConnected,
  })
);

export const addMessage = createAction("websocket/addMessage", (message) => ({
  payload: message,
}));
