import { models } from "./models";
import { init } from "@rematch/core";
import immerPlugin from "@rematch/immer";



export function initializeStore(initialState: any = {}) {
  return init({
    models,
    // plugins: [immerPlugin()],
    redux: {
      initialState,
    },
  });
}
