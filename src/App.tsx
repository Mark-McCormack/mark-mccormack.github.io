import React, { Suspense, lazy } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { pages, hidden } from "./content";

const Home = lazy(() => import("./pages/Home"));
const ContentPage = lazy(() => import("./pages/ContentPage"));

const App = () => (
  <HashRouter>
    <Suspense fallback={null}>
      <Routes>
        <Route path="" element={<Home />} />
        {pages
          .filter((p) => !hidden.includes(p.path))
          .map((p) => (
            <Route key={p.path} path={p.path} element={<ContentPage key={p.path} {...p} />} />
          ))}
      </Routes>
    </Suspense>
  </HashRouter>
);

export default App;
