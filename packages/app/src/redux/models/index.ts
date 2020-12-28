import { app, AppState } from "./app";
// import { streams, StreamsState } from "./streams";
// import { chat, ChatState } from "@app/redux/models/chat";
import { ui, UiState } from "./ui";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export interface ModelState {
  app: AppState;
  // streams: StreamsState;
  ui: UiState;
  // chat: ChatState;
}

export const models = {
  app,
  // streams,
  // chat,
  ui,
};

// export const useTypedSelector: TypedUseSelectorHook<ModelState> = useSelector;
