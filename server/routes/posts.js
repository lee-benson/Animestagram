import { Router } from "express";
import * as postController from '../controllers/posts.js'
import verifyAuth from "../middleware/veryAuth.js";

const router = Router()

router.get('/', postController.GetPosts)
router.post('/', verifyAuth, postController.CreatePost)
router.get('/:id', postController.GetPostById)
router.get('/:id', verifyAuth, postController.DeletePost)
router.get('/:id', verifyAuth, postController.UpdatePost)

export default router
