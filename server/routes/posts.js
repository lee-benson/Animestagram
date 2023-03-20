import { Router } from "express";
import * as postController from '../controllers/posts.js'
import verifyAuth from "../middleware/veryAuth.js";

const router = Router()

router.get('/', postController.GetPosts)
router.post('/', verifyAuth, postController.CreatePost)
router.get('/:username', postController.GetPostByUser)
router.delete('/:username', verifyAuth, postController.DeletePost)
router.put('/:username', verifyAuth, postController.UpdatePost)

export default router
