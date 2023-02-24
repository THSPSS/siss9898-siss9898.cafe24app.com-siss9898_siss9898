import express from "express"
import { getMembers} from "../controllers/member.js"

const router = express.Router()


router.get("/", getMembers)

export default router;