import { Outlet } from "react-router-dom";

import Header from "@/components/header";

export default function Root() {
  return (
    <>
      <Header />
      <main className="max-w-screen-lg mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
}
