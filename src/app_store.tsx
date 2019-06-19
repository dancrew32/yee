import React, { createContext, useContext, useReducer } from "react";

type ActionType = {
  type: string;
};

type AppStateType = {
  count: 0;
};

type AppContextType = {};

type ProviderPropsType = {
  children: any;
};

const initialState: AppStateType = {
  count: 0
};

const AppContext = createContext<AppContextType>({});

const reducer = (state: AppStateType, action: ActionType) => {
  switch (action.type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const Provider = (props: ProviderPropsType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useStore = () => {
  return useContext(AppContext);
};