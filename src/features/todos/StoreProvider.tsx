"use client";

import { ReactNode } from "react";
import { store } from "@/stores/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
