const { Profile, Service } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');


const resolvers = {

  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    services: async () => {
      return Service.find();
    },
    service: async (parenet, { serviceId }) => {
      return Service.findOne({ _id: serviceId })
    } 
  },

  // Query: {
  //   profile: async (parent, args, context) => {
  //     if (context.profile) {
  //       const profile = await Profile.findById(context.profileId).populate({
  //         // path: 'orders.products',
  //         // populate: 'category'
  //       });
  //       return profile;
  //     }
  //       throw new AuthenticationError('Not logged in');
  //     }
  //   },

  //   profile: async (parent, { profileId }) => {
  //     return Profile.findOne({ _id: profileId });
  //   },
  // },

  Mutation: {
    addProfile:  async (parent, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    addSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { skills: skill },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    updateProfile: async (parent, args, context) => {
      if (context.profile) {
        return await Profile.findByIdAndUpdate(context.profileId, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    updateMyProfile: async (parent,{ profileId, about}) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { about: about },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeSkill: async (parent, { profileId, skill }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { skills: skill } },
        { new: true }
      );
    },

    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(profile);

      return { token, profile };
    },
  },
};

module.exports = resolvers;
