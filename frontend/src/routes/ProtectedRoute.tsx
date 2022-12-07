import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children } : { children: JSX.Element } ) => {
  const user = true
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
