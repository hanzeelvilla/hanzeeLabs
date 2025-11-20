import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Home } from "./components/home/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Services } from "./components/services/Services.tsx";
import { About } from "./components/about/About.tsx";
import { Faq } from "./components/faq/Faq.tsx";
import { Contact } from "./components/contact/Contact.tsx";
import { Estimate } from "./components/estimate/Estimate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "servicios", element: <Services /> },
      { path: "nosotros", element: <About /> },
      { path: "faq", element: <Faq /> },
      { path: "contacto", element: <Contact /> },
      { path: "cotizar", element: <Estimate /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
