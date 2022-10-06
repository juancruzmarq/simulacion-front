import React, { useCallback, useContext } from "react";
import Context from "../context/UserContext";
import { useLazyQuery, useQuery } from "@apollo/client";
import { LOGIN } from "../services/api";

export default function useUser() {
  const { jwt, setJwt } = useContext(Context);
  const [loginQuery] = useLazyQuery(LOGIN);

  const login = useCallback(async (email, password) => {
    const { loading, error, data } = await loginQuery({
      variables: { email, password },
    });
    if (!loading && data) {
      setJwt(data.login);
    }
  }, []);

  const logout = useCallback(() => {
    window.localStorage.removeItem("token");
    setJwt(null);
  }, [setJwt]);

  return { isLogged: Boolean(jwt), login, logout };
}
