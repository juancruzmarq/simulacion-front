import { gql } from "@apollo/client";

export const url = "http://192.168.0.1:3000/graphql";

export const LOGIN = gql`
  query Query($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;
// Query to get user data
export const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      email
    }
  }
`;

export const GET_CLIENTES = gql`
  query getClientes {
    getClientes {
      id
      llegada
      salida
      ingresaCola
      salidaCola
      comienzaAtencion
      terminaAtencion
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CLIENTE = gql`
  mutation CreateCliente($tiempo: String!) {
    createCliente(tiempo: $tiempo) {
      id
      llegada
      salida
      ingresaCola
      salidaCola
      comienzaAtencion
      terminaAtencion
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CLIENTE = gql`
  mutation UpdateCliente($cliente: ClienteUpdate!, $updateClienteId: Float!) {
    updateCliente(cliente: $cliente, id: $updateClienteId) {
      id
      llegada
      salida
      ingresaCola
      salidaCola
      comienzaAtencion
      terminaAtencion
      createdAt
      updatedAt
    }
  }
`;
