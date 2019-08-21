import React, { createContext, useContext, useReducer, ReactNode } from "react";

type ContextType = {};

type AppStateType = {
  count: 0;
  things: Array<string>;
};

type ActionType =
  | { type: "MODAL_OPEN"; modalOpen: boolean }
  | { type: "INC" }
  | { type: "DEC" }
  | { type: "ADD_THING"; thing: string }
  | { type: "REMOVE_THING"; thing: string };

type ProviderPropsType = {
  children: ReactNode;
};

const Context = createContext<ContextType>({});

const initialState: AppStateType = {
  modalOpen: false,
  count: 0,
  things: []
};

function reducer(state: AppStateType, action: ActionType) {
  switch (action.type) {
    case "MODAL_OPEN":
      return { ...state, modalOpen: action.modalOpen };
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
}

function mapReducer(dispatch) {
  return {
    modalOpen: (modalOpen: boolean) =>
      dispatch({ type: "MODAL_OPEN", modalOpen }),
    increment: () => dispatch({ type: "INC" }),
    decrement: () => dispatch({ type: "DEC" }),
    addThing: (thing: string) => dispatch({ type: "ADD_THING", thing }),
    removeThing: (thing: string) => dispatch({ type: "REMOVE_THING", thing })
  };
}

export function AppProvider(props: ProviderPropsType) {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  const appActions = mapReducer(appDispatch);
  return (
    <Context.Provider value={{ appState, appActions }}>
      {props.children}
    </Context.Provider>
  );
}

export function useAppStore() {
  return useContext(Context);
}
