import { createContext, useContext, useState } from "react";

const API = createContext();

const ContextApi = ({ children }) => {
  // sidebar DOM
  const [sidebar, setSidebar] = useState("sidebar");
  return (
    <>
      <API.Provider value={{ sidebar, setSidebar }}>{children}</API.Provider>
    </>
  );
};

export default ContextApi;

export function useAppState() {
  return useContext(API);
}
