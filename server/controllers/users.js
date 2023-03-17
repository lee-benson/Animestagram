import User from '../models/users.js'
import Post from '../models/posts.js'

export async function getProfile(req, res) {
  const handle = req.params.handle
  // TODO how to aggregate?
  const user = await User.findOne({ handle })
  const posts = await Post.find({ userID: user._id })
  return res.json({
    ...user.toJSON(),
    posts,
  })
}

