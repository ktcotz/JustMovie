import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./style/index.css";
import "./lib/i18n/i18n.ts";
import "./lib/supabase/supabase.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
