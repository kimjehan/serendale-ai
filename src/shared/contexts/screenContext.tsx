"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
type TScreenTypes = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type TScreenSizes = {
  [key in TScreenTypes]: boolean;
};

const getScreenSizes = (width: number): TScreenSizes => ({
  xs: width >= 390,
  sm: width >= 640,
  md: width >= 768,
  lg: width >= 1024,
  xl: width >= 1280,
  "2xl": width >= 1536,
});

const ScreenContext = createContext<TScreenSizes | null>(null);

export const ScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [screen, setScreen] = useState<TScreenSizes>(getScreenSizes(1920));

  useEffect(() => {
    const update = () => setScreen(getScreenSizes(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <ScreenContext.Provider value={screen}>{children}</ScreenContext.Provider>
  );
};

export const useScreen = (): TScreenSizes => {
  const context = useContext(ScreenContext);
  if (!context) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
};
