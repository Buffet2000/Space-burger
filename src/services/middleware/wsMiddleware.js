import { getCookie } from "../cookie";

export const wsMiddleware = (wsUrl, wsActions, auth) => {
  return (store) => {
    let ws = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsStart, onOpen, onClose, onError, getOrders } = wsActions;

      const accessToken = getCookie("accessToken");
      if (type === wsStart && auth === false) {
        ws = new WebSocket(wsUrl);
      } else if (type === wsStart && auth === true && accessToken) {
        const accessToken = getCookie("accessToken");
        ws = new WebSocket(`${wsUrl}?token=${accessToken}`);
      }

      if (ws) {
        ws.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        ws.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        ws.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };

        ws.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
