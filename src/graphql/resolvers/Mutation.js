import User from '../../models/User';

const Mutation = {
    createUser: async (_, { input }) => {
        const newUser = new User(input);
        await newUser.save();
        return newUser;
    },
    updateUser: async (_, { _id, input }) => {
        return await User.findByIdAndUpdate(_id, input, { new: true });
    },
    deleteUser: async (_, { _id }) => {
        return await User.findByIdAndDelete(_id);
    }
};

export default Mutation;