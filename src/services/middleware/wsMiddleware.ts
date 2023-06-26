import { getCookie } from "../cookie";
import { Middleware } from "redux";
import { RootState } from "../types";

type wsActions = {
  wsStart: string,
  onOpen: string,
  onClose: string,
  onError: string,
  getOrders: string,
};

export const wsMiddleware = (wsUrl: string, wsActions: wsActions, auth: boolean): Middleware<{}, RootState> => {
  return (store) => {
    let ws: WebSocket | null = null;

    return next => action => {
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
        ws.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        ws.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        ws.onmessage = (event: MessageEvent<any>) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: getOrders, payload: restParsedData });
        };

        ws.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
