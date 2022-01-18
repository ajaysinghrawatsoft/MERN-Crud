import User from '../model/userr-schema'

export const getUsers = async (req, res) => {
    try {
        let user = await User.find();
        res.status(200).json(user)
    }
    catch (error) { res.json({ message: error.message }) }

}

export const getUser = async (req, res) => {
    try {
        let user_id = req.params.user_id;
        let user = await User.findOne({ _id: user_id });
        res.status(200).json(user)
    }
    catch (error) { res.json({ message: error.message }) }
}

export const addUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);

    try { await newUser.save(); res.json(newUser) }
    catch (error) { res.json({ message: error.message }) }
}

export const updateUser = async (req, res) => {
    const user = req.body;
    const user_id = req.params.user_id;
    const editUser = new User(user);

    try { await User.updateOne({ _id: user_id }, editUser); res.json(editUser) }
    catch (error) { res.json({ message: error.message }) }

}

export const deleteUser = async (req, res) => {
    const user_id = req.params.user_id;
    try { await User.deleteOne({ _id: user_id }); res.json("User Deleted Successfully.") }
    catch (error) { res.json({ message: error.message }) }
}