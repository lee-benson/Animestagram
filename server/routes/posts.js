import { Router } from "express";
import * as postController from '../controllers/posts.js'
import verifyAuth from "../middleware/veryAuth.js";
import jwt from "jsonwebtoken";

const router = Router()

router.get('/', postController.GetPosts)
router.post('/', verifyAuth, postController.CreatePost)
router.get('/:username', postController.GetPostByUser)
router.delete('/:title', verifyAuth, postController.DeletePost)
router.put('/:title', verifyAuth, postController.UpdatePost)

export default router
