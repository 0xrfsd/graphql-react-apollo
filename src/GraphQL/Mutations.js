import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $first_mame: String!
    $email: String!
    $password: String
  ) {
    createUser(
      first_name: $firstName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;