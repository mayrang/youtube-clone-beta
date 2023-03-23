import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { YoutubeContextProvider } from "../context/youtubeContext";
const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <NavBar />
      <YoutubeContextProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </YoutubeContextProvider>
    </>
  );
}
