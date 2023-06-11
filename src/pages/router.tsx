import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./home";
import { ProblemSolutionPage } from "./problem-solution";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/problems/:slug", element: <ProblemSolutionPage /> },
]);
