import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider.jsx";

export const useItemsContext = () => {
  return useContext(ItemsContext);
}