import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Coups } from "./person/coups/coups.jsx";
import { JeongHan } from "./person/jeongHan/jeongHan.jsx";
import { Joshu } from "./person/joshu/joshu.jsx";
import { Jun } from "./person/jun/jun.jsx";
import { Hoshi } from "./person/hoshi/hoshi.jsx";
import { Wonwoo } from "./person/wonwoo/wonwoo.jsx";
import { Woozi } from "./person/woozi/woozi.jsx";
import { Dk } from "./person/dk/dk.jsx";
import { Mingyu } from "./person/mingyu/mingyu.jsx";
import { The8 } from "./person/the8/the8.jsx";
import { Boo } from "./person/boo/boo.jsx";
import { Vernon } from "./person/vernon/vernon.jsx";
import { Dino } from "./person/dino/dino.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  { path: "/", element: <App /> },
  { path: "coups", element: <Coups /> },
  { path: "jeong-han", element: <JeongHan /> },
  { path: "joshua", element: <Joshu /> },
  { path: "jun", element: <Jun /> },
  { path: "hoshi", element: <Hoshi /> },
  { path: "wonwoo", element: <Wonwoo /> },
  { path: "woozi", element: <Woozi /> },
  { path: "dk", element: <Dk /> },
  { path: "mingyu", element: <Mingyu /> },
  { path: "the8", element: <The8 /> },
  { path: "boo", element: <Boo /> },
  { path: "vernon", element: <Vernon /> },
  { path: "dino", element: <Dino /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
