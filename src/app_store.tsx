import React, { createContext, useContext, useReducer, ReactNode } from "react";

type ContextType = {};

type AppStateType = {
  count: 0;
  things: Array<strings>;
};

type ActionType =
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "ADD_THING"; thing: string }
  | { type: "REMOVE_THING"; thing: string };

type ProviderPropsType = {
  children: ReactNode;
};

const Context = createContext<ContextType>({});

const initialState: AppStateType = {
  count: 0,
  things: []
};

const reducer = (state: AppStateType, action: ActionType) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    case "ADD_THING":
      return { ...state, things: [...state.things, action.thing] };
    case "REMOVE_THING":
      return {
        ...state,
        things: state.things.filter(thing => thing !== action.thing)
      };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export const AppProvider = (props: ProviderPropsType) => {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ appState, appDispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export const useAppStore = () => {
  return useContext(Context);
};
