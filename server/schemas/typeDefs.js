const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    about: String
    location: String
    skills: [String]!
    img: String
    phone: String
  }

  type Service {
    _id: ID
    name: String
    priceInCents: Int
    quantitiy: Int
  }

  type Auth {
    token: ID
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
    service(serviceId: ID!): Service
    services: [Service]!
  }

  type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!, img:String!): Auth
    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile(profileId: ID!): Profile
    removeSkill(profileId: ID!, skill: String!): Profile
    updateProfile(firstName: String, lastName: String, email: String, password: String): Profile
    updateMyAbout(profileId: ID!, about: String!):Profile
    updateMyLocation(profileId: ID!, location: String!):Profile
    updateMyEmail(profileId: ID!, email: String!):Profile
    updateMyPhone(profileId: ID!, phone: String!):Profile
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// about:String!,location:String!
