import { gql } from "@apollo/client";

export const url = "http://localhost:3000/graphql";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
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
  query {
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
