import User from '../models/users.js'


export async function getProfile(req, res) {
  try {
    const username = req.params.username
    // TODO how to aggregate?
    const user = await User.findOne({ username }).populate("posts")

    return res.json({
      ...user.toJSON(),
      // posts,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}