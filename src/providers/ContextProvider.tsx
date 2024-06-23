import { Dispatch, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { Action, ApplicationState, INITIAL_STATE, reducer } from "../reducers";

export const ApplicationContext = createContext<{
  state: ApplicationState;
  dispatch: Dispatch<Action>;
}>({
  state: { selectedIp: undefined },
  dispatch: () => false,
});

type ApplicationStateProviderProps = PropsWithChildren;

export function ApplicationStateProvider({ children }: ApplicationStateProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    ...INITIAL_STATE,
  });

  return <ApplicationContext.Provider value={{ state, dispatch }}>{children}</ApplicationContext.Provider>;
}

export function useApplicationContext() {
  return useContext(ApplicationContext);
}
