import { Suspense, lazy, useEffect } from "react";
// import { Home } from "./component";
const Home = lazy(() => import("./component/Home"));
export default function App() {
  useEffect(() => {
    let htmlclass = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlclass.add("dark");
    }
  }, []);
  return (
    <div>
      <Suspense
        fallback={<h1 className="text-2xl py-10 px-20">Loading ....</h1>}
      >
        <Home />
      </Suspense>
    </div>
  );
}
