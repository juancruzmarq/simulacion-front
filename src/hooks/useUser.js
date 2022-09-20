import { useCallback, useContext } from "react";
import Context from "../context/UserContext";

export default function useUser() {
  const { jwt, setJwt } = useContext(Context);

  const login = useCallback(
    (jwt) => {
      window.localStorage.setItem("jwt", jwt);
      setJwt(jwt);
    },
    [setJwt]
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem("jwt");
    setJwt(null);
  }, [setJwt]);

  return { isLogged: Boolean(jwt), login, logout };
}
