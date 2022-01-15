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

export const QUERY_ME = gql`
  query me {
    me {
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

export const QUERY_SERVICES = gql`
  query allServices {
    services {
      name
      priceInCents
      quantity
    }
  }`;

export const QUERY_SINGLE_SERVICE = gql`
  query singleService {
    service {
      _id
      name
      priceInCents
      quantity
    }
  }`;