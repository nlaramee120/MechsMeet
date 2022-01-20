import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $img: String!
  ) {
    addProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      img: $img
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
      skills
    }
  }
`;

export const UPDATE_ABOUT = gql`
  mutation updateMyAbout($profileId: ID!, $about: String!) {
    updateMyAbout(profileId: $profileId, about: $about) {
      _id
      about
    }
  }
`;

export const UPDATE_LOCATION = gql`
  mutation updateMyLocation($profileId: ID!, $location: String!) {
    updateMyLocation(profileId: $profileId, location: $location) {
      _id
      location
    }
  }
`;
export const UPDATE_EMAIL = gql`
  mutation updateMyEmail($profileId: ID!, $email: String!) {
    updateMyEmail(profileId: $profileId, email: $email) {
      _id
      email
    }
  }
`;
export const UPDATE_PHONE = gql`
  mutation updateMyPhone($profileId: ID!, $phone: String!) {
    updateMyPhone(profileId: $profileId, phone: $phone) {
      _id
      phone
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

export const REMOVE_SKILL = gql`
  mutation removeSkill($profileId: ID!, $skill: String!) {
    removeSkill(profileId: $profileId, skill: $skill) {
      _id
      skills
    }
  }
`;
