import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <NavBar />
      <QueryClientProvider client={queryClient} >
      <Outlet />
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
      
    </>
  );
}
