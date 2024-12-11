"use client";

import { useState, createContext, ReactNode, FC } from "react";

export interface DateState {
  state: [state: any | undefined, setState: (date: any) => void];
}

export const Context = createContext<DateState | null>(null);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<any>();

  return (
    <Context.Provider
      value={{
        state: [state, setState],
      }}
    >
      {children}
    </Context.Provider>
  );
};
