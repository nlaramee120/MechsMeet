import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      firstName
      lastName
      email
      about
      location
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      firstName
      lastName
      email
      about
      location
      skills
    }
  }
`;

export const QUERY_PROFILE = gql`
{
    profile{
      _id
      firstName
      lastName
      email
      about
      location
      skills
    }
  }
`;