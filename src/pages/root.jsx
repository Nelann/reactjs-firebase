import { Outlet } from "react-router-dom";

import Header from "@/components/header";

export default function Root() {
  return (
    <>
      <Header />
      <main className="max-w-screen-lg px-4 mx-auto mt-3">
        <Outlet />
      </main>
    </>
  );
}
