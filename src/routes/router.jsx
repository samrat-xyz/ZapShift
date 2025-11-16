import { createBrowserRouter } from "react-router";
import Rootlayout from "../layout/Rootlayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Rootlayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:'/coverage',
        loader:()=>fetch('/warehouses.json'),
        Component:Coverage
      }
    ]
  },
]);
