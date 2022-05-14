import SignIn from "../view/Auth/signIn";
import SignUp from "../view/Auth/signUp";

const authRoutes = [
  {
    name: "Sign In",
    route: "signin",
    path: "/auth",
    element: <SignIn />,
    authorization: false,
  },
  {
    name: "Sign Up",
    route: "signup",
    path: "/auth",
    element: <SignUp />,
    authorization: false,
  },
  {
    name: "Forget Password",
    route: "forgetPassword",
    path: "/auth",
    element: <SignIn />,
    authorization: false,
  },
];
export default authRoutes;
