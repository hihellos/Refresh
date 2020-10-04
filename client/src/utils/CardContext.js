import { useContext, createContext } from "react";

export const CardContext = createContext(null);

export function useCardContext() {
  return useContext(CardContext);
}