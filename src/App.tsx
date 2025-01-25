import "@/styles/animation.css";
import "@/styles/bg.css";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Router from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Root />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

function Root() {
  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.pathname === "/") navigate("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
}
