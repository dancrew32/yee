import React, { createContext, useContext, useReducer, ReactNode } from "react";

type ContextType = {};

type ProductType = {
  image: string;
};

type AppStateType = {
  products: Array<ProductType>;
  productsInitialLoading: boolean;
  productsNextLoading: boolean;
};

type ActionType =
  | { type: "MODAL_OPEN"; modalOpen: boolean }
  | { type: "ADD_PRODUCTS"; products: Array<ProductType> }
  | { type: "SET_PRODUCTS_INITIAL_LOADING"; productsInitialLoading: boolean }
  | { type: "SET_PRODUCTS_NEXT_LOADING"; productsNextLoading: boolean };

type ProviderPropsType = {
  children: ReactNode;
};

const Context = createContext<ContextType>({});

const initialState: AppStateType = {
  modalOpen: false,
  products: [],
  productsInitialLoading: false,
  productsNextLoading: false
};

function reducer(state: AppStateType, action: ActionType) {
  switch (action.type) {
    case "MODAL_OPEN":
      return { ...state, modalOpen: action.modalOpen };
    case "ADD_PRODUCTS":
      return { ...state, products: state.products.concat(action.products) };
    case "SET_PRODUCTS_INITIAL_LOADING":
      return {
        ...state,
        productsInitialLoading: action.productsInitialLoading
      };
    case "SET_PRODUCTS_NEXT_LOADING":
      return { ...state, productsNextLoading: action.productsNextLoading };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
}

function mapReducer(dispatch) {
  return {
    modalOpen: (modalOpen: boolean) =>
      dispatch({ type: "MODAL_OPEN", modalOpen }),
    addProducts: (products: Array<ProductType>) =>
      dispatch({ type: "ADD_PRODUCTS", products }),
    setProductsInitialLoading: (productsInitialLoading: boolean) =>
      dispatch({
        type: "SET_PRODUCTS_INITIAL_LOADING",
        productsInitialLoading
      }),
    setProductsNextLoading: (productsNextLoading: boolean) =>
      dispatch({ type: "SET_PRODUCTS_NEXT_LOADING", productsNextLoading })
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
