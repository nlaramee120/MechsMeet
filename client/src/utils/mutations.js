import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addProfile(
  $firstName: String!
  $lastName: String!
  $email: String!
  $password: String!
) {
  addProfile(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    token
    profile {
      _id
      firstName
      skills
    }
  }
}
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
      }
    }
  }
`;
