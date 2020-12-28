// import Cookies from "js-cookie";
import { createModel } from "@rematch/core";
// import { UserChatRole } from "@ui/domain/chat/chatTypes";
// import { LoggedInUserFragment } from "@ui/generated/graphql";
// import { FrontendEvent } from "@ui/events/eventRegistry";
// import { emitGlobalEvent } from "@ui/events";
// import { getLocalStorage } from "@app/utils/localStorage";
// import { getRemember } from "@ui/helpers/getRemember";
// import { UserAgent } from "@ui/redux/models/app";
import Lockr from "lockr";

// export interface Roles {
//     userId: string;
//     role: UserChatRole;
// }

export interface AppState {
  user: any;
  //  userId: any;
  loggedIn: boolean;
  //  activeLanguage: string;
  //  topLoader: any;
  // userAgent: UserAgent;
  //  seenPopup: boolean;
}

// @ts-ignore
export const app = {
  state: {
    user: null,
    loggedIn: false,
    // userId: null,
    //  activeLanguage: "EN",
    //  topLoader: null,
    //  role: null,
    // userAgent: UserAgent.Visitor,
  },
  reducers: {
    // bootstrap(state: AppState) {
    //   state.session = Cookies.get("session");
    //   state.userId = Cookies.get("session-user-id");
    //   state.seenPopup = Cookies.get("seen-popup") === "true";
    //   state.sessionLoading = false;
    //   state.activeLanguage = getLocalStorage("language", state.activeLanguage);
    //   return state;
    // },
    setUser(state: AppState, user) {
      if (!user) {
        console.error("Dont set a NULL user. Use logout() instead");
        return state;
      }

      return {
        ...state,
        user,
        loggedIn: true,
      };
    },
    // confirmPopup(state: AppState) {
    //   Cookies.set("seen-popup", "true", { expires: 7 });
    //   return {
    //     ...state,
    //     seenPopup: true,
    //   };
    // },
    // setLanguage(state: AppState, activeLanguage) {
    //   state.activeLanguage = activeLanguage || null;
    //   Lockr.set("language", state.activeLanguage);
    //   return state;
    // },
    logout(state: AppState, history) {
      Lockr.rm("shop-user");
      Lockr.rm("shop-token");
      history.replace("/");

      return {
        ...state,

        user: null,
        loggedIn: false,
      };
    },
  },
};
