import "@/styles/animation.css";
import "@/styles/bg.css";
import "@/styles/globals.css";
import "@/styles/tailwind.css";
import Router from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed queries up to 3 times
      staleTime: 10 * 60 * 1000, // Cache data for 10 minutes
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
            <Root />
            <Router />
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

function Root() {
  const url = window.location;

  useLayoutEffect(() => {
    if (url.pathname === "/") window.location.href = "/login";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster />
    </>
  );
}
