import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen">
      <header className="w-full h-16 flex flex-row items-center px-8 shadow-lg justify-between">
        <Link to="/">
          <h1 className="text-blue-500 font-bold">Podcaster</h1>
        </Link>
        <div id="loader"></div>
      </header>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
