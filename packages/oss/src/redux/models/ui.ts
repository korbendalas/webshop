import { createModel } from "@rematch/core";

export enum PopupLoginState {
  Hidden = 0,
  Login = 1,
  Register = 2,
}

export interface UiState {
  mainPageGridSize: number;
  showLoginPopup: PopupLoginState;
}

export const ui = {
  state: {
    // sidebarOpen: true,
    // bootstrapped: false,
    // chatSideBarOpen: true,
    mainPageGridSize: 8,
    // chatShowTimestamp: true,
    showLoginPopup: PopupLoginState.Hidden,
  },
  reducers: {
    // bootstrap(state: UiState) {
    //   state.sidebarOpen = getLocalStorage("right-sidebar-state", true);
    //   state.tipVolume = getLocalStorage("tip-volume", 50);
    //   state.chatTextSize = getLocalStorage("chat-text-size", "r");
    //   state.bootstrapped = true;
    //   return state;
    // },

    // setSidebar(state: UiState, open) {
    //   state.sidebarOpen = open;
    //   Lockr.set("right-sidebar-state", state.sidebarOpen);
    //   return state;
    // },
    // toggleSidebar(state: UiState) {
    //   state.sidebarOpen = !state.sidebarOpen;
    //   Lockr.set("right-sidebar-state", state.sidebarOpen);
    //   return state;
    // },

    setLoginState(state: UiState, loginState: PopupLoginState) {
      state.showLoginPopup = loginState;
      return state;
    },
    openLoginPopup(state: UiState) {
      state.showLoginPopup = PopupLoginState.Login;
      return state;
    },
    closeLoginPopup(state: UiState) {
      state.showLoginPopup = PopupLoginState.Hidden;
      return state;
    },
    openRegisterPopup(state: UiState) {
      state.showLoginPopup = PopupLoginState.Register;
    },

    setMainGridSize(state: UiState, gridSize) {
      state.mainPageGridSize = gridSize;
      return state;
    },
  },
};
