import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

export const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-5/6 mx-auto">
        <Outlet />
      </main>
    </>
  );
};
