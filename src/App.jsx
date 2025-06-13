import React from "react";

import ReactDOM from "react-dom/client";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./Details";
import PetDetails from "./PetDetails";
import RootLayout from "./RootLayout";
import NotFound from "./ErrorPage";

// React Query
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();


// App component using JSX
// Root Component
const App = () => {
const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { path: "", element: <SearchParams /> },
      { path: "pets", element: <SearchParams /> },
      { path: "details", element: <Details /> },
      { path: "pets/:id", element: <PetDetails /> },
    ],
  },
]);

  return (
      <RouterProvider router={appRouter}> </RouterProvider>
      );
};

// REACT DOM
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
      <React.StrictMode>
          <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
      </React.StrictMode>
);
