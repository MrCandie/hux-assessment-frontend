import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/home/Home"));
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Contact = lazy(() => import("./pages/contacts/Contact"));
const CreateContact = lazy(() =>
  import("./pages/create-contact/CreateContact")
);
const ViewContact = lazy(() => import("./pages/view-contact/ViewContact"));
const EditContact = lazy(() => import("./pages/edit-contact/EditContact"));
const Profile = lazy(() => import("./pages/profile/Profile"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
        path="/"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Login />
          </Suspense>
        }
        path="/login"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Register />
          </Suspense>
        }
        path="/register"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        }
        path="/contact"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <CreateContact />
          </Suspense>
        }
        path="/contact/create"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <ViewContact />
          </Suspense>
        }
        path="/contact/:id"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <EditContact />
          </Suspense>
        }
        path="/contact/:id/edit"
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        }
        path="/profile"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
