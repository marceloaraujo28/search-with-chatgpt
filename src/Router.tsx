import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SearchAsk } from "./pages/SearchAsk";
import { SearchImg } from "./pages/SearchImg";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SearchImg />} />
        <Route path="/ask" element={<SearchAsk />} />
      </Route>
    </Routes>
  );
}
