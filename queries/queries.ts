import { gql } from "apollo-boost";

export const INFO = gql`
  {
    infoRegister {
      name,
      zip,
      street,
      numberStreet,
      neighborhood,
      city,
      state
    }
  }
`;

export const UPDATE = gql`
  mutation UpdateRegister($input: RegisterInput) {
    updateRegister(input: $input) {
      name,
      zip,
      street,
      numberStreet,
      neighborhood,
      city,
      state
    }
  }
`;
