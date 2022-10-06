import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CLIENTES } from "../services/api";

export default function useCliente() {
  const [clientes, setClientes] = useState([]);
  const { loading, error, data } = useQuery(GET_CLIENTES, {
    onCompleted: (data) => {
      setClientes(data.getClientes);
    },
  });
  return { clientes, loading, error };
}
