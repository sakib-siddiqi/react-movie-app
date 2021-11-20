import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";

export default function useAuth() {
  return useContext(AuthProvider);
}
