export type ApplicationState = {
  selectedIp: string | undefined;
};

export const INITIAL_STATE: ApplicationState = { selectedIp: undefined };

export type Action = { type: "setSelectedIp"; payload: string };

export function reducer(prevState: ApplicationState, action: Action): ApplicationState {
  const nextState = structuredClone(prevState);

  switch (action.type) {
    case "setSelectedIp": {
      return {
        ...nextState,
        selectedIp: action.payload,
      };
    }
    default: {
      return { ...nextState };
    }
  }
}
