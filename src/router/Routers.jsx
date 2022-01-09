import { Home } from "./../Home";
import { Page1 } from "./../Page1";
import { Page2 } from "./../Page2";
import { Page404 } from "./../Page404";

import { Page1DetailA } from "./../Page1DetailA";
import { Page1DetailB } from "./../Page1DetailB";
import { UrlParameter } from "./../UrlParameter";
import { Routes, Route } from "react-router-dom";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="page1">
          <Route index element={<Page1 />} />

          <Route path="detailA">
            <Route index element={<Page1DetailA />} />
          </Route>

          <Route path="detailB">
            <Route index element={<Page1DetailB />} />
          </Route>
        </Route>
        <Route path="page2">
          <Route index element={<Page2 />} />
          <Route path=":id">
            <Route index element={<UrlParameter />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
