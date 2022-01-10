import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;


// export const QUERY_TECH = gql`
//   query tech {
//     tech {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_MATCHUPS = gql`
//   query matchups($_id: String) {
//     matchups(_id: $_id) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;
