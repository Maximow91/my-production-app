import {
  type CombinedState,
  configureStore,
  type Reducer,
  type ReducersMapObject,
} from "@reduxjs/toolkit";
import { userReducer } from "@/entities/User";
import { UIReducer } from "@/features/UI";
import { type NavigateOptions, type To } from "react-router-dom";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
import { createReducerManager } from "./reducerManager";
import { type StateSchema } from "./StateSchema";

export const returnReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    [rtkApi.reducerPath]: rtkApi.reducer,
    user: userReducer,
    ui: UIReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }).concat(rtkApi.middleware),
  });
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof returnReduxStore>["dispatch"];
