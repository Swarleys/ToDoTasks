"use client";

import { ReactNode } from "react";
import { store } from "@/app/stores/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
