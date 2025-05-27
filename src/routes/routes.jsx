import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../components/layout";
import { GameForm } from "../pages/gameForm";
import { GameList } from "../pages/gameList";
import { GameSearch } from "../pages/gameSearch";
import { GameEdit } from "../pages/gameEdit";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Register />} />
        <Route path="/login" index element={<Login />} />

        <Route path="/home" element={<MainLayout />}>
          <Route path="gameform" element={<GameForm />} />
          <Route path="gamelist" element={<GameList />} />
          <Route path="gamesearch" element={<GameSearch />} />
          <Route path="gameedit" element={<GameEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
