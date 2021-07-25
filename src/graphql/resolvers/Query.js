import User from '../../models/User';

const Query = {
    getUsers: async () => await User.find()
};

export default Query;