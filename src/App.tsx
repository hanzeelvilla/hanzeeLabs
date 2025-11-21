import { Outlet } from "react-router-dom";
import { NavBar } from "./shared/components/NavBar";
import { Footer } from "./shared/components/Footer";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-tr from-pink-900 via-blue-950 to-black">
      <NavBar />
      <main className="flex flex-1 flex-col py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
