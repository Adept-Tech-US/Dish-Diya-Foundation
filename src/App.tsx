import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/projects/ProjectDetail";


const queryClient = new QueryClient();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "/about",
    element: <About />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "/contact",
    element: <Contact />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetail />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
  {
    path: "*",
    element: <NotFound />,
    children: [{ index: true, element: <ScrollRestoration /> }],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={router} />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
