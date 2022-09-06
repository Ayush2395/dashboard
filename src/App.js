import React from "react";
import Dashboard from "./Components/Dashboard";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAtom,
  faBasketShopping,
  faCheck,
  faImage,
  faShirt,
  faStore,
  faThumbsUp,
  faTag,
  faList,
  faNewspaper,
  faUser,
  faChartSimple,
  faGear,
  faPowerOff,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Components/navigations/Sidebar";
import Navbar from "./Components/navigations/Navmenu";
library.add(
  faBasketShopping,
  faAtom,
  faThumbsUp,
  faCheck,
  faShirt,
  faImage,
  faStore,
  faTag,
  faList,
  faNewspaper,
  faUser,
  faChartSimple,
  faGear,
  faPowerOff,
  faCirclePlus
);

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </>
  );
}
