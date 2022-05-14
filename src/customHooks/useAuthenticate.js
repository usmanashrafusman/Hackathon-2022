import { useSelector } from "react-redux";

export const useAuth = () => {
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = token ? true : false;
  console.log(isAuthenticated);
  return isAuthenticated;
  // return true;
};
