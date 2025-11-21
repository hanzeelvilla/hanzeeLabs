import { Outlet } from "react-router-dom";
import { NavBar } from "./components/shared/components/NavBar";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex flex-1 flex-col bg-linear-to-tr from-slate-900 via-blue-950 to-black">
        <Outlet />
      </main>
    </div>
  );
};
