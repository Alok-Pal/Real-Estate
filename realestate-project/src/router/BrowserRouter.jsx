import {
  // Route,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout";
import About from "../components/About/About";
import AddListing from "../components/AddListing/AddListing.jsx";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import LoginPage from "../components/Login/LoginPage.jsx";
import SignUpPage from "../components/SignUp/SignUpPage.jsx";
import User from "../components/User/User";
import CardDetail from "../components/CardDetails/CardDetail.jsx";
import Wishlist from "../components/Wishlist/Wishlist.jsx";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user/:userId",
        element: <User />,
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/signUp",
        element: <SignUpPage/>
      },
      {
        path: "/addListing",
        element: <AddListing/>
      },
      {
        path: "/cardDetail/:id",
        element: <CardDetail/>
      },
      {
        path: "/wishlist",
        element: <Wishlist/>
      },
    ],
  },
]);

// Another Way to create Router

// export const Router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );
