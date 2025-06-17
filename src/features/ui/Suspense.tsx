import { Suspense } from "react";
import { GlobalSuspense } from "./GlobalSuspense";

export const WithSuspense = (component: JSX.Element) => (
  <Suspense fallback={<GlobalSuspense />}>{component}</Suspense>
);
